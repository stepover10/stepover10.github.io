import React, { Component } from 'react';
import DescCore from 'pages/core/DescCore'
import Expform from './ExpForm'

export default class ExpUneedcomms extends Component {
    render(){
        return(
            <Expform
                expList={DescCore.projects}
            />            
        )
    }
}