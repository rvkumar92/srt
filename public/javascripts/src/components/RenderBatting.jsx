import React, {Component} from 'react';
import battingUtils from '../utils/battingUtils';

class RenderBatting extends Component{

  constructor(props){
    super(props);
    this.state = {
      renderState : "Australia"
    }
  }

  renderCountry(country,event){
    console.log(event.currentTarget);
    this.setState({
      renderState: country
    });
  }
  componentDidMount(){
    this.renderAusChart(this.refs['australia'].state.againstAUS);
  }
  render(){
    if(!this.state.renderState == ""){
      var versus = "Sachin vs " + this.state.renderState;
    }
    var Country = this.state.renderState;
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Australia" >
                  <img src="/images/Australia.png" alt="Australia" onClick={this.renderCountry.bind(this,"Australia")} className="img-responsive"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Bangladesh" >
                  <img src="/images/Bangladesh.png" alt="Bangladesh" onClick={this.renderCountry.bind(this,"Bangladesh")} className="img-responsive"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Bermuda" >
                  <img src="/images/Bermuda.png" alt="Bermuda" onClick={this.renderCountry.bind(this,"Bermuda")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="England" >
                  <img src="/images/England.png" alt="England" onClick={this.renderCountry.bind(this,"England")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Ireland" >
                  <img src="/images/Ireland.png" alt="Ireland" onClick={this.renderCountry.bind(this,"Ireland")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Kenya" >
                  <img src="/images/Kenya.png" alt="Kenya" onClick={this.renderCountry.bind(this,"Kenya")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Namibia" >
                  <img src="/images/Namibia.png" alt="Namibia" onClick={this.renderCountry.bind(this,"Namibia")} className="img-responsive against"/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href="#" data-toggle="tooltip" title="Netherland">
                  <img src="/images/Netherlands.png" alt="Netherland"  onClick={this.renderCountry.bind(this,"Netherland")} className="img-responsive against"/>
                </a>
              </div>
            </div>
          </div>
              <div className="col-xs-10 text-center">
              <div className="panel panel-default">
                <div className="panel-body" id="versusChart">
                <h3 className="versus">
                {
                  versus
                }
                </h3>
                {battingUtils.getComponentName(this.state.renderState)}
                </div>
              </div>
              </div>

          <div className="col-xs-1 pull-right">
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="NewZealand">
                <img src="/images/NewZealand.png" alt="NewZealand"  onClick={this.renderCountry.bind(this,"NewZealand")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="Pakistan">
                <img src="/images/Pakistan.png" alt="Pakistan" onClick={this.renderCountry.bind(this,"Pakistan")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="SouthAfrica">
                <img src="/images/SouthAfrica.png" alt="SouthAfrica" onClick={this.renderCountry.bind(this,"SouthAfrica")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="SriLanka">
                <img src="/images/SriLanka.png" alt="SriLanka" onClick={this.renderCountry.bind(this,"SriLanka")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="UAE">
                <img src="/images/UAE.png" alt="UAE" onClick={this.renderCountry.bind(this,"UAE")} className="img-responsive against"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="WestIndies">
                <img src="/images/WestIndies.png" alt="WestIndies" onClick={this.renderCountry.bind(this,"WestIndies")} className="img-responsive west"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a href="#" data-toggle="tooltip" title="Zimbabwe">
                <img src="/images/Zimbabwe.png" alt="Zimbabwe" onClick={this.renderCountry.bind(this,"Zimbabwe")} className="img-responsive"/>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
  renderAusChart(againstAUS){
    var config = {
      "type": "pie",
      "legend":{
        "margin-right": "4.5%"
      },
      "series": [
        {
        "values": [againstAUS.won],
        "text": "Won " + [againstAUS.won]
      },
      {
        "values": [againstAUS.lost],
        "text": "Lost " + [againstAUS.lost]
      },
      {
          "values": [againstAUS.nr],
          "text": "No result " + [againstAUS.nr]
      }
    ]
    };
    zingchart.render({
      id: "versusChart",
      data: config,
      height: "400px"
    })
  }
}
export default RenderBatting;
