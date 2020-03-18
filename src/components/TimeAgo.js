import React, { Component } from 'react'
import {View} from 'react-native'
import { Text} from 'native-base'
import moment from 'moment'

export default class TimeAgo extends Component {


    constructor(props){
        super(props);
        this.date = props.time;
    }

    render() {
        const timeFromNow = moment(this.date || moment.now()).fromNow();
        return (
            <View>
                <Text style={{fontSize:10}} note>{timeFromNow}</Text>
            </View>
        )
    }
}
