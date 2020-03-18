import React, {Component} from 'react';
import {Dimensions, Share, Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

//redux stuff
import { connect } from 'react-redux';


const WebViewHeight = Dimensions.get('window').height - 56;

const {title, url} = this.props.news.newsArticle;

class NewsModal extends Component {

    handleClose = () => {
      return this.props.onClose();
    }

    handleShare = () => {
      const message = `${title}\n\nRead More @${url}\n\nShared via Handrie News App`;

      return Share.share({
        title, message, url: message
      },{
        dialogTitle:`Share ${title}`
      })
    }

  render() {
    
    const { isVisible, onClose } = this.props;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={isVisible}
          onRequestClose={this.handleClose}
          >
          <Container style={{margin:15, marginBotton:0, backgroundColor:'#fff'}}>
            <Header transparent>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{ fontSize:20}}/>
                </Button>
              </Left>
              <Body>
                <Title children={title} style={{}}/>
              </Body>
              <Right>
              <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ fontSize:20}}/>
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{height: WebViewHeight}}>
              <WebView
              source = {{uri:url}}
              style={{flex:1}}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
    );
    } else {
      return null;
    }
    
  }
}

NewsModal.propTypes = {
  news: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  news: state.news,
  ui: state.ui
});

export default connect(
  mapStateToProps
)(NewsModal);