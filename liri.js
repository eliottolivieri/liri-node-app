// to hide the keys 
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var request = require("request");
var Twitter = require("twitter");
var client = new Twitter(keys.twitter);
var contentType = process.argv[2];
var nameOfMovie = process.argv[1];

switch(contentType){
    case "my-tweets":
    console.log(myTweets());
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    console.log(movieThis());

    case "do-what-it-says":
    doWhatItSays();
    break;

    default: console.log("\n"+"Welcome! please type a after node liri.js"+"\n"+"my-tweets"+"\n"+"spotify-this-song"+"\n"+"movie-this"+"\n"+"do-what-it-says");

};

function myTweets(){
    return("You wanna see my Tweets??");
}

function spotifyThisSong(){
    return("You wanna see my Songs??");
}
function movieThis(){
    return("You wanna see my Movies??");
}
function doWhatItSays(){
    return("I dont even know");
}
