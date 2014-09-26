'use strict';

var validator = function() {
    this.data = [];

    this.conditions = function() {
        this.data = [];
        return this;
    };

    this.isTrue = function(source, message) {
        if (source) {
            this.data.push(message);
        }
        return this;
    };

    this.isFalse = function(source, message) {
        if (!source) {
            this.data.push(message);
        }
        return this;
    };

    this.check = function(callback) {
        if (!callback) {
            throw 'callback function undefined';
        }
        callback(this.data);
    };
};

module.exports = new validator();