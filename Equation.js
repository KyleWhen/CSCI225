var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#four').click(function(){
    $("#displayNumber").text("4");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text(numListValue);
});