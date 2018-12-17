import React, { Component } from 'react';
import ExpUneedcomms from './exp/ExpUneedcomms';
import DescCore from 'pages/core/DescCore'

export default class PrExp extends Component {

    componentDidMount(){
        this.expDetailWidth()
    }

    expDetailWidth(){
        const expFormDom = document.querySelectorAll('.exp-form')
             ,expDetailDom = document.querySelectorAll('.exp-detail')       
      
        const widthInitFunction = ( elm, index, event ) => {    
            this.expForm = event.target.closest('.exp-form')
            this.expFormRight = this.expForm.querySelector('.exp-right')
            this.expProjectList = this.expForm.querySelector('.exp-left .project-list')

            this.init = (parms) => {
                expFormDom.forEach(( _elm, _index) => {
                    if( index !== _index){
                        if( parms.attr === 'on' ){
                            _elm.style.opacity = parms.opacity
                        }else{
                            setTimeout(() => {
                                _elm.style.opacity = parms.opacity
                            }, 800)    
                        }                                        
                        
                        setTimeout(() => {
                            _elm.classList[parms.classStatus]('ani-hide')
                        }, 500)                    
                    }
                })

                
                event.target.innerHTML = parms.attr !== 'on' ? '담당업무 자세히 보기' : '닫기'
                event.target.setAttribute('data-mode', parms.attr)  
            }
       
            if( event.target.getAttribute('data-mode') !== 'on'){
                // open
                this.init({ 
                    opacity : '0', 
                    classStatus : 'add', 
                    attr: 'on' 
                })      

                setTimeout(() => {
                    //this.expProjectList.style.opacity = '0.4'
                    this.expForm.classList.add('col-100')           
                    Object.assign( this.expFormRight.style,{
                        display : "block",
                        opacity : "0"
                    })

                    setTimeout(() => { this.expFormRight.style.opacity = '1' }, 1000)
                }, 500)
               
            }else{ 
                 // close
                 this.init({ 
                    opacity : '1', 
                    classStatus : 'remove', 
                    attr: 'off' 
                })   

                this.expFormRight.style.opacity = '0'

                setTimeout(() => { 
                    //this.expProjectList.style.opacity = '1'
                    this.expForm.classList.remove('col-100') 
                }, 500) 
                setTimeout(() => { this.expFormRight.style.display = 'none' }, 1000)                           
            }
        }
            
        expDetailDom.forEach((elm, index) => {
            elm.addEventListener("click", widthInitFunction.bind(this, elm, index) );
        })
  
    }

    render() {
      return(
            <div id="prExp" className="hh100">
              <div id={this.props.arthor} />
              
                <div id="prExpBody" className="column">
                    <div className="exp-form col-3">
                        <h1>EXPERIENCE _ 01</h1>
                        <div className="i-point">DEVELOPER</div>
                        <div className="exp-detail" data-mode="off">자세히 보기</div>
                        <div className="form-a">
                            <div className="exp-left">
                                <h2>유니드컴즈</h2>
                                <div className="date">2014.04 ~ 2018.10</div>
                                <div className="position">FrontEnd - 1팀 / 팀장</div>  
                                    <ExpSimpleList 
                                        simpeList={ DescCore.projects }
                                        // simpeList={[
                                        //     {
                                        //         project : 'iMs ( Intelligence Message Service )', 
                                        //         hash : DescCore.
                                        //     },{
                                        //         project : 'Smartskin',                                               
                                        //         hash : ['mobile', 'design','ui/ux']
                                        //     },{
                                        //         project : 'SmartPC',                                                
                                        //         hash : ['pc', 'design', 'custom']
                                        //     },{
                                        //         project : 'Bemember (beta)',                                                
                                        //         hash : ['solution']
                                        //     },{
                                        //         project : 'Targebook',                                              
                                        //         hash : ['solution']
                                        //     }
                                        // ]}
                                    />                     
                            </div>
                            <div className="exp-right" style={{display:'none'}}>                              
                                <ExpUneedcomms />
                            </div>
                        </div>
                    </div>

                    <div className="exp-form col-3">
                        <h1>EXPERIENCE _ 02</h1>
                        <div className="i-point">DESIGNER</div>                        
                        <div className="exp-detail">자세히 보기</div>
                        <div className="form-a">
                            <div className="exp-left">
                                <h2>성전기획</h2>
                                <div className="date">2010.03 ~ 2013.07</div>
                                <div className="position">디자인팀 / 대리</div>                                                         
                                    <ExpSimpleList 
                                        simpeList={[
                                            {
                                                project : '##',
                                                hash : [
                                                    '· ##'
                                                ]
                                            }
                                        ]}
                                    />                      
                            </div>
                            <div className="exp-right" style={{display:'none'}}>
                                ###############
                            </div>
                        </div>                        
                    </div>

                    <div className="exp-form col-3">
                        <h1>EDUCATIONS</h1>
                        <div className="i-point">
                            EDU
                        </div>

                        <div className="form-a">
                            <h2>유한대학교</h2>
                        </div>

                    </div>
                </div>
              
            </div>      
      )
    }
}


class ExpSimpleList extends Component {
    render(){
        return(
            <div className="project-list">
                <h3>담당 업무</h3> 
                <ul>
                    { this.props.simpeList.map((v,i) =>{                        
                        return(  
                            <li key={i}>
                                <h4>{v.header}</h4>
                                { v.hash_1 && v.hash_1.map((v,i)  => {
                                    return(                  
                                    <span key={i} className="hash">{v}</span> 
                                    )
                                })}
                            </li>                 
                        )
                    })}
                </ul>    
            </div>       
        )
    }
}

