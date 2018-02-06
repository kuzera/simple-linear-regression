'use strict';

const mean = require('stats-mean');
const variance = require('stats-variance');
const covariance = require('@elstats/covariance');

function linearRegression(data) {
    let X = [];
    let Y = [];

    X = data.map(pair => pair[0]);
    Y = data.map(pair => pair[1]);

    // for (const pair of data) {
    //     X.push(pair[0]);
    //     Y.push(pair[1]);
    // }

    const b = covariance(X, Y) / variance.calc(X);
    const a = mean.calc(Y) - b * mean.calc(X);
    return { a, b };
}

module.exports = linearRegression;