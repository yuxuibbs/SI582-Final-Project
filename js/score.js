$(document).ready(function() {
    // get info
    var getInfo = new URL(window.location.href);
    prezRange = parseInt(getInfo.searchParams.get('prezRange'));
    questionNumber = parseInt(getInfo.searchParams.get('questionNumber'));
    score = parseInt(getInfo.searchParams.get('totalScore'));
    points = parseInt(getInfo.searchParams.get('points'));
    correctAnswer = parseInt(getInfo.searchParams.get('correctAnswer'));
    answer = parseInt(getInfo.searchParams.get('answer'));
    // set info
    questionNumber++;
    if (answer == correctAnswer) {
        score += points;
    } else {
        points = 0;
    }
    $("#earnedPoints").append(points);
    $("#total").append(score);
    $("#correctAnswer").append(correctAnswer);
    $("#points").val(points);
    $("#prezRange").val(prezRange);
    $("#questionNumber").val(questionNumber);
    $("#totalScore").val(score);
    $("#clue6").text(clues[correctAnswer][0]);
    $("#clue4").text(clues[correctAnswer][1]);
    $("#clue2").text(clues[correctAnswer][2]);
    // exit after 12 questions
    if (questionNumber == 13) {
        $("#next-question").text("Finish");
        $("#score-form").attr('action', 'finalScore.html');
    }
});