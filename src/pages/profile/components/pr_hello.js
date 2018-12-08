import React, { Component } from 'react';

export default class PrHello extends Component {

    render() {
      return(        
            <div id="prHello">

              <div className="column">
                <div className="col-3">
                  <div className="en-header">

                    <div className="protbox">
                      PORT-
                      <div>FOLIO</div>
                    </div>

                    Welcome.<br/>
                    FrontEnd Developer<br/>
                    <span>YOO.CHAN.HYUN</span>
                    <br/>
                    <i> >_ </i>
                    {/* <br/>
                    안녕하세요.<br/>
                    프론트엔드 개발자 <br/>
                    <span>유찬현 입니다</span> */}
                  </div>
                </div>

                <div className="col-3">
                  <div className="pr-center">
                    <div className="pr-img">
                      <img src="https://dummyimage.com/200x200/fff" />
                      <img src="https://dummyimage.com/200x200/f6f7f8" />
                      <img src="https://dummyimage.com/200x200/f6f7f8" />
                      <img src="https://dummyimage.com/200x200/f6f7f8" />
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="pr-res">

                    <div className="iimg">
                        <img src="/src/img/code.png" />
                    </div>

                    <h2>Portfolio Resource</h2>                  
                    
                    <ul className="res-text">
                      <li className="hh">포트폴리오 작업시 사용된 기술</li>
                      <li className="ss"><span>Dev</span> React, React-router, Sass</li>
                      <li className="ss"><span>Build</span> Webpack4</li>
                      <li className="ss"><span>Font</span> Muli, Gothic A1</li>                 
                      <li className="ss"><span>ColorCode</span> #000 / #f71b66</li>
                      <li className="ss"><span>Screen</span> 1920x1080 / min : 1600px</li>
                      <li className="ss"><span>Editor</span> Visual Studio Code</li>
                      <li className="ss"><span>Os</span> Window10</li>
                    </ul>

                    <div className="res-info">
                      해당 사이트는 Chrome 브라우저에서 
                      최적화가 되어있습니다.
                    </div>

                    <div className="git-link">
                      <a href="https://github.com/stepover10/stepover10.github.io" target="_blank">
                        >_
                      </a>
                      Portfolio git link
                    </div>

                  </div>
                </div>
              </div>


            </div>      
      )
    }
}


