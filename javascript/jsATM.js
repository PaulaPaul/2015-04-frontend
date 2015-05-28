  // JavaScript ATM implementation
  var c_balance = 0.0;
  var s_balance = 0.0;

  function deposit() {
    var trxamt = parseFloat(document.getElementById("d_amount").value);
    //write that code!
    alert(trxamt);
    document.getElementById("message").innerText = 'Your deposit of $' + trxamt + ' to checking is complete.';
  }

  function withdraw() {
    var trxamt = parseFloat(document.getElementById("w_amount").value);
    //write that code!
    alert(trxamt);
    document.getElementById("message").innerText = 'Your withdrawal of $' + trxamt + ' from checking is complete.';
  }

  function x2c() {
    var trxamt = parseFloat(document.getElementById("x2c_amount").value);
    //write that code!
    alert(trxamt);
    document.getElementById("message").innerText = 'Your transfer of $' + trxamt + ' from savings to checking is complete.';
  }

  function x2s() {
    var trxamt = parseFloat(document.getElementById("x2s_amount").value);
    //write that code!
    alert(trxamt);
    document.getElementById("message").innerText = 'Your transfer of $' + trxamt + ' from checking to savings is complete.';
  }

  function getbalance() {
    document.getElementById("message").innerText = 'Your checking account balance is: $' + c_balance + ', and your savings balance is: $' + s_balance;
  }