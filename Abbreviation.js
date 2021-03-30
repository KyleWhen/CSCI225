var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#four').click(function(){
    $("#displayNumber").text("GA");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text("GA");
});

$('#five').click(function(){
    $("#displayNumber").text("AL");
    numListValue = (numListValue * 10) + 5;
    $('#displayNumber').text("AL");
});

$('#six').click(function(){
    $("#displayNumber").text("FL");
    numListValue = (numListValue * 10) + 6;
    $('#displayNumber').text("FL");
});

$('#seven').click(function(){
    $("#displayNumber").text("VA");
    numListValue = (numListValue * 10) + 7;
    $('#displayNumber').text("VA");
});

$('#eight').click(function(){
    $("#displayNumber").text("NC");
    numListValue = (numListValue * 10) + 8;
    $('#displayNumber').text("NC");
});

$('#nine').click(function(){
    $("#displayNumber").text("SC");
    numListValue = (numListValue * 10) + 9;
    $('#displayNumber').text("SC");
});

$('#clear').click(function(){
    $("#displayNumber").text("");
    numList= [];
    operList = [];
    numListValue = "";
});