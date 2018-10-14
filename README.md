#Creating a Twitter bot with Node.js
Learn how you can create your own [Twitter bot](https://en.wikipedia.org/wiki/Twitterbot) using [Node.js](https://nodejs.org/) and the new [Twitter API](https://dev.twitter.com/overview/api). The bot will auto retweet in response to tweets with some particular [hashtags](https://en.wikipedia.org/wiki/Hashtag). [(https://goo.gl/4whEIt)](https://goo.gl/4whEIt)
 
##Tools we need
Here are the tools we’ll be using to create the bot — 

- [Node.js](https://nodejs.org/) installed in your machine
- A registered Twitter account

## Create a Twitter application

1. Create a new account at Twitter that will become your bot. Then go to [apps.twitter.com](https://apps.twitter.com/apps/new), sign-in with your new Twitter account and create a Twitter application. Give your application a name, description and put any URL in the website field. Keep the callback URL field blank, agree to the terms and submit the form to create your first Twitter application.
2. Once the Twitter application has been created, click the Keys and Access Tokens tab and click the Create my Access Token button. Twitter will generate the Consumer Keys and Access tokens that we will need in a later step.

##Initialize the Twitter bot

1. [Click here](https://gist.github.com/debashisbarman/bffe0f6cd3c0fd2fe40e) to get the source code and save it to your machine. Make sure the source code include [package.json](https://gist.github.com/debashisbarman/bffe0f6cd3c0fd2fe40e#file-package-json) and [bot.js](https://gist.github.com/debashisbarman/bffe0f6cd3c0fd2fe40e#file-bot-js) file.
2. In the bot.js file edit the values of `TWITTER_CONSUMER_KEY`, `CONSUMER_SECRET`, `ACCESS_TOKEN` and `ACCESS_SECRET` — you know them all from the previous steps.
3. Set the `TWITTER_SEARCH_PHRASE` and all matching tweets will get processed by the Twitter bot, one at a time.

##Test the bot

1. Open your terminal and go to the directory where you have saved the source files — both package.json and bot.js file.
2. Type `npm install` in the terminal and required packages will be installed on your system.
3. Type `npm start` or `node bot.js` to start the bot and if you get the message `The bot is happily running…` in the terminal, that’s good. The bot is listening for tweets coming in. You can even hop to your Twitter bot account to check whether the bot is working or not.

##Author
Written by [Debashis Barman](http://debashisbarman.in)

##License
Licensed under [http://creativecommons.org/licenses/by-sa/3.0](http://creativecommons.org/licenses/by-sa/3.0)

##Bug Report
Report error and bugs to [deb.dbuniversity@gmail.com](mailto:deb.dbuniversity@gmail.com)# bot_twitter
