import './layout.scss'
import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Profile from 'pages/profile/profile';
import Work from 'pages/work/work';

export default class layout extends Component {
   
    render() {
        return (
            <div id="layout-wrap">

                {/* <IntroWrap /> */}
                {/* <div className="box-sh-hide" /> */}
                
                <div id="menuHeader" className="menu-header">
                    <div className="logo">
                        <img src="/src/img/headersmaile.png" />
                    </div>
                    <div className="menu-list">
                        <Link to="/">PROFILE</Link>
                        <Link to="/work">WORK</Link>                    
                    </div>
                </div>                
               
                {/* <div id="menuFooter" className="menu-footer">
                    <div className="menu-ft-left ps-l">
                        <i></i>
                    </div>
                    <div className="menu-ft-right ps-r">
                        stepover10@gmail.com
                    </div>
                </div> */}

                <div className="color-point">
                    <b style={{background:"#e04c7b"}}></b>
                    <b style={{background:"#000"}}></b>
                    <div className="menu-ft-left">
                        <i></i>
                    </div>
                </div>

                <div id="swithRoute">
                    <Switch>
                        <Route 
                            exact 
                            to="/pr" 
                            path="/" 
                            component={Profile} 
                        />
                        <Route 
                            exact 
                            to="/wr" 
                            path="/work" 
                            component={Work} 
                        />
                    </Switch>
                </div>

          </div>
        )  
    }
}


class IntroWrap extends Component {

    componentDidMount(){
        this.introAnimain()
    }

    introAnimain(){
        const isVisited = sessionStorage.getItem('isVisited')
        const getIntro = document.getElementById('introForm')

        const bgColorAdd = () => {
            document.getElementById('menuHeader').style.background = '#fff'
            document.getElementById('menuFooter').style.background = '#fff'
        }

        if( isVisited ){
            
            getIntro.style.display = 'block'

            // setTimeout(() => {
            //     getIntro.classList.add('intro-form-aniout')
            //     setTimeout(()=>{
            //         getIntro.style.display = 'none'
            //         bgColorAdd()
            //     }, 1500 )
            // }, 2000)

            sessionStorage.setItem('isVisited', 'isVisited')
        }else{
            bgColorAdd()
            getIntro.remove()
        }
        
    }

    render(){
        return(
            <div id="introForm">
                <div className="intro-body">
                    <div className="body-in">
                        <div className="iimg">
                            <img src="/src/img/code.png" />
                        </div>                     

                        <div className="itext">
                            Hello.
                            <div className="itext-f">
                                안녕하세요<br />
                                저의 홈페이지에 방문해주셔서<br/>
                                감사합니다.<br/>
                                <br/>
                                홈페이지는<br />
                                Chrome 브라우저에 최적화 되어있습니다.
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}