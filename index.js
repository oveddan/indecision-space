function getAnswer() {
  var oracle = adjectives[Math.floor(Math.random()*300)];
  return oracle ;
}

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
    $('#answerText').text(getAnswer());
  });
});
