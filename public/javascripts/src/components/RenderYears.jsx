import React, {Component} from 'react';
import AppStore from '../store/AppStore';
import jsonQuery from 'json-query';
import YearlyStat from './yearlyStats/YearlyStat';
import RadioGroup from 'react-radio-group';

class RenderYears extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedValue: 'matches'
    };
  }
  handleChange(value){
    this.setState({
      selectedValue: value
    })
  }
  render(){
    return(
      <div className="container-fluid overYears">
        <h4 className="pull-left">Sachin's performance over the years</h4>
        <RadioGroup name="years" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
          {
            Radio=>(
              <div className="pull-right">
                <label className="radio-inline">
                  <Radio value="matches" />Matches
                </label>
                <label className="radio-inline">
                  <Radio value="runs" />Runs
                </label>
                <label className="radio-inline">
                  <Radio value="wickets" />Wickets
                </label>
                <label className="radio-inline">
                  <Radio value="catches" />Catches
                </label>
                <label className="radio-inline">
                  <Radio value="fifties" />50s
                </label>
                <label className="radio-inline">
                  <Radio value="hundreds" />100
                </label>
              </div>
            )
          }
        </RadioGroup>
        <div className="row">
          <div className="col-xs-12">
            <div id="yearChart">
              <YearlyStat value={this.state.selectedValue}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default RenderYears;
