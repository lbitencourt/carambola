'use strict';
var validator = require('../lib');
var assert = require('chai').assert;

describe('Carambola', function() {

    describe('', function() {
        it('Callback undefined', function(done) {
            //validator.conditions.check();
            done();
        });
    });

    describe('IsTrue', function() {
        it('Correct', function(done) {
            validator
                .conditions()
                .isTrue(true, 'is true')
                .check(function(data) {
                    assert.equal(1, data.length);
                    assert.equal('is true', data[0]);
                    done();
                });
        });

        it('Incorrect', function(done) {
            validator
                .conditions()
                .isTrue(false, 'is false')
                .check(function(data) {
                    assert.equal(0, data.length);
                    done();
                });
        });
    });

    describe('IsFalse', function() {
        it('Correct', function(done) {
            validator
                .conditions()
                .isFalse(false, 'is false')
                .check(function(data) {
                    assert.equal(1, data.length);
                    assert.equal('is false', data[0]);
                    done();
                });
        });

        it('Incorrect', function(done) {
            validator
                .conditions()
                .isFalse(true, 'is true')
                .check(function(data) {
                    assert.equal(0, data.length);
                    done();
                });
        });
    });

    describe('Multiples conditions', function() {
        it('Correct is true', function(done) {
            validator
                .conditions()
                .isTrue(true, 'message1')
                .isTrue(true, 'message2')
                .check(function(data) {
                    assert.equal(2, data.length);
                    assert.equal('message1', data[0]);
                    assert.equal('message2', data[1]);
                    done();
                });
        });

        it('Incorrect is true', function(done) {
            validator
                .conditions()
                .isTrue(false, 'is true')
                .isTrue(false, 'is true')
                .check(function(data) {
                    assert.equal(0, data.length);
                    done();
                });
        });
    });
});