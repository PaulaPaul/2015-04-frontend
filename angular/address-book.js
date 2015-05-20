function PeopleController($scope){
  $scope.people=[
    {name:"Paula Paul", phone: "4445551212", city:"Charlotte"},
    {name:"Jane Hacker", phone: "8885553434", city:"Atlanta"},
    {name:"Devon Devops", phone: "2228880123", city:"Raleigh"},
    {name:"Angie Angular", phone: "9998765643", city:"Asheville"}
  ];
  
  $scope.formVisibility=false;

  $scope.Save=function(){
    $scope.people.push({name:$scope.newPerson.name, phone:$scope.newPerson.phone, city:$scope.newPerson.city});
    $scope.formVisibility=false;
    console.log($scope.formVisibility)
  }

  $scope.ShowForm=function(){
    $scope.formVisibility=true;
    console.log($scope.formVisibility)
  }

}