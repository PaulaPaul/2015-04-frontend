$(document).ready(function() {
   console.log( "document ready" );

  $("#the-button").click(function() {
      if ($("#the-button").text() == "Try It") {
         $("#the-text").text("Paragraph changed.");
         $("#the-button").text("Put it back");
      }
      else {
         $("#the-text").text("Welcome to javascript!");
         $("#the-button").text("Try It");
	    }
  });
  
  $("#hellogoodbye").click(function() {
    if ($("#hellogoodbye").text() == "Goodbye, ALL!") {
      alert("Goodbye, ALL!!!!");
      $("#all-buttons").text("");
    }
    else {
      alert("Warning: DO NOT CLICK THE GOODBYE BUTTON!!!");
      $("#hellogoodbye").text("Goodbye, ALL!");
    }

  });
  
  $("#weather-button").click(function() {
     var temp = "72 degrees";
     alert("It's " + temp);
  });

  // these two functions go together
  $("#weather-button2").click(function() {
    alert("It's " + takeTemp());
  });

  function takeTemp() {
    return "60 degrees!";
  }  
    
});



