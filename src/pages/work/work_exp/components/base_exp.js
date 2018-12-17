import './exp_details.scss';
import React, { Component } from 'react';

export default class Expform extends Component {
    render(){
        const { expHeader, expList } = this.props
        return(
            <div className="exp-detaile-wrap">    

                <div className="exp-wrap-boy">
                
                    <div className="eheader">DETAIL - EXPERIENCE</div>
                    { expHeader && 
                    <div className="eheader-desc">
                        <b>{expHeader.header}</b>
                        <ul>
                            { 
                                expHeader.desc.map((v,i)=>{
                                    return( 
                                        <li key={i}>{v}</li> 
                                    )
                                }) 
                            }                            
                        </ul>
                    </div>
                    }

                    <div className="elist-form">
                        { 
                            expList.map((v,i)=>{
                                return( 
                                    <div key={i}>
                                        <div className="elist-header">
                                            {v.project}
                                            
                                            {v.git.mode && 
                                                <a href={v.git.url} className="gitlink" target="_blank">
                                                    Github 보러가기
                                                </a>
                                            }
                                        </div>                                        
                                        <div className="elist-desc">                                            
                                            <div dangerouslySetInnerHTML={{__html: v.project_desc}} />
                                        </div>
                                        { v.project_summury.postion &&
                                            <div className="elist-position">
                                                <b className="ip e1">담당업무</b>
                                                <ul>
                                                    {v.project_summury.postion.map((v,i)=>{
                                                        return(
                                                            <li key={i}>{v}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        }
                                        { v.project_summury.skills &&
                                            <div className="elist-position">
                                                <b className="ip e2">사용기술</b>
                                                <ul>
                                                    {v.project_summury.skills.map((v,i)=>{
                                                        return(
                                                            <li key={i}>{v}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                )
                            }) 
                        } 
                    </div>

                </div>
            </div>
        )
    }
}