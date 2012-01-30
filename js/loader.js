//this script does the following in order:
//1. loads the cardorizer settings (including trello api key)
//2. loads the trello client side JS (providing trello api key)
//3. loads the cardorizer.js script
//This is done so the key can be stored separately from all of the code
//and everything still gets loaded in the right order.

//load settings.json
$.ajax("settings.json", {
    dataType: "json",
    success: function(data) {
        load_trello_js(data.key);
    }
});

function load_trello_js(key) {
    var url = "https://api.trello.com/1/client.js";
    $.ajax(url, {
        dataType: "script",
        data: { "key" : key },
        success: load_cardorizer
    });
};

function load_cardorizer() {
    $.ajax("js/cardorizer.js", {
        dataType: "script"
    });
};

