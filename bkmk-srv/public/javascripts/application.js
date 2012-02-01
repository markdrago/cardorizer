$(document).ready(function() {
  $('#make-carderizer').click(function() {
    $.ajax({
      url:'/bm-client/cardorizer',
      datatype: 'text',
      data: {
        board_id: $('#board-id').val(),
        cardorizer_url: $('#cardorizer-url').val()
      },
      success: function(result) {
        result = 'javascript:' + result.replace(/\s+/g, ' ').replace(/\n/g, ' ');
        $('#carderizer-bookmarklet').html($('<a>').attr('href', result).append('Cardorizer'));
      }
    });
  });
});
