$(document).ready(function () {

});

var calc = {
  var memory = 0;
  var operator = "";
  var display = "0";
  function putNumber (num) {
    if (display === "0") {
      display = num;
      this.refresh();
    }
    else {
      display += num;
      this.refresh();
    }
  }
  function putOperator (ope) {
    if (operator === "") {
      operator = ope;
    }
    else {
      this.compute()
    }
  }

  function compute () {
    switch (operator) {
      case "-":
        display = memory - display;
        this.refresh();
        break;
      case "+":
        display = memory + display;
        this.refresh();
        break;
      case "*":
        display *= memory;
        this.refresh();
        break;
      case "*":
        display = memory / display;
        this.refresh();
        break;
      default:    
    }
}
  function refresh() {
    $("#display").html(display.substr(0,10));
  }
};

$(".numbers").click(function(event) {
   // get button id to get number
  calc.putNumber($(this).id());
});

$(".operators").click(function(event) {
  calc.putOperator($(this).id());
});

$("#compute").click(function() {
  calc.compute();
});
