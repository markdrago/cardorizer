require([cardorizer_url + '/bookmarklet/lib/jquery.min.js'], jira);

function jira() {
    var key=document.getElementById("key-val").text;
    var summary=document.getElementById("issue_header_summary").children[0].text;
    var link=location.href;
    var card_name=key+": "+summary;
    var description=link;
    //location=cardorizer_url+"?boardid="+board_id+"&name="+card_name+"&description="+description

    var $iframe = $("<iframe>")
        .attr("src", cardorizer_url + "?" + $.param({ boardid: board_id, name: card_name, description: description}))
        .hide()
        .appendTo("body")
        .load(function(){
            $("<div>").text("Added Card to Trello")
            .css({position: 'absolute',
                  left: 0,
                  top: 0,
                  'z-index': 99999999,
                  color: '#e3e3e3',
                  'background-color': '#287CAB',
                  padding: '5px',
                  'font-size': '13px',
                  'font-weight': 'bold',
                  'line-height': '30px',
                  'text-shadow': '0 1px rgba(0, 0, 0, 0.4)'})
            .appendTo("body")
            .fadeOut(2000, function() { $iframe.remove() } );
        });
}
