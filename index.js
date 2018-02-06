function getAnswer() {
  // todo: logic here for the answer
  return "you should look behind you.";
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
