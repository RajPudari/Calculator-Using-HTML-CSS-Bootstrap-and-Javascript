var display = document.getElementById("input");
var buttons = document.getElementsByClassName("btn-lg");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "x²" && 
    button.textContent != "%" && 
    button.textContent != "±" && 
    button.textContent != "x!" 
 ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "x²") {
      square();
    } else if (button.textContent === "x!") {
      factorial();}
  
  });
});


function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}


function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}

function clear() {
  display.value = "";
}


function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}


function square() {
  display.value = eval(display.value * display.value);
}


function percent() {
  display.value = display.value / 100;
}

var BACKSPACE = document.getElementById("BackspaceBtn")  // backspace is given separtely because fontawesome was used
BACKSPACE.addEventListener("click", backspace);
  function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
  }
  
