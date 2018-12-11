import React, { Component } from 'react';
import Expform from './Expform'

export default class Exp01 extends Component {
    render(){
        return(
            <Expform 
                expHeader={{
                    header : '유니드컴즈 경력 기술서',
                    desc : [
                        '· 매주 금요일 일정 정리 및 차주에 대한 일정 조율 ( 팀 관리는 JIRA를 통해서 관리 )',
                        '· 문제 해결에 대한 적극적인 대응 ( BtoB 업무로써 하루하루 이슈가 발생, 타 팀과의 협업을 통해 문제 해결 )',
                        '· 스마트스킨 버전업으로 회사 매출 상승에 기여 및 스마트스킨 브랜딩 하는데 큰 기여',
                        '· 지속적인 상품 관리 및 업데이트로 상품 업그레이드에 기여',
                    ]
                }}
                expList={[
                    {
                        project : 'iMs ( Intelligence Message Service ) 2017.12 ~ 2018.10',
                        git : {
                            mode : true,
                            url : 'https://github.com/stepover10/Project-iMs'
                        },
                        project_desc : 'End-User 행동 데이터(빅데이터)를 기반으로 타겟팅된 Audience에게 다중 터치포인트(email, SMS, 카카오톡, 앱푸시)로<br>마케팅 메세지를 발송하는 마케팅 오토메이션 솔루션(MA)',
                        project_summury :{
                            postion : [
                                '· 마케팅 캠페인을 설계하는 Workflow library 자체 개발',
                                '· Workflow Rule과 CRUD는 Json으로 관리',
                                '· Json을 해석해서 front에 elements 표시',   
                                '· Audience Targeting을 위한 쿼리 규칙 설계',   
                                '· 터치포인트별 컨텐츠 CRUD 화면 개발',
                                '· Workflow 디자인, 퍼블리싱, UI/UX 개발'
                            ],
                            skills : [
                                '· ReactJS (Flux, Gulp)',
                                '· BootStarap, Jquery, SASS',
                                '· Axios 통신, Restful API',
                                '· Git 버전관리 및 배포'
                            ]
                        }
                    },
                    {
                        project : 'iMs ( Intelligence Message Service ) 2017.12 ~ 2018.10',
                        git : {
                            mode : true,
                            url : 'https://github.com/stepover10/Project-iMs'
                        },
                        project_desc : 'End-User 행동 데이터(빅데이터)를 기반으로 타겟팅된 Audience에게 다중 터치포인트(email, SMS, 카카오톡, 앱푸시)로<br>마케팅 메세지를 발송하는 마케팅 오토메이션 솔루션(MA)',
                        project_summury :{
                            postion : [
                                '· 마케팅 캠페인을 설계하는 Workflow library 자체 개발',
                                '· Workflow Rule과 CRUD는 Json으로 관리',
                                '· Json을 해석해서 front에 elements 표시',   
                                '· Audience Targeting을 위한 쿼리 규칙 설계',   
                                '· 터치포인트별 컨텐츠 CRUD 화면 개발',
                                '· Workflow 디자인, 퍼블리싱, UI/UX 개발'
                            ],
                            skills : [
                                '· ReactJS (Flux, Gulp)',
                                '· BootStarap, Jquery, SASS',
                                '· Axios 통신, Restful API',
                                '· Git 버전관리 및 배포'
                            ]
                        }
                    }
                ]}
            />            
        )
    }
}