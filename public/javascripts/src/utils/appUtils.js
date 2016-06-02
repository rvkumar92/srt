import PapaParse from 'papaparse';
import AppActions from '../actions/AppActions';
import YearConstants from '../constants/YearConstants';
import awards from '../../../data/awards.json';
var sachinData = "";
module.exports = {
  readFile(){
    PapaParse.parse('http://localhost:3000/data/sachin.csv',{
      download:true,
      header:true,
      complete: function(results){
        sachinData =  results;
        AppActions.parseSachinData(sachinData);
      }
    });
    return sachinData;
  },
  getMatchperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].matches;
        })
      );
  },
  getRunsperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].runs;
        })
      );
  },
  getWicketsperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].wickets;
        })
      );
  },
  getCatchesperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].catches;
        })
      );
  },
  getFiftiesperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].fifties;
        })
      );
  },
  getHundredsperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].hundreds;
        })
      );
  },
  getMethodName(methodName,arrayOfYears){
    var methodLookup = {
      'matches': this.getMatchperyear(arrayOfYears),
      'runs': this.getRunsperyear(arrayOfYears),
      'catches': this.getCatchesperyear(arrayOfYears),
      'hundreds': this.getHundredsperyear(arrayOfYears),
      'fifties': this.getFiftiesperyear(arrayOfYears),
      'wickets': this.getWicketsperyear(arrayOfYears)
    };
    return methodLookup[methodName];
  },
  getAwards(){
    AppActions.receiveAwards(awards);
  }
};
