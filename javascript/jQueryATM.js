$(document).ready(function() {
  console.log( "document ready" );  
  var balance;
  var savingsbalance;
  balance = 0;
  savingsbalance = 0;

  $("#balance").click(function() {
      // show the balance in the message area
      $("#message").text("Your checking balance is: " + balance.toString() + ", and your savings balance is  " + savingsbalance.toString());      
  });
  
  $("#x2check").click(function() {
     // Transfer from Savings to Checking
     var amount = parseFloat($("#x2c_amount").val());
     console.log( amount.toString() );  
    if (amount > savingsbalance) {
      $("#message").text("You don't have that much money in savings!"); 
    }
    else {
      // show the results in the message area
      balance = balance + amount;
      savingsbalance = savingsbalance - amount;
      $("#message").text("Transfer from savings to checking complete.  Thank you for your business!"); 
    }    
  });
  
  $("#x2save").click(function() {
     // Transfer from Checking to Savings
     var amount = parseFloat($("#x2s_amount").val());
     console.log( amount.toString() );  
     if (amount > balance) {
      $("#message").text("You don't have that much money in checking!"); 
    }
    else {
      // show the results in the message area
      balance = balance - amount;
      savingsbalance = savingsbalance + amount;
      $("#message").text("Transfer from checking to savings complete.  Thank you for your business!"); 
    }    
  });
  
  $("#deposit").click(function() {
     var amount = parseFloat($("#d_amount").val());
     console.log( amount.toString() );  
     balance = balance + amount;
     // show the results in the message area
     $("#message").text("Thank you for your deposit!");      
  });
  
  $("#withdraw").click(function() {
    var amount = parseFloat($("#w_amount").val());
    console.log( amount.toString() );  
    if (amount > balance) {
      $("#message").text("You don't have enough money!"); 
    }
    else {
      // show the results in the message area
      balance = balance - amount;
      $("#message").text("Withdrawal complete.  Thank you for your business!"); 
    }
  });
    
});