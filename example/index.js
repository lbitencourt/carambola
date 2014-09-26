'use strict';
var carambola = require('../lib');

var person = {
    email: 'bicourt@gmail.com',
    gender: 'M',
    github: 'github.com/lbitencourt'
};


carambola
    .conditions()
    .isFalse(person.name, 'Name is required')
    .isFalse(person.email, 'Email is required')
    .isTrue(person.github, 'Git hub not empty')
    .check(function(data) {
        console.log(data);
    });