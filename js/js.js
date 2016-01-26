$(document).ready(function () {

function calculator () {
  var memory = 0;
  var operator = "";
  var display = "0";

  this.init = function () {
    memory = 0;
    operator = "";
    display = "0";
    this.refresh();
  }

  this.putNumber = function (num) {
    this.logit();
    if (display === "0") {
      display = num;
      this.refresh();
    }
    else {
      display += num;
      this.refresh();
    }
  }

  this.putOperator = function (ope) {
    this.logit();
    if (ope === "=" || operator !== "") {
      this.compute()
    }
    else {
      memory = parseFloat(display);
      display = "0";
      operator = ope;
      this.refresh();
    }
  }

  this.putSpecial = function (spec) {
    this.logit();
    if (spec === "AC") {
      this.init()
    } else if (spec === "CE") {
      display = "0";
      this.refresh();
    }
  }

  this.compute = function () {
    displayInt = parseFloat(display);
    this.logit();
    if (operator === "-"){
        display = memory - displayInt;
      } else if (operator === "+") {
        display = memory + displayInt;
      } else if (operator === "*") {
        display = memory * displayInt;
      } else if (operator === "/") {
        if (displayInt !== 0) {
          display = memory / displayInt;
        }
      } else if (operator === "%") {
        if (displayInt !== 0) {
          display = (memory / displayInt)*100;
        }
      }
    memory = parseFloat(display);
    operator = "";
    this.refresh();
  }
  this.refresh = function () {
    $("#display").html(display);
  }
  this.logit = function () {
    console.log("display " + display);
    console.log("memory " + memory);
    console.log("operator " + operator);
  }
};
var calc = new calculator();
$(".numbers").click(function(event) {
   // get button id to get number
  calc.putNumber($(this).attr("id"));
});

$(".operators").click(function(event) {
  calc.putOperator($(this).attr("id"));
});

$("#compute").click(function() {
  calc.compute();
});

$(".special").click(function() {
  calc.putSpecial($(this).attr("id"));
});



});
