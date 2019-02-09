import './Profile.scss';
import React, { Component } from 'react';
import PrHello from './components/PrHello';
import PrExp from './components/PrExp';

export default class Profile extends Component {
  componentDidMount() {
    this.moveBody();
    this.menuAct();
  }

  menuAct() {
    const aDom = document.getElementById("me-menu")
      .querySelectorAll('a');
    const actStatus = (event) => {
      aDom.forEach(elm => {
        elm.classList.remove('act');
      });
      event.target.classList.add('act');
    };

    aDom.forEach(elm => {
      elm.addEventListener("click", actStatus);
    });
  }

  moveBody() {
    document.querySelectorAll('.scrollLink')
      .forEach(anchor => {
        anchor.addEventListener('click', function (event) {
          event.preventDefault();
          document.getElementById(this.getAttribute('data-href'))
            .scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
        });
      });
  }

  render() {
    return (
      <div id="profileWrap">
        <div className="body-left">
          <div className="sticky-ly">
            <h1>ME<span>.</span></h1>
            <b/>
            <ul id="me-menu" className="me-menu">
              <li><a data-href="hello_archor" className="scrollLink act">Intro</a></li>
              <li><a data-href="exp_archor" className="scrollLink">Experience</a></li>
              <li><a data-href="#">Skills</a></li>
              <li><a data-href="#">Resume</a></li>
            </ul>
          </div>
        </div>

        <div className="body-right">

          {/* 인사말 */}
          <PrHello arthor="hello_archor"/>

          {/* 학교, 경력 */}
          <PrExp arthor="exp_archor"/>

          {/* 보유 스킬 */}


          {/* 이력서 다운 */}

        </div>
      </div>
    );
  }
}
