'use strict;'

var directory = __dirname;
var colorize = require('../../lib/colorize');
var fs = require('fs');
var sinon = require('sinon');
var verifySolution = require('../../lib/verify-solution');

exports.problem = colorize(fs.readFileSync(directory + '/problem.txt', 'utf-8'));
exports.solution = colorize(fs.readFileSync(directory + '/solution.txt', 'utf-8'));

exports.verify = verifySolution({
    directory: directory,
    solutionTest: function(docElement, args, t, spy) {
        var window = docElement.defaultView;
        var $el = window.$('.myElement');
        t.equal($el.data('token'), window.getToken());
        t.equal($el.data('title'), 'jQuery rocks');
        t.end();
    }
});
