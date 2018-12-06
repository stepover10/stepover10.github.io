import './layout.scss'
import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Profile from 'pages/profile/profile';
import Work from 'pages/work/work';

export default class layout extends Component {
   
    render() {
        return (
            <div id="layout-wrap">

                <IntroWrap />
                
                <div className="menu-header">
                    <div className="logo">
                        YOO.CHAN.HYUN
                    </div>
                    <div className="menu-list">
                        <Link to="/">PROFILE</Link>
                        <Link to="/work">WORK</Link>                    
                    </div>
                </div>
               
                <div className="menu-ft-left ps-l">
                    <i></i>
                </div>

                <div className="menu-ft-right ps-r">
                    stepover10@gmail.com
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

        if( !isVisited ){
            
            getIntro.style.display = 'block'

            setTimeout(() => {
                getIntro.classList.add('intro-form-aniout')
                setTimeout(()=>{
                    getIntro.style.display = 'none'
                }, 2000 )
            }, 2000)

            sessionStorage.setItem('isVisited', 'isVisited')
        }else{
            getIntro.remove()
        }    
    }

    render(){
        return(
            <div id="introForm">
                <div className="intro-body">
                    <b>HELLO.</b>
                </div>
            </div>
        )
    }
}