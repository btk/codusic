#!/usr/bin/env node

var fs = require("fs");
var fetch = require("node-fetch");
var readline = require('readline');
const lastfmAPI = "e3d3ffd59eb8600eaf8d8e477f8aacaf";

let command = process.argv[2];
if (command == "-h") {
  console.log("Codusic Help; \n");
} else if (command == "init" || command == "") {
  init();
} else {
  console.log(" ! Unknown Command is given for codusic");
}

/**
* This function creates a Promise for 'entityName' entity which is resolved/rejected after a prompt in the form of 'displayMessage' is sent to stdin using readline interface object
* @param  {Object} rlInterface    [readline interface object]
* @param  {String} entityName     [name of the entity that the user is prompted for]
* @param  {String} displayMessage [the message which is prompted to user]
* @param  {Boolean} required      [this field is required or not]
* @return {Object}                [a Promise object is returned]
*/
function getEntityPromise(rlInterface, entityName, displayMessage, required) {
  if (typeof required === 'undefined') required = true;
  return new Promise(function (resolve, reject) {
    rlInterface.question(displayMessage, function (answer) {
      if (answer || !required) {
        resolve(answer);
      } else {
        rlInterface.close();
        reject (`Please do not enter an empty ${entityName}`);
      }
    });
  });
}

/**
* This function returns a Promise that resolves/rejects the username and period for user's LastFM account
* @return {Object} [a Promise object is returned]
*/
function getUserInputs(readlineInterface) {
  return new Promise( (resolve, reject) => {
    let returnData = {};
    if (readlineInterface) {
      getEntityPromise(readlineInterface, 'username', 'Your Lasfm account username: ')
      .then(function (response) {
        returnData.username = response;
        return getEntityPromise(readlineInterface, 'period', 'How long have you been working on this project: [overall | 7day | 1month | 3month | 6month | 12month]: ');
      })
      .then(function (response) {
        returnData.period = response;
        return getEntityPromise(readlineInterface, 'metric', 'Top listened: [track | artist]: ', false);
      })
      .then(function (response) {
        returnData.metric = ((typeof response === 'undefined') ? 'track' : response);
        readlineInterface.close();
        if (returnData.username && returnData.period) {
          resolve(returnData);
        } else {
          reject('It appears that the username and period combination, that you\'ve entered, are not valid. Please try again!');
        }
      })
      .catch(function (error) {
        reject(error);
      });
    }
  });
}

function init(){
  let readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  // get the username and period
  getUserInputs(readlineInterface)
  .then((response) => {
    let {username, period, metric} = response;
    username = username.replace("\n", "");
    period = period.replace("\n", "");
    if (['overall', '7day', '1month', '3month', '6month', '12month'].includes(period)) {
      console.log(" - Your codusic is now initilized, your top track file is generating...");
      create(username, period, metric);
    } else {
      console.log(" ! Entered time period is not a valid one, please choose by given.");
      init();
    }
  })
  .catch((error) => {
    console.log(error);
    console.log('Kindly Re-enter the details.');
    init();
  });
}

function create(username, period, metric){
  const limit = 10;
  let methodName = 'gettoptracks';
  if (metric === 'artist') {
    methodName = 'gettopartists';
  }
  let url = `http://ws.audioscrobbler.com/2.0/?method=user.${methodName}&user=${username}&api_key=${lastfmAPI}&format=json&period=${period}&limit=${limit}`;

  fetch(url).then(function(res) {
    return res.json();
  }).then(function(json) {
    let stringToSave = "#Top Tracks Listened While Coding This Project \n";
    if (metric === 'artist') {
      json.topartists.artist.forEach(t => {
        stringToSave += " - " + t.name + "\n";
      });
    } else {
      json.toptracks.track.forEach(t => {
        stringToSave += " - " + t.name + " by **" + t.artist.name + "**\n";
      });
    }
    stringToSave += "\n\n Created by using [Codusic](https://github.com/btk/codusic)";
    saveFile(stringToSave);
  });
}

function saveFile(str){
  fs.writeFile('codusic.md', str, function (err) {
    if (err) {
      console.log(" ! Error while trying to create/change file codusic.md, make sure you have the rights to change it.");
      return err;
    }
    console.log(' - Your music List is saved in ./codusic.md');
  });
  addToReadme();
}

function addToReadme(){
  fs.readFile('./README.md', 'utf8', function (err,data) {
    if (err) {
      console.log(" ! Error while trying to read README.md");
      return err;
    }
    if (!data.includes("codusic.md")) {
      fs.appendFile('./README.md', '\n\n[Top Tracks Listened While Coding This Project - Codusic](codusic.md)', (err) => {
        if (err){
          console.log(" ! Error while trying to add link to README.md");
          return err;
        }
      });
      console.log(" - Your readme file now has a link to codusic.md file.");
    } else {
      console.log(" - Your readme file already has a link to codusic.md file.");
    }
  });
}
