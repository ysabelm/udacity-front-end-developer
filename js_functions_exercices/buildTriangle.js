function buildTriangle(num) {

	var string = "";
	for (var i = 1; i <= num; i++) {
		string += makeLine(i);
	} return string;
	
	function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";	
	}
}
console.log(buildTriangle(10));