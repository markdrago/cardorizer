require([cardorizer_url + '/bookmarklet/lib/jquery.min.js'], send_to_trello);

//board_id and cardorizer_url are defined directly in the bookmarklet

function send_to_trello() {
    var card_details = null;
    for (var i in sources) {
        var source = sources[i];
        if (source.identify()) {
            card_details = source.parse();
            break;
        }
    }

    if (card_details == null) {
        return;
    }

    var parameters = {
        boardid: board_id,
        name: card_details['name'],
        description: card_details['description']
    };

    var $iframe = $("<iframe>")
        .attr("src", cardorizer_url + "?" + $.param(parameters))
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

/* sources:
 *   identify: returns true/false if the current page is one of the
 *             pages that this source will be able to parse
 *      parse: returns an object with the following contents
 *              - name: the name/title of the card
 *              - description: the description of the card
 */

var sources = [
    //JIRA
    {
        identify: function() {
            return ($("#key-val").length > 0);
        },

        parse: function() {
            var key = $("#key-val").text();
            var summary = $("#issue_header_summary").children().first().text();
            return { name: key + ": " + summary, description: location.href };
        }
    }
];
