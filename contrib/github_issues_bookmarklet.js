(function(window){
    //settings
    var board_id = "[trello board id goes here]";
    var cardorizer_url = "http://[url of hosted cardorizer goes here]";

    $ = window.jQuery;

    // Abort if we can't find the Github Issue information
    if(!$ || !$("#show_issue"))
    {
        alert("You can only use this on a Github Issue page!");
        return;
    }

    //get Issue data
    var card_name = $("#show_issue .number strong").text() + " " + 
        $("#show_issue .content-title").text();
    var card_desc = location.href;

    var url_with_payload = cardorizer_url + "?" + 
        $.param({ boardid: board_id, name: card_name, description: card_desc})

    var $iframe = $("<iframe>")
        .attr("src", url_with_payload)
        .hide()
        .appendTo("body")
        .load(function(){
            $("<div>").text("Sent Card to Trello")
          .css({position:"absolute", left:0, top:0})
          .appendTo("body")
          .fadeOut(2000, function() { $iframe.remove() } );
    });
})(window);
