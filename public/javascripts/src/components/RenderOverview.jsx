import React, {Component} from 'react';
import AppStore from '../store/AppStore';

class RenderOverview extends Component{
  constructor(props){
    super(props);
    this.state = {
      sachinData: AppStore.getSachinData(),
      totalStats: [],
      awards: AppStore.getAwards()
    };
  }
  componentWillMount(){
    this.getTotal()
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body text-center panelBackground">
                <h5>Runs</h5>
                <p className="stats">{this.state.totalStats.runs}</p>
                <div className="row">
                  <div className="col-xs-4">
                    <h5>100s:{this.state.totalStats.hundreds}</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5>50s:{this.state.totalStats.fifties}</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5>0s:{this.state.totalStats.ducks}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body text-center panelBackground">
                <h5>Matches</h5>
                <p className="stats">{this.state.totalStats.matches}</p>
                <div className="row">
                  <div className="col-xs-4">
                    <h5>won:{this.state.totalStats.won}</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5>lost:{this.state.totalStats.lost}</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5>n/r:{this.state.totalStats.nr}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body text-center panelBackground">
                <h5>Dismissals</h5>
                <p className="stats">{this.state.totalStats.wickets}</p>
                <div className="row">
                  <div className="col-xs-4">
                    <h5>catches:{this.state.totalStats.catches}</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5>conceded:{this.state.totalStats.runs_conceded}</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5>n/r:{this.state.totalStats.nr}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body text-center panelBackground">
                <div><i className="fa fa-star fa-3x"></i><span  className="awardContent">{this.state.awards.overallRuns.runs}</span></div>
                  <p>{this.state.awards.overallRuns.text}</p>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body text-center panelBackground">
                <div><img src="/images/background/bat.svg" style={{width:'4em',marginTop: '-15px'}}/><span  className="awardContent">{this.state.awards.centuries.hundreds}</span></div>
                  <p>{this.state.awards.centuries.text}</p>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body text-center panelBackground">
                <div><i className="fa fa-trophy fa-3x"></i><span className="awardContent">{this.state.awards.manOfMatch.times}</span></div>
                  <p>{this.state.awards.manOfMatch.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row about">
          <div className="col-xs-12 text-center">
            <strong className="aboutText">To the men who play for the spirit of cricket and to all the critics who found peace on his retirement, these are just a bunch of numbers and figures that show his rise and fall.
            The vibration that sets in as the Master Blaster enters and the chants of his name will remain an irrevocable memory to cherish.
            </strong>
            <p className="godText">" The God of Cricket He Is!!!"</p>
          </div>
        </div>


        <div className="row">
          <div className="col-xs-12 text-center">
              <div className="panel panel-defalut text-center">
                <div className="panel-body panelBackground">
                  <div className="row cardContent">
                    <div className="col-xs-2">
                      <h4>TIME</h4>
                      <p>The God Of Big Things, As India's top cricketer--and the world's best athlete--Sachin Tendulkar carries the burden of a billion dreams...</p>
                      <a href="http://content.time.com/time/magazine/article/0,9171,2114425,00.html">Read more...</a>
                    </div>
                    <div className="vertical col-xs-1"></div>
                    <div className="col-xs-2">
                    <h4>SocialCops</h4>
                    <p>What the “God of Cricket” Sachin Tendulkar taught us about building a startup...</p>
                    <a href="http://blog.socialcops.com/team/what-sachin-tendulkar-taught-us-about-building-startup">Read more...</a>
                    </div>
                    <div className="vertical col-xs-1"></div>
                    <div className="col-xs-2">
                    <h4>Cricinfo</h4>
                    <p>More than any other player, Sachin Tendulkar defined ODI cricket. To start with, he played in over half of all India's games...</p>
                    <a href="http://www.espncricinfo.com/magazine/content/story/598770.html">Read more...</a>
                    </div>
                    <div className="vertical col-xs-1"></div>
                    <div className="col-xs-2">
                    <h4>MailOnline</h4>
                    <p>Sachin was more than a cricketer... he was the embodiment of a nation coming to life</p>
                    <a href="http://www.dailymail.co.uk/sport/cricket/article-2508281/Sachin-Tendulkar-cricketer--embodiment-nation-coming-life.html">Read more...</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  getTotal(){
    let runs = 0,
        wickets = 0,
        catches = 0,
        fifties = 0,
        hundreds = 0,
        ducks = 0,
        won = 0,
        lost = 0,
        nr = 0,
        runs_conceded = 0,
        matches = this.state.sachinData.data.length-1;
    this.state.sachinData.data.map((data,index)=>{
      if(!isNaN(parseInt(data.batting_score))){
        runs += parseInt(data.batting_score);
      }
      if(!isNaN(parseInt(data.wickets))){
          wickets += parseInt(data.wickets);
      }
      if(!isNaN(parseInt(data.catches))){
          catches += parseInt(data.catches);
      }
      if(parseInt(data.batting_score)>= 50 && parseInt(data.batting_score)<100){
        fifties += 1;
      }
      if(parseInt(data.batting_score)>= 100){
        hundreds += 1;
      }
      if(parseInt(data.batting_score) === 0){
        ducks += 1;
      }
      if(data.match_result == 'won'){
        won += 1;
      }else if(data.match_result == 'lost'){
        lost += 1;
      }else{
        nr += 1;
      }
      if(!isNaN(parseInt(data.runs_conceded))){
        runs_conceded += parseInt(data.runs_conceded);
      }
      this.state.totalStats = {
        matches: matches,
        runs: runs,
        wickets: wickets,
        catches: catches,
        fifties: fifties,
        hundreds: hundreds,
        ducks: ducks,
        won: won,
        lost: lost,
        nr: nr,
        runs_conceded: runs_conceded
      }
    });
  }
}
export default RenderOverview;
