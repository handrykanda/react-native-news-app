import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Right, Title } from 'native-base';

//screens
import GeneralNews from './tabs/GeneralNews';
import TechnologyNews from './tabs/TechnologyNews';
import SportsNews from './tabs/SportsNews';

export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header 
        hasTabs
        style={{backgroundColor:'#448AFF'}}>
        <Left/>
          <Body>
            <Title style={{color:'#fff'}}>Zim News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#fff'}} >
          <Tab 
          tabStyle={{backgroundColor:'#448AFF'}} 
          activeTabStyle={{backgroundColor:'#448AFF'}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading='All'
          >
            <GeneralNews />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:'#448AFF'}} 
          activeTabStyle={{backgroundColor:'#448AFF'}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading='Tech'
          >
            <TechnologyNews />
          </Tab>
          <Tab 
          tabStyle={{backgroundColor:'#448AFF'}} 
          activeTabStyle={{backgroundColor:'#448AFF'}}
          textStyle={{color:'#fff'}}
          activeTextStyle={{color:'#fff'}}
          heading='Sports'
          >
            <SportsNews />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}