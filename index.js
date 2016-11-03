
module.exports = function(paths) {
    return function(callback) {
        var del = require('del');

        del(paths).then(function(resp) {
            callback();
        });
    }
};
