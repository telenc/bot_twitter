/*!
 * Bot.js : A Twitter bot that can retweet in response to the tweets matching particluar keyword
 * Version 1.0.0
 * Created by Debashis Barman (http://www.debashisbarman.in)
 * License : http://creativecommons.org/licenses/by-sa/3.0
 */

/* Configure the Twitter API */
var TWITTER_CONSUMER_KEY = 'MG6rscLf8YVRyGTGdwK5rGyM3';
var TWITTER_CONSUMER_SECRET = '4ynWZrFLFxo8PGMp8CNveR2sp46hNFmRB6dQG18kana38gp2Xt';
var TWITTER_ACCESS_TOKEN = '1051406254424420352-Y62EZBsn2fDebX9W2ZOgtOehMq28EY';
var TWITTER_ACCESS_TOKEN_SECRET = 'HoqTQTbEQv0imfyKAqg8TS5McHOrABD4PNmvknkdF4S7a';

/* Set Twitter search phrase */
var TWITTER_SEARCH_PHRASE = 'Paris PSG';

var Twit = require('twit');

var Bot = new Twit({
	consumer_key: TWITTER_CONSUMER_KEY,
	consumer_secret: TWITTER_CONSUMER_SECRET,
	access_token: TWITTER_ACCESS_TOKEN, 
	access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

console.log('The bot is running...');

/* BotInit() : To initiate the bot */
function BotInit() {
	BotRetweet();
}

/* BotRetweet() : To retweet the matching recent tweet */
function BotRetweet() {

	var query = {
		q: TWITTER_SEARCH_PHRASE,
		result_type: "recent",
	}

	Bot.get('search/tweets', query, BotGotLatestTweet);

	function BotGotLatestTweet (error, data, response) {
		if (error) {
			console.log('-------------------');
			console.log('Bot could not find latest tweet, : ' + error);
            console.log('-------------------');
		}
		else {
			for (tweet of data.statuses) {
                var id = {
                    id: tweet.id_str,
                    message: tweet.message
                }
                var rt = {
                    user_id: tweet.user.id
                }
                Bot.post('statuses/retweet/:id', id, BotRetweeted);
                Bot.post('friendships/create', rt, lookRt);

                function lookRt(error, response) {
                    if (error) {
                        console.log('error = ' + error);
                    } else {
                        console.log('sucess = ' + response)
                    }
                }

                function BotRetweeted(error, response) {
                    if (error) {
                        console.log(id.id);
                        console.log('Bot could not retweet, : ' + error);
                    }
                    else {
                        console.log('-------------------------');
                        console.log('Bot retweeted : ' + id.id);
                        console.log(id.message);
                        console.log('-------------------------');
                    }
                }
            }
		}
	}
}

setInterval(BotRetweet, 5*60*1000);
BotInit();