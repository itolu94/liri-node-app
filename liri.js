var Twitter = require('twitter');
var spotify = require('spotify');
var twitterCredentials = require('./keys.js');
var keys = twitterCredentials.twitterKeys
var client = new Twitter ({
	consumer_key: keys.consumer_key,
	consumer_secret: keys.consumer_secret,
	access_token_key: keys.access_token_key,
	acess_token_secret: keys.access_token_secret
});

var params = {screen_name: 'Tolu_Idowu'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
		console.log(tweets);
	
})