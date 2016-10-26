
var gulp = require('gulp');
var async = require('async');
var del = require('./index.js');
var copy = require('taskmodule__copy');

gulp.task('default', function() {
    
    async.series([
        copy('test/file.txt', 'target/newfile.txt'),
        copy('test/folder', 'target/newfolder'),
        del(['target'])
    ], function() {
        console.log("DONE");
    });    

});
