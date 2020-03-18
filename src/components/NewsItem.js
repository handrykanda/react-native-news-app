import React, { Component } from 'react'
import {TouchableOpacity, View} from 'react-native'
import { ListItem, Thumbnail, Text, Left, Body, Right,Button } from 'native-base';
import {assets} from '../config/apiConfig'

//components
import TimeAgo from './TimeAgo'

export class NewsItem extends Component {

    constructor(props){
        super(props);
        this.data = props.data;
        this.state = {
          title: 'Title no found',
          description: 'Description no found',
          urlToImage: assets.noImage,

        }
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
       const  urlToImage = this.data.urlToImage ? this.data.urlToImage : this.state.urlToImage
        return (
          
            <ListItem thumbnail>
              <TouchableOpacity onPress={this.handlePress} >
              <Left>
                <Thumbnail defaultSource={this.state.urlToImage} square source={{uri: urlToImage.toString()}} />
              </Left>
              </TouchableOpacity>
              
              <Body>
              <TouchableOpacity onPress={this.handlePress} >
                <Text style={{paddingRight:10}} numberOfLines={1}>{this.data.title}</Text>
              
                <Text style={{paddingRight:10}} note numberOfLines={2}>{this.data.description ? this.data.description : this.state.description}</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:5, marginLeft:0}}>
                <Text style={{fontSize:10, fontWeight: 'bold'}} note>{this.data.source.name}</Text>
                  <TimeAgo time={this.data.publishedAt}/>
                </View>
                </TouchableOpacity>
              </Body>
            </ListItem>
            
        )
    }
}
