import './profile.scss';
import React, { Component } from 'react';
import PrHello from './components/pr_hello';

export default class Profile extends Component {

    componentDidMount(){
      console.log('Render-pr')
    }

    render() {
      return(
          <div id="profileWrap">
            <div className="body-left">
                <div className="sticky-ly">
                  <h1>ME<span>.</span></h1>
                  <b>
                    {/* <i /> */}
                  </b>
                  <ul className="me-menu">
                    <li><a href="#" className="act">Intro</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Resume</a></li>
                  </ul>
                </div>
            </div>
            
            <div className="body-right">

              {/* 인사말 */}
              <PrHello />

              {/* 학교, 경력 */}
                  

              {/* 보유 스킬 */}


              {/* 이력서 다운 */}

            </div>   
          </div>
      )
    }
}


