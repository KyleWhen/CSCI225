var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;
$("#displayNumber").text("11 + 18 = ?");

$('#four').click(function(){
    $("#displayNumber").text("11 + 18 = 29");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text("11 + 18 = 29");
});