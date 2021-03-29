var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#Sinister').click(function(){
    $("#displayTranslation").text("Left");
    numListValue = (numListValue * 10) + 4;
    $('#displayTranslation').text(numListValue);
});

$('#Medium').click(function(){
    $("#displayTranslation").text("Middle");
    numListValue = (numListValue * 10) + 5;
    $('#displayTranslation').text(numListValue);
});

$('#six').click(function(){
    $("#displayTranslation").text("Right");
    numListValue = (numListValue * 10) + 6;
    $('#displayTranslation').text(numListValue);
});