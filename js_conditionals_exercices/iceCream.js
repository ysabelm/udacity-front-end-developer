var flavor = "chocolate";
var vessel = "bowl";
var toppings = "peanuts";

if (
	(flavor === "vanilla" || flavor === "chocolate") &&
    (toppings === "sprinkles" || toppings === "peanuts") &&
    (vessel === "cone" || vessel === "bowl")
)  {
	console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}
