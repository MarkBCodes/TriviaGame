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
  timerId: "",
  // questions options and answers data
  questions: {
    q1:
      "Which of the actors on Friends unfortunately decides to whiten his teeth before going our on a first date with a girl he's had a crush on for some time?",
    q2: "Who was Ross's second wife?",
    q3: "What borough of New York does the gang live in?",
    q4: "Who plays Chandler?",
    q5: "Who stole Monica's thunder after she got engaged?",
    q6: "Who hates Thanksgiving?",
    q7:
      "In the first season, who was Rachel going to marry, but left at the altar"
  },
  options: {
    q1: ["Joey", "Chandler", "Gunther", "Ross"],
    q2: ["Rachel", "Emily", "Phoebe", "Chandler"],
    q3: ["Brooklyn", "Queens", "Manhattan", "Long Island"],
    q4: ["Matt LeBlanc", "David Schwimmer", "Joshua Jackson", "Matthew Perry"],
    q5: ["Rachel", "Phoebe", "Emily", "Carol"],
    q6: ["Joey", "Chandler", "Rachel", "Ross"],
    q7: ["Ross", "Barry", "Tommy (The Screamer)", "Paolo"]
  },
  answers: {
    q1: "Ross",
    q2: "Emily",
    q3: "Manhattan",
    q4: "Matthew Perry",
    q5: "Rachel",
    q6: "Chandler",
    q7: "Barry"
  }
};
