var myCalc=angular.module('myCalc',[]);

//creating a controller for the calculator
myCalc.controller('calcController',function($scope){

	//setting initial values
	$scope.output = "0";
	$scope.numOld=null;
	$scope.operator="";
	$scope.newNumber="false";
	$scope.num1=null;

	//function to check input entered by the user
	$scope.checkNumber=function(){

		var patt = new RegExp("^[0-9]+[.]?[0-9]*$");
		var str = $scope.output;
		var res = patt.test(str);
		$scope.checkNum=res;
		return res;		
	}

	//when the user presses a number key or delete key
	$scope.press = function(num) {
		if(angular.equals(num, 'x'))
		{
			$scope.output = $scope.output.toString().slice(0 , $scope.output.length - 1);    
			console.log("scope output is "+$scope.output);
			if($scope.output=="")
			{
				$scope.output="0";
			}
		} 
		else
		{
			if($scope.output=="0" || $scope.newNumber)
			{
				if(num==".")
				{
					$scope.output="0.";
				}
				else
				{
					$scope.output=num;
				}
				$scope.newNumber=false;
			}
			else
			{
				$scope.output+=num;
			}
			$scope.numOld=$scope.output;
		}
		if(!$scope.checkNumber())
		{
			$scope.msg="** Invalid Number !!";
		}
		else
		{
			$scope.msg=null;
		}
	};

	//function to define behaviour when a user clicks on an operator key
	$scope.calculate = function(op) {

		$scope.operator = op;
		//console.log($scope.output);
		$scope.num1=$scope.output;
		//console.log("Number1:"+$scope.num1);
		$scope.newNumber=true;


	};

	//function to define behaviour when a user clicks on equals key
	$scope.calculation=function()
	{
		var operator=$scope.operator;
		switch(operator)
				{
			case '+': 
				$scope.output=1*$scope.num1+1*$scope.numOld;
				break;
			case '-':
				$scope.output=1*$scope.num1-1*$scope.numOld;
				break;
			case '*':
				$scope.output=1*$scope.numOld*1*$scope.num1;
				break;
			case '/':
				if($scope.numOld=="0")
				{
					$scope.output="Can't Divide by Zero";
				}
				else
				{
					$scope.output=$scope.num1/$scope.numOld;
				}

				break;
			case '^':
				$scope.output=Math.pow($scope.num1,$scope.numOld);
				break;
			case 'root':
				$scope.output=Math.sqrt(parseFloat($scope.output));
				break;
			default:

		}
		$scope.newNumber=true;
	};
	
	//reset the calculator
	$scope.reset=function()
	{
		$scope.output = "0";
		$scope.numOld=null;
		$scope.operator="";
		$scope.newNumber="false";
		$scope.num1=null;
		$scope.msg=null;
		$scope.checkNum=true;
	}



});