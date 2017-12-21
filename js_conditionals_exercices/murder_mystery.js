/*
 * Programming Quiz: Murder Mystery (3-4)
 */
/*- If the murder happened in the ballroom, 
then the weapon should be the pool stick
- Verify that your conditional statements are producing the correct output (REMEMBER: Test your code with different values)*/
// change the value of `room` and `suspect` to test your code
var room = "billiards room";
var suspect = "Mrs. Sparr";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
} else {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    }
}
if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
