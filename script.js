/*EASY: Write a function that would allow you to do this:

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"
*/

//ar run = exercise("running");

//console.log(exercise(`Today's exercise: ${run}`))


//var swim = exercise("swimming")

let run = function(message, exercise){
    return `${message}: ${exercise}`
 }
 
 console.log(run("Today's exercise", "running"))


 let swim = function(message, waterSport){
     return `${message}: ${waterSport}`
 }

 console.log(swim("Today's exercise", "swimming"));
 