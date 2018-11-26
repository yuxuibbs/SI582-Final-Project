$(document).ready(function() {
    var getInfo = new URL(window.location.href);
    score = parseInt(getInfo.searchParams.get('totalScore'));
    $("#total").append(score);
});