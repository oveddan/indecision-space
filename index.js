$(() => {
  $('#acknowledgement .btn').click(e => {
    e.preventDefault();
    $('#acknowledgement').hide();
    $('#description').show();
  });
  $('#hint').click(e => {
    e.preventDefault();
    $('#description').hide();
    $('#answer').show();
  });
});
