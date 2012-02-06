$(document).ready(function() {

  var scheme = location.protocol + "//";
  var host = location.hostname;
  var port = location.port;
  if (port != "") { port = ":" + port; }
  var path = location.pathname;
  var cardorizer_url = scheme + host + port + path;
  $("#cardorizer-url").val(cardorizer_url);

  $('#make-cardorizer').click(function() {
    $.ajax({
      url:'bookmarklet/bookmarklet.tmpl.txt',
      datatype: 'text',
      success: function(result) {
        var board_id = $('#board-id').val();
        var cardorizer_url = $('#cardorizer-url').val();
        result = 'javascript:' + result.replace(/\s+/g, ' ').replace(/\n/g, '');
        result = result.replace(/\$\{board_id\}/g, board_id);
        result = result.replace(/\$\{cardorizer_url\}/g, cardorizer_url);
        $('#cardorizer-bookmarklet').html($('<a>').attr('href', result).append('Cardorizer'));
      }
    });
  });
});
