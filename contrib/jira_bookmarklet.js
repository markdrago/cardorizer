//settings
var board_id = "[trello board id goes here]";
var cardorizer_url = "http://[url of hosted cardorizer goes here]";

//get JIRA items
var key = document.getElementById("key-val").text;
var summary = document.getElementById("issue_header_summary").children[0].text;
var link = location.href;

//create card details
var card_name = key + ": " + summary;
var description = link;

location = cardorizer_url + "?boardid=" + board_id + "&name=" + card_name + "&description=" + description;
