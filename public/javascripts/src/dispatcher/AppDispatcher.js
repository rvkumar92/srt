var Dispatcher = require('flux').Dispatcher,
    assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(),{
    handleViewActions(action){
        var payload = {
            action: action,
            source: 'VIEW_ACTION'
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;
