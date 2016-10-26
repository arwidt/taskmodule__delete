var del = require('del');

module.exports = function(paths) {
    return function(callback) {
        del(paths).then(function(resp) {
            callback();
        });
    }
};
