import React, { Component } from 'react';

export default class PrExp extends Component {

    render() {
      return(
            <div id="prExp" class="hh100">
              <div id={this.props.arthor} />
              
                <div className="column">
                    <div class="col-3">
                        1
                    </div>
                    <div class="col-3">
                        2
                    </div>
                    <div class="col-3">
                        3
                    </div>
                </div>

              
            </div>      
      )
    }
}


