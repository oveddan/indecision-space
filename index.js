$(() => {
  $('#acknowledgement .btn').click(e => {
    e.preventDefault();
    $('#acknowledgement').hide();
    $('#description').show();
  })
});
