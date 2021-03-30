var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#one').click(function(){
    $("#displayNumber").text("One");
    numListValue = (numListValue * 10) + 1;
    $('#displayNumber').text("One");    
});

$('#two').click(function(){
    $("#displayNumber").text("Two");
    numListValue = (numListValue * 10) + 2;
    $('#displayNumber').text("Two");
});

$('#three').click(function(){
    $("#displayNumber").text("Three");
    numListValue =(numListValue * 10 ) + 3;
    $('#displayNumber').text("Three");
});

$('#four').click(function(){
    $("#displayNumber").text("Four");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text("Four");
});

$('#five').click(function(){
    $("#displayNumber").text("Five");
    numListValue = (numListValue * 10) + 5;
    $('#displayNumber').text("Five");
});