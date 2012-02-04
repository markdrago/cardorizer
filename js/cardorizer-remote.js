require(['js/jquery.min.js']);

var key=document.getElementById("key-val").text;
var summary=document.getElementById("issue_header_summary").children[0].text;
var link=location.href;
var card_name=key+": "+summary;
var description=link;
location=cardorizer_url+"?boardid="+board_id+"&name="+card_name+"&description="+description
