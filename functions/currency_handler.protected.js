exports.handler = function(context, event, callback) {

    const amount = event.amount;
    const response = (amount / 100).toFixed(2);

    callback(null, response);
};