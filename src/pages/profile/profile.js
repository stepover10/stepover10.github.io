import './profile.scss';
import React, { Component } from 'react';

export default class Profile extends Component {

    componentDidMount(){
      console.log('Render-pr')
    }

    render() {
      return(
          <div id="profileWrap">

            <div className="body-left">
                <h1>ME<span>.</span></h1>
            </div>

            <div className="body-right">
              WELCOME<br/>
              <b>FRONTEND-DEVELOPER</b><br/>
              YOO.CHAN.HYUN     
            </div>   
          </div>
      )
    }
}


