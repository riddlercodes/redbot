require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
// That's the entire setup process, now you can just make requests.

// Submitting a link to a subreddit

// Printing the content of a wiki page
r.getSubreddit('AskReddit').getWikiPage('bestof').content_md.then(console.log);