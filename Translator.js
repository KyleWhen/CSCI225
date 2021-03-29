var num = 0;
var oper = "*";
var numList = [];
var operList = [];
var operand = ["",""];
var numListValue = 0;

$('#zero').click(function(){
    $("#displayNumber").text("0");
    numListValue = (numListValue * 10) + 0;
    $('#displayNumber').text(numListValue);
});

$('#one').click(function(){
    $("#displayNumber").text("1");
    numListValue = (numListValue * 10) + 1;
    $('#displayNumber').text(numListValue);    
});

$('#two').click(function(){
    $("#displayNumber").text("2");
    numListValue = (numListValue * 10) + 2;
    $('#displayNumber').text(numListValue);
});

$('#three').click(function(){
    $("#displayNumber").text("3");
    numListValue =(numListValue * 10 ) + 3;
    $('#displayNumber').text(numListValue);
});

$('#four').click(function(){
    $("#displayNumber").text("Left");
    numListValue = (numListValue * 10) + 4;
    $('#displayNumber').text(numListValue);
});

$('#five').click(function(){
    $("#displayNumber").text("Middle");
    numListValue = (numListValue * 10) + 5;
    $('#displayNumber').text(numListValue);
});

$('#six').click(function(){
    $("#displayNumber").text("Right");
    numListValue = (numListValue * 10) + 6;
    $('#displayNumber').text(numListValue);
});

$('#seven').click(function(){
    $("#displayNumber").text("7");
    numListValue = (numListValue * 10) + 7;
    $('#displayNumber').text(numListValue);
});

$('#eight').click(function(){
    $("#displayNumber").text("8");
    numListValue = (numListValue * 10) + 8;
    $('#displayNumber').text(numListValue);
});

$('#nine').click(function(){
    numListValue = (numListValue * 10) + 9;
    $('#displayNumber').text(numListValue);
});

$('#plus').click(function(){
    $("#displayNumber").text("+");
    numList.push(numListValue);
    if (operList.length != 0) {
        docalculation();
    }  
    operList.push('+');
    numListValue= 0;
});

$('#minus').click(function(){
    $("#displayNumber").text("-");
    numList.push(numListValue);
    if (operList.length != 0) {
        docalculation();
    }
    operList.push('-');
    numListValue = 0;
});

$('#multiply').click(function(){
    $("#displayNumber").text("*");
    numList.push(numListValue);
    if (operList.length != 0) {
        docalculation();
    }
    operList.push('*');
    numListValue = 0;
});

$('#divide').click(function(){
    $("#displayNumber").text("/");
    numList.push(numListValue);
    if (operList.length != 0) {
        docalculation();
    }
    operList.push('/');
    numListValue = 0;
});

$('#power').click(function(){
    $("#displayNumber").text("^");
    numList.push(numListValue);
    if (operList.length != 0) {
        docalculation();
    }
    operList.push('^');
    numListValue = 0;
});

$('#decimal').click(function(){
    $("#displayNumber").text(".");
    numList.push('.');
});

$('#clear').click(function(){
    $("#displayNumber").text("");
    numList= [];
    operList = [];
    numListValue = "";
});

function docalculation(){
    var result = 0;
    var num2 = numList[numList.length-1];
    console.log("num2="+num2);
    numList.pop();
    var num1 = numList[numList.length-1];
    console.log("num1="+num1);
    numList.pop();
    oper = operList[operList.length-1];
    console.log("oper="+oper);
    operList.pop();
    console.log("num1="+num1+" num2="+num2+" oper="+oper);
    if (oper === '+'){
        result = num1 + num2;
        numList.push(result);
    } else if (oper === '-'){
        result = num1 - num2;
        numList.push(result);
    } else if (oper === '*') {
        result = num1 * num2;
        numList.push(result);
    } else if (oper === '/') {
        result = num1 / num2;
        numList.push(result);
    } else if (oper === '^') {
        result = Math.pow(num1, num2);
        numList.push(result);
    }

    $("#displayNumber").text(result);
}

$('#result').click(function(){
    numList.push(numListValue);
    numListValue = 0
    if (operList.length != 0) {
        docalculation();
    }
});