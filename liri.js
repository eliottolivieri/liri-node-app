// to hide the keys 
require("dotenv").config();

var keys = require("./keys.js");
var Sportify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var request = require("request");
var twitter = require("twitter");
var client = new Twitter(keys.twitter);
var contentType = process.argv[2];
var nameOfMovie = process.argv[1];

switch(contentType){
    case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();

    case "do-what-it-says":
    doWhatItSays();
    break;

    default: console.log("\n"+"Welcome! please type a after node liri.js"+"\n"+"my-tweets"+"\n"+"spotify-this-song"+"\n"+"movie-this"+"\n"+"do-what-it-says");

};

