#!/usr/bin/env node

var Mongolian = require('mongolian');
var argv = require('minimist')(process.argv.slice(2));

var db = new Mongolian('mongodb://localhost/repo');
var gridfs = db.gridfs('emls');
gridfs.findOne(argv._[0], function(err, file) {
  if (err) {
    return console.error(err);
  }
  file.readStream().pipe(process.stdout);
});