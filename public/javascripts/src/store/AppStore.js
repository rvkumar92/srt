import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import appUtils from '../utils/appUtils';
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _sachinData = "",
    _awards = "";
var AppStore = assign({},EventEmitter.prototype,{
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener('change',callback);
    },
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    parseSachinData(sachinData){
      _sachinData = sachinData;
    },
    getSachinData(){
      return _sachinData;
    },
    receiveAwards(awards){
      _awards = awards;
    },
    getAwards(){
      return _awards;
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.GET_SACHIN_DATA:

            AppStore.parseSachinData(action.sachinData);

            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.GET_AWARDS:
            AppStore.receiveAwards(action.awards);
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;
