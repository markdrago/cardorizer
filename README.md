# Cardorizer
Cardorizer is a web tool and a bookmarklet that will add a new card to your trello board based on the contents of the page you are currently viewing.

For example, at my company we use JIRA to hold user stories, bugs, etc.  I would like to use Trello to keep track of my team's priorities and progress.  Now clicking on the cardorizer bookmarklet, when on a JIRA page, creates a card in Trello with the most important details of the JIRA item.

## Supported Services
* JIRA
* Github Issues
* FogBugz
* _Contributions of support for new services are very welcome!_

## Setup
  1. Clone Cardorizer to a web-hosted directory
  2. Copy settings.json.sample to settings.json and put your Trello api key in to it.  You can get your Trello API key from here: https://trello.com/1/appKey/generate
  3. Go to your hosted version of Cardorizer and create a bookmarklet for your Trello board.

## Adding Support for More Services
Adding support for a new service is very easy.  Take a look at bookmarklet/cardorizer.js.  You write two very simple functions to identify the current page as one that your parser can handle, and another which simply gets the pieces of data from the page.

