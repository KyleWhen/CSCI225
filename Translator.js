var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#Sinister').click(function(){
    $("#displayNumber").text("Left");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text("Left");
});

$('#Medium').click(function(){
    $("#displayNumber").text("Middle");
    numListValue = (numListValue * 10) + 5;
    $('#displayNumber').text("Middle");
});

$('#Dexter').click(function(){
    $("#displayNumber").text("Right");
    numListValue = (numListValue * 10) + 6;
    $('#displayNumber').text("Right");
});

