'use strict';
var Alexa = require("alexa-sdk");
var AWS = require("aws-sdk");
const https = require('https');
const dateFormat = require('dateformat');
var now = Date();
var today = dateFormat("mm/dd/yyyy");
const fetch = require('node-fetch');
const zipcodes = require('zipcodes');
// ES Client
// ES Client
AWS.config.update({
  region: "us-east-1"
});
exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.dynamoDBTableName = 'FitPopClient';
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
      this.emit(':ask', "Welcome to Fit Pop! To begin using the skill, tell me your five digit ZIP Code. The skill will remember the ZIP Code each time you use the pop up finder, but you can easily search for fitness popups anywhere you would like, by updating your ZIP Code. Start by saying, the ZIP Code .");
    },
    'rememberZipCode': function () {
      const regex = /^(\d{5})?$/;

    var zipcodeSlot = this.event.request.intent.slots.zipcode.value;
    if (regex.test(zipcodeSlot)== true) {
      console.log('valid zipcode')
    } else {
      this.emit(':ask', `Sorry, I didn\'t recognise that zip code!, Please tell me your zip code by saying: My zip code is, and then your zip code.'`);
    }
    var zipcode;
    if (regex.test(zipcodeSlot)) {
      zipcode = zipcodeSlot;
    } else {
      this.emit(':ask', 'The zip code you provided is not a valid zip code, please re state the zip code as a valid five digit zip code');
    }

    if (zipcode) {
      this.attributes['userZipCode'] = zipcode;
      this.emit(':tell', "Now searching for fitness activities in and around" + (zipcode) + ". The next time you use the skill, I'll use this ZIP Code to search for fitness activities, unless you up-date me.");
    } else {
      this.emit(':ask', `Sorry, I didn\'t recognise that zip code!, Please tell me your zip code by saying: My zip code is, and then your zip code.'`);
    }
    },
    'NewSession': function () {

    let userZipCode = this.attributes['userZipCode'];
    if (userZipCode) {
      this.emit(':ask', `Welcome back. To hear today's fitness pop up locations, ask, "Where are the pop ups ". If you want to search for fitness activities in another ZIP Code, tell me that ZIP Code now.`);
    } else {

      this.emit(':ask',"Welcome to Fit Pop! To begin using the skill, tell me your five digit ZIP Code. The skill will remember the ZIP Code each time you use the pop up finder, but you can easily search for fitness popups anywhere you would like, by updating your ZIP Code. Start by saying, the ZIP Code .")
    }
  },
    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent' : function() {
      let userZipCode = this.attributes['userZipCode'];
        this.response.speak('thanks for trying us, goodbye');
        this.emit(':responseReady');
    },
    'FitnessFinderIntent': function () {
      let userZipCode = this.attributes['userZipCode']
        // Would like to put finder function here and utilize the function result, i.e JSON.stringify(eventname6+","+ eventaddress6+","+city6+","+ state6+","+zipcode6+","+ cost6+","+fitnessactivity6+","+ description6) instead of (userZipCode) in this.response.speak line below
        this.response.speak('I dont know <break time="1s"/>'+(userZipCode)+ '<break time="1s"/> you can say stop now. or ask where are the pop ups. so what would you like to do ? ').listen('what would you like to do?')
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function() {
      let userZipCode = this.attributes['userZipCode'];
        this.emit(':ask',"You are in the help function," +(userZipCode)+  "You can tell me your new zip code or to Im lost or something equally crazy so what would you like to do?");
    },
    'AMAZON.CancelIntent' : function() {
        this.response.speak('Alright thanks for trying us out. goodbye');
        this.emit(':responseReady');
    },
    'UnhandledIntent' : function() {
        this.emit(':ask',"Sorry, I didn't get that. You can try: 'my zip code is and say your zip code'" +
            " or 'Where are the pop ups to get the locations '");
    }
};
