import './ExpForm.scss';
import React, { Component } from 'react';

export default class Expform extends Component {
    render(){
        const { expHeader, expList } = this.props
        return(
            <div className="exp-form-wrap">    
                <div className="exp-wrap-boy">                
                    <div className="eheader">DETAIL - PRODUCT</div>             
                    <div className="elist-form">
                        { 
                            expList.map((v,i)=>{
                                return( 
                                    <div key={i} className="elist-li">
                                        <div className="elist-header">
                                            {v.header} <span>{v.date}</span>
                                        </div>                                        
                                        <div className="elist-desc">                                            
                                            <div dangerouslySetInnerHTML={{__html: v.headerSummary}} />
                                        </div>                                                                           
                                    </div>
                                )
                            }) 
                        } 
                    </div>
                </div>
                <div className="work-menu-move">
                    자세한 저의 경력기술서 및 자료는 상단의 WORK 메뉴에서 확인 해주세요
                </div>
            </div>
        )
    }
}