(function(window){
    //settings
    var board_id = "[trello board id goes here]";
    var cardorizer_url = "http://[url of hosted cardorizer goes here]";

    $ = window.jQuery;

    // Abort if we're not looking at a bug in FogBugz
    var bug = window.goBug;
    if(!bug || !$)
    {
	return;
    }

    //get FogBugz data
    var card_name = bug.ixBug + ": " + bug.sTitle;
    var card_desc = location.href;

    var $iframe = $("<iframe>")
	.attr("src", cardorizer_url + "?" + $.param({ boardid: board_id, name: card_name, description: card_desc}))
	.hide()
	.appendTo("body")
	.load(function(){
	    $("<div>").text("Added Card to Trello")
		.css({position:"absolute", left:0, top:0})
		.appendTo("body")
		.fadeOut(2000, function() { $iframe.remove() } );
	});
})(window);