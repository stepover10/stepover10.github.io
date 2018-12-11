import React, { Component } from 'react';
import Exp01 from './exp/exp_01';

export default class PrExp extends Component {

    componentDidMount(){
        this.expDetailWidth()
    }

    expDetailWidth(){
        const expFormDom = document.querySelectorAll('.exp-form')
        const expDetailDom = document.querySelectorAll('.exp-detail')

        const widthInitFunction = ( elm, index, event ) => {            
            this.init = (parms) => {
                expFormDom.forEach(( _elm, _index) => {
                    if( index !== _index){
                        if(parms.attr==='on'){
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
                event.target.setAttribute('data-mode', parms.attr)  
            }

            const expForm = event.target.closest('.exp-form')
            const expFormRight = expForm.querySelector('.exp-right')

            if( event.target.getAttribute('data-mode') !== 'on'){
                // open
                this.init({ 
                    opacity : '0', 
                    classStatus : 'add', 
                    attr: 'on' 
                })      

                setTimeout(() => {
                    expForm.classList.add('col-100')
                    expFormRight.style.display = 'block'        
                    expFormRight.style.opacity = '0'   

                    setTimeout(() => {
                        expFormRight.style.opacity = '1'
                    }, 1000)
                }, 500)
            }else{ 
                 // close
                 this.init({ 
                    opacity : '1', 
                    classStatus : 'remove', 
                    attr: 'off' 
                })   

                expFormRight.style.opacity = '0'
                setTimeout(() => {
                    expForm.classList.remove('col-100')
                }, 500) 

                setTimeout(() => {                    
                    expFormRight.style.display = 'none'
                }, 1000)                           
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
                        <div className="exp-detail" data-mode="off">유니드컴즈 경력기술서 자세히 보기</div>
                        <div className="form-a">
                            <div className="exp-left">
                                <h2>유니드컴즈</h2>
                                <div className="date">2014.04 ~ 2018.10</div>
                                <div className="position">FrontEnd - 1팀 / 팀장</div>                                
                                <div className="project-list">
                                    <h3>담당 업무</h3>                                    
                                    <ExpSimpleList 
                                        simpeList={[
                                            {
                                                project : 'iMs ( Intelligence Message Service )',
                                                desc : [
                                                    '· 마케팅 오토메이션 솔루션(MA)'
                                                ]
                                            },{
                                                project : 'Smartskin ( Intelligence Message Service )',
                                                desc : [
                                                    '· Mobile 쇼핑몰 개발 및 디자인 (UI/UX 기반)'
                                                ]
                                            },{
                                                project : 'Bemember (beta)',
                                                desc : [
                                                    '· 쇼핑몰 엔드유저의 행동 조건을 기반하여 비회원을 위한 상품 개발'
                                                ]
                                            },{
                                                project : 'Targebook',
                                                desc : [
                                                    '· 페이스북을 광고를 집행 및 관리할 수 있는 광고 솔루션개발'
                                                ]
                                            }
                                        ]}
                                    />                                  
                                </div>                                
                            </div>
                            <div className="exp-right" style={{display:'none'}}>                              
                                <Exp01 />
                            </div>
                        </div>
                    </div>

                    <div className="exp-form col-3">
                        <h1>EXPERIENCE _ 02</h1>
                        <div className="i-point">DESIGNER</div>                        
                        <div className="exp-detail">성전기획 경력기술서 자세히 보기</div>
                        <div className="form-a">
                            <div className="exp-left">
                                <h2>성전기획</h2>
                                <div className="date">2010.03 ~ 2013.07</div>
                                <div className="position">디자인팀 / 대리</div>
                                <div className="project-list">
                                    <h3>담당 업무</h3>                                    
                                    <ExpSimpleList 
                                        simpeList={[
                                            {
                                                project : '##',
                                                desc : [
                                                    '· ##'
                                                ]
                                            }
                                        ]}
                                    />                                   
                                </div>                                
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
            <ul>
                {this.props.simpeList.map((v,i) =>{
                    return(
                        <li key={i}>
                            <h4>{v.project}</h4>
                            { v.desc.map((v,i)  => {
                                return(                  
                                   <span key={i}>{v}</span> 
                                )
                            })}
                        </li>
                    )
                })}
            </ul>           
        )
    }
}

