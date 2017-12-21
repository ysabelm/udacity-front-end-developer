/*Create a function called hasEnoughPlayers() that takes the team array as an argument
 and returns true or false depending on if the array has at least seven players.*/

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
	if (team.length >= 7) {
		return true
	} else {
    return false
	}
}
console.log(hasEnoughPlayers(team));


/*- Your function hasEnoughPlayers() should accept one parameter
- Verify that hasEnoughPlayers() is returning the correct value.
*/