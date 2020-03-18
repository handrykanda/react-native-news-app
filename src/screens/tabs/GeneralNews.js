import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Dimensions, SafeAreaView,
  FlatList, } from 'react-native';
import { Container, Text, View } from 'native-base';
import PropTypes from 'prop-types';

//components
import {NewsItem} from '../../components/NewsItem'
import NewsModal from '../../components/NewsModal'
//redux stuff
import { connect } from 'react-redux';
import { getGeneralNews, getNewsArticle } from '../../redux/actions/newsActions';

import axios from 'axios'


const {height, width} = Dimensions.get('window')

class GeneralNews extends Component {

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
    this.props.getGeneralNews();
  }

  render() {
    const { general } = this.props.news;
    const { loading } = this.props.ui;
    console.log("this.props: ",this.props);
    let newsmarkup =  loading ? (
      <View style={[styles.container, styles.column]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{marginTop:10}}>Please wait...</Text>
      </View>
    ):(
    <SafeAreaView style={{flex: 1}}>
    <FlatList
      data={general}
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
        // articleData={this.state.modalArticleData}
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
    height: height
  },
  column: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    padding: 10
  }
})

GeneralNews.propTypes = {
  getGeneralNews: PropTypes.func.isRequired,
  getNewsArticle: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  news: state.news,
  ui: state.ui
});

export default connect(
  mapStateToProps,
  { getGeneralNews, getNewsArticle }
)(GeneralNews);