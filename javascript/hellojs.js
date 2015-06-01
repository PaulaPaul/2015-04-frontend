function writeMyName() {
		document.getElementById("theName").innerHTML = "Paula was here!";
	}

function tryIt() {
	if (document.getElementById("the-button").innerHTML == "Try It") {
		document.getElementById("the-text").innerHTML = "Paragraph changed.";
		document.getElementById("the-button").innerHTML = "Put it back";
	}
	else {
		document.getElementById("the-text").innerHTML = "Welcome to javascript!";
		document.getElementById("the-button").innerHTML = "Try It";
	}
}

function sayWeather() {
	var temp = "72 degrees";
	alert("It's " + temp);
}

// these two functions go together
function sayWeather2(functionName) {
	var temp = functionName();  // variable set to function
	alert("It's " + temp);
}

function takeTemp() {
  console.log('You made it this far! In the takeTemp function.')
	return "60 degrees!";
}

function hellogoodbye() {
  console.log(document.getElementById("hellogoodbye").innerHTML)
  if (document.getElementById("hellogoodbye").innerHTML == "Goodbye, ALL!") {
	  alert("Goodbye, ALL!!!!");
    document.getElementById("all-buttons").innerHTML = "";
  }
  else {
    alert("Warning: DO NOT CLICK THE GOODBYE BUTTON!!!");
    document.getElementById("hellogoodbye").innerHTML = "Goodbye, ALL!";
  }

}
