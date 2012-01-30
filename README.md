# Cardorizer
Cardorizer is a simple web tool that will add a new card to your trello board based on the URL parameters that you pass to it.  This can be paired with bookmarklets to make simple integration with some other web tool much easier.

For example, at my company we use JIRA to hold user stories, bugs, etc.  A lot of other departments use JIRA when interacting with our department and so migrating away from JIRA is somewhat complicated.  However, I would like to use Trello to keep track of my team's priorities and progress.  We now have a simple bookmarklet (included with Cardorizer) which, when the user is on a JIRA page, gets the pertinent details for the current JIRA item, sends them over to Cardorizer, and then Cardorizer adds the card to Trello.

## Setup
  1. Clone Cardorizer to a web-hosted directory
  2. Copy settings.json.sample to settings.json and put your Trello api key in to it.  You can get your Trello API key from here: https://trello.com/1/appKey/generate
  3. Go to your hosted version of Cardorizer and pass it the details of a new card you would like to create.

## Bookmarklets
Bookmarklets make it easy to use Cardorizer to get a minimal level of integration going between whatever web tool you like and Trello.  A bookmarklet to integrate with JIRA is included with Cardorizer.

To use the included JIRA bookmarklet, open it up, add your Trello board id and the location to your hosted version of Cardorizer to the file, and then run it through a javascript minimizer like this one: http://jscompress.com/ .

After you have the minified version of the bookmarklet, add "javascript:" to the front of it and create a new bookmark with it.  Now, when you're on a JIRA page you'll be able to click the bookmarklet and it will end up creating a Trello card on your trello board with some of the details from that JIRA ticket.
