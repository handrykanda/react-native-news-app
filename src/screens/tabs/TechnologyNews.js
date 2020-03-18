import React, { Component } from 'react';
import { Alert, ActivityIndicator, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { Container, Text, View } from 'native-base';
import axios from 'axios';
import PropTypes from 'prop-types';

//components
import {NewsItem} from '../../components/NewsItem'
import NewsModal from '../../components/NewsModal'
//redux stuff
import { connect } from 'react-redux';
import { getTechnologyNews, getNewsArticle } from '../../redux/actions/newsActions';


const {SCREEN_HEIGHT} = Dimensions.get('window')

class TechnologyNews extends Component {

  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      modalVisibibilty: false,
      modalArticleData: {}
      }
  }

  handleArticleDataOnPress = (articleData) => {
    this.setState({
      modalVisibibilty: true
    });
    this.props.getNewsArticle(articleData);
  }

  handleModalClose = () => {
    this.setState({
      modalVisibibilty: false,
      modalArticleData: {}
    })
  }

  componentDidMount(){
    this.props.getTechnologyNews();
  }

  render() {
    const { technology } = this.props.news;
    const { loading } = this.props.ui;
    let newsmarkup =  loading ? (
      <View style={[styles.container, styles.column]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{marginTop:10}}>Please wait...</Text>
      </View>
    ):(
      <SafeAreaView style={{flex: 1}}>
      <FlatList
      data={technology}
      renderItem={({ item }) => (
        <NewsItem id={item.id} onPress={this.handleArticleDataOnPress} data={item} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </SafeAreaView>
    )
    return (
      <Container>
         {newsmarkup}
        <NewsModal
        isVisible={this.state.modalVisibibilty}
        onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: SCREEN_HEIGHT
  },
  column: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    padding: 10
  }
})

TechnologyNews.propTypes = {
  getTechnologyNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  news: state.news,
  ui: state.ui
});

export default connect(
  mapStateToProps,
  { getTechnologyNews, getNewsArticle }
)(TechnologyNews);