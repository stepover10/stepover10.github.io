import './profile.scss';
import React, { Component } from 'react';
import PrHello from './components/pr_hello';
import PrExp from './components/pr_exp';

export default class Profile extends Component {

    componentDidMount(){      
      this.moveBody()
      this.menuAct()
    }

    menuAct(){      
      const aDom = document.getElementById("me-menu").querySelectorAll('a')
      const actStatus = ( event ) => {
        aDom.forEach( elm => {
          elm.classList.remove('act')
        })
        event.target.classList.add('act')
      }
      
      aDom.forEach( elm => {        
        elm.addEventListener("click", actStatus );
      })
    }

    moveBody(){
      $( ".scrollLink" ).click(function( event ) {
          event.preventDefault();
          $("html, body").animate({ 
            scrollTop: $( $(this).attr("data-href") ).offset().top 
          }, 500);
      })
    }

    render() {
      return(
          <div id="profileWrap">
            <div className="body-left">
                <div className="sticky-ly">
                  <h1>ME<span>.</span></h1>
                  <b />                  
                  <ul id="me-menu" className="me-menu">
                    <li><a data-href="#hello" className="scrollLink act">Intro</a></li>
                    <li><a data-href="#exp" className="scrollLink">Experience</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Resume</a></li>
                  </ul>
                </div>
            </div>
            
            <div className="body-right">

              {/* 인사말 */}
              <PrHello arthor="hello"/>

              {/* 학교, 경력 */}
              <PrExp arthor="exp"/>

              {/* 보유 스킬 */}


              {/* 이력서 다운 */}

            </div>   
          </div>
      )
    }
}


