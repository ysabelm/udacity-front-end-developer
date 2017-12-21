var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === true) {
	if (isActive && balance >0 === true) {
		console.log("Your balance is $" + balance.toFixed(2) + ".");	
	} else if(isActive === false) {
		console.log("Your account is no longer active.");
	} else if(balance === 0) {
		console.log("Your account is empty.");
	} else if(balance < 0) {
		console.log("Your balance is negative. Please contact bank.");
	}
} else {
	console.log("Thank you. Have a nice day!");
}
