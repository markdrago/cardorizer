$(document).ready(function() {
    Trello.authorize({
        interactive: false,
        scope: { read: true, write: true },
        success: function() {
            update_logged_in_status();
            post_card_based_on_url_parameters();
        },
        error: function() {
            update_logged_in_status();
        }
    });

    $("#disconnectLink").click(function() {
        Trello.deauthorize();
        update_logged_in_status();
    });

    $("#connectLink").click(function(){
        Trello.authorize({
            type: "popup",
            scope: { read: true, write: true },
            success: function() {
                update_logged_in_status();
                post_card_based_on_url_parameters();
            },
            error: function() {
                update_logged_in_status();
                alert('Unable to connect to Trello');
            }
        });
    });
});

function post_card_based_on_url_parameters() {
    var params = get_parameters_from_location();
    get_list_id_for_board(params.boardid, function(listid) {
        create_card_with_parameters(params.name,
                                    params.description,
                                    listid);
    });
}

function get_parameters_from_location() {
    return {
        name: get_url_parameter("name"),
        description: get_url_parameter("description"),
        boardid: get_url_parameter("boardid")
    };
}

//just use the left-most open list for now
function get_list_id_for_board(boardid, callback) {
    Trello.get("boards/" + boardid + "/lists/open", function(lists) {
        callback(lists[0].id);
    });
}

function create_card_with_parameters(name, desc, listid) {
    Trello.post("cards", {
        name: name,
        desc: desc,
        idList: listid
    });
    show_feedback_alert();
}

function show_feedback_alert() {
    $("#feedback").show();
    setTimeout("close_feedback_alert()", 5000);
}

function close_feedback_alert() {
    $('#feedback').alert('close');
}

function update_logged_in_status() {
    var isLoggedIn = Trello.authorized();
    $("#deauthorized").toggle(!isLoggedIn);
    $("#authorized").toggle(isLoggedIn);        
};

//based on http://stackoverflow.com/a/8604927/129064
function get_url_parameter(name) {
    var value = (location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1];
    value = value.replace(/\+/g, "%20");
    return decodeURIComponent(value);
}

