/*Use the array's forEach() method to loop over the following array 
and add 100 to each of the values if the value is divisible by 3.*/


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
test.forEach(function(num, index, test) {
	if(test[index] % 3 === 0) {
		test[index] += 100;
	}
});
console.log(test);
