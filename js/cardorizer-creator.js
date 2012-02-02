$(document).ready(function() {
  $('#make-carderizer').click(function() {
    $.ajax({
      url:'/txt/cardorizer-local.txt',
      datatype: 'text',
      success: function(result) {
        var board_id = $('#board-id').val();
        var cardorizer_url = $('#cardorizer-url').val();
        result = 'javascript:' + result.replace(/\s+/g, ' ').replace(/\n/g, ' ');
        result = result.replace(/\$\{board_id\}/g, board_id);
        result = result.replace(/\$\{cardorizer_url\}/g, cardorizer_url);
        $('#carderizer-bookmarklet').html($('<a>').attr('href', result).append('Cardorizer'));
      }
    });
  });
});
