$(document).ready(function() {
  // event listeners
  $("#remaining-time").hide();
  $("#start").on("click", trivia.startGame);
  $(document).on("click", ".option", trivia.guessChecker);
});

var trivia = {
  // trivia properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId: ""
};
