function Conversion() {
    var val = document.getElementById("value").value;
    var output = document.getElementById("Output");
  
    var selectFrom = document.getElementById("Selection");
    var selectTo = document.getElementById("Selection2");
  
    var madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    var madeSelection_2 = selectTo[selectTo.selectedIndex].value;
  
    if (madeSelection_1 == "kilograms1" && madeSelection_2 == "kilograms2") {
      var result = val * 1;
      output.value = result;
  
    }
  }