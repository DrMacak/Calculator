function calculator () {
  var memory = 0;
  var operator = "";
  var display = "0";
  var overWrite = true;

  this.init = function () {
    memory = 0;
    operator = "";
    display = "0";
    overWrite = true;
    this.refresh();
  }

  this.putNumber = function (num) {
    if (overWrite) {
      display = num;
      overWrite = false;
      this.refresh();
    }
    else {
      display += num;
      this.refresh();
    }
  }

  this.putOperator = function (ope) {
    if (ope === "=" || operator !== "") {
      if (ope !== "=" && overWrite) {
        operator = ope;
      } else {
        this.compute();
      }
    } else {
      this.pushToRegister();
      // display = "0";
      operator = ope;
      this.refresh();
    }
  }

  this.putSpecial = function (spec) {
    if (spec === "AC") {
      this.init()
    } else if (spec === "CE") {
      display = "0";
      overWrite = true;
      this.refresh();
    }
  }

  this.compute = function () {
    displayInt = parseFloat(display);

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
    display = display.toString();
    this.pushToRegister();
    // operator = "";
    this.refresh();
  }

  this.refresh = function () {
    $("#display").html(display.substr(0,10));
  }

  this.pushToRegister = function () {
    memory = parseFloat(display);
    overWrite = true;
  }
};

$(document).ready(function () {

  var calc = new calculator();

  $(".numbers").click(function(event) {
    calc.putNumber($(this).attr("id"));
  });

  $(".operators").click(function(event) {
    calc.putOperator($(this).attr("id"));
  });

  $(".special").click(function() {
    calc.putSpecial($(this).attr("id"));
  });

});
