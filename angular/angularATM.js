function AtmController($scope){
    $scope.message = 'Welcome to the Angular ATM!';
    $scope.c_balance = 0.00; // checking balance
    $scope.s_balance = 0.00; // savings balance
    $scope.d_amount = 0.00;  // input amounts for deposit, withdrawal & transfers
    $scope.w_amount = 0.00;
    $scope.x2c_amount = 0.00;
    $scope.x2s_amount = 0.00;

    $scope.deposit = function() {
        $scope.c_balance = $scope.c_balance + $scope.d_amount;
        $scope.message = 'Your deposit of $' + $scope.d_amount + ' to checking is complete.';
        $scope.d_amount = 0;
    };

    $scope.withdraw = function() {
        if ($scope.w_amount > $scope.c_balance) {
          $scope.message = "You don't have that much money in checking!  Check your balance...";
        }
        else {
          $scope.c_balance = $scope.c_balance - $scope.w_amount;
          $scope.message = 'Your withdrawal of $' + $scope.w_amount + ' is complete.';
          $scope.w_amount = 0;
        }
    };
  
    $scope.x2s = function() {
        if ($scope.x2s_amount > $scope.c_balance) {
          $scope.message = "You don't have that much money in checking!  Check your balance...";
        }
        else {
          $scope.s_balance = $scope.s_balance + $scope.x2s_amount;
          $scope.c_balance = $scope.c_balance - $scope.x2s_amount;
          $scope.message = 'Your transfer of $' + $scope.x2s_amount + ' from checking to savings is complete.';
          $scope.x2s_amount = 0;
        }
    };
  
    $scope.x2c = function() {
        if ($scope.x2c_amount > $scope.s_balance) {
          $scope.message = "You don't have that much money in savings!  Check your balance...";
        }
        else {
          $scope.s_balance = $scope.s_balance - $scope.x2c_amount;
          $scope.c_balance = $scope.c_balance + $scope.x2c_amount;
          $scope.message = 'Your transfer of $' + $scope.x2c_amount + ' from savings to checking is complete.';
          $scope.x2c_amount = 0;
        }
    };
  
    $scope.getbalance = function() {
        $scope.message = 'Your checking account balance is: $' + $scope.c_balance + ', and your savings balance is: $' + $scope.s_balance;
    };
};