// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(customer){
    return customer.gender === "male";
});
return males.length;
};

var femaleCount = function(array){
    //declares females as the result of calling _.reduce to find the number of females
let females = _.reduce(array, function(accumulator, current){
    //if the current gender is female, add to the accumulator
    if (current.gender === "female"){
         accumulator++;
    }
    //return accumulator
    return accumulator;
}, 0);
//return females
    return females;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
        }
        return accumulator;
    });
    return oldest.name;
};

var youngestCustomer = function(array){
    //declare youngest as the result of invoking _.reduce in order to determine the youngest customer
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age < accumulator.age){
            return current;
        }
        return accumulator;
    });
    return youngest.name;
};

var averageBalance = function(array){
    //declare average as t he result of invoking _.reduce in order to find the average balance of customers
    let average = _.reduce(array, function(accumulator, current){
        //declare currentString as the result of removing all dollar signs and commas from the current balance string
        let currentString = current.balance.replaceAll(/[$,]/g, "");
        //declare currentNumber as the result of converting currentString into a number
        let currentNumber = Number(currentString);
        //return the result of adding accumulator and currentNumber together and then dividing it by the array's length
        return accumulator + currentNumber / array.length;
    }, 0);
    return average;
};

var firstLetterCount = function(array, letter){
    //declare first as the result of invoking _.filter in order to find the number of customers that begins with the input letter
    let first = _.filter(array, function(customer){
        return customer.name[0].toUpperCase() === letter.toUpperCase();
    })
    return first.length; //return the length of first
};

var friendFirstLetterCount = function(array, customer, letter){
    //declare friendFirst as the result of invoking _.filter in order to determine if the customer in the array matches the input customer
    let friendFirst = _.filter(array, function(arrCustomer){
        return arrCustomer.name === customer;
    });
    let result = _.filter(friendFirst.friends, function(friend){
        return friend.name[0].toUpperCase() === letter.toUpperCase();
    });
    return result.length;
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
