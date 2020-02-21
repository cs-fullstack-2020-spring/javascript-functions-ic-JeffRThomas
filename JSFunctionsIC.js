console.log("JS Linked!");//Sanity Check

// ### Exercise 1:
// - Ask the user to enter two numbers
// - Create a function that takes two numbers and retruns the sum
// - Print the sum of the numbers the user entered to the console using the function you created

//*Start of Code*
//Gather User Input
let userNum1 = parseInt(prompt("Enter a number: "));
let userNum2 = parseInt(prompt("Enter a second number: "));
//Fuction Declaration
function addUserNum(first1, second1) {
    return (first1 + second1);
}
let theSumOf = addUserNum(userNum1, userNum2);
console.log(`You entered ${userNum1} and ${userNum2} and their sum is equals ${theSumOf}`);
// *End of Code*

// ### Exercise 2:
// - Create a function that takes any array and prints each elememt in the array
// Example Output
// if you pass in an array with the value ["Autumn", "Kevin", "Kenn"]
// Autumn
// Kevin
// Kenn
// Create an Array
teacherArray = ["Autumn", "Kevin", "Kenn"];
// Create the function
function printTheArray(teacherArray) {
    for (i = 0; i < teacherArray.length; i++) {
        console.log(teacherArray[i]);
    }
}
printTheArray(teacherArray);

// ### Exercise 3:
// - Create a function that asks the user to enter a name until they enter q or Q
// - if they enter "Kevin" call a function that alerts "Cool Dude"
function getNames(newName) {
    while (newName != "Kevin") {
        let newName = prompt("Please enter a name.");
        if (newName == "Kevin") {
            alert("Cool Dude");
        }
    }
}
getNames();