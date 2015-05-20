$(document).ready(function() {
  console.log( "document ready" );  
  var buttoncount;
  buttoncount = 0;

  $("#the-button").click(function() {
      // Add or remove a class, depending on whether it's currently present
      $("p").toggleClass("special");

      // Check whether the class exists
      if ($("p").hasClass("special")){
        alert("The paragraph is special!");
      }
      else {
        alert("The paragraph is not special.");
      }
    
      buttoncount = buttoncount + 1;
      $("ul").append($("<li>").text("Try it again."));
    
      $("body").append($("<p>").text("Make another paragraph every time you press the button.  This makes " + buttoncount.toString()));
      
  });
    
});