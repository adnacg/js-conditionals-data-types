// ========================== Exercise 1 ==============================
// Prompt the user for 2 numbers, then console.log their difference.
// For example, if the user gives the numbers 2 and 3, the result should
// be 1. If the user gives the numbers 3 and 2, the result should still
// be 1.

// Hint: To get the user input and store it in a variable, we can do
// `var someVar = prompt("Give me a high five");`. Consider asking for 1
// number at a time first.
// ====================================================================
// Write your solution below.
// ====================================================================

// var firstNumber = parseInt(prompt("Enter a number"));
// var secondNumber = parseInt(prompt("Enter another number"));

// function differenceInTwoNumbers(firstNumber, secondNumber) {
//     return Math.abs(firstNumber - secondNumber);
// }

// var difference = differenceInTwoNumbers(firstNumber, secondNumber)

// console.log(difference);

// ========================== Exercise 2 ==============================
// Prompt the user for a number, then console.log its ordinal version.
// For example, if the user inputs 1, the result should be '1st'.
// If the user inputs 10, the result should be '10th'.
// If the user inputs 421, the result should be '421st'.

// Hint: There is a function that can return the character at a
// specified position in a string. Search Google / MDN for 'javascript
// string methods' if you need to.
// ====================================================================
// Write your solution below
// ====================================================================

// var userInput = prompt("Enter a number");

// function ordinalSuffix(userInput) {
//     var modulus1 = userInput % 10,
//         modulus2 = userInput % 100;
//     if (modulus1 == 1 && modulus2 != 11) {
//         return userInput + "st";
//         // return and exit, and the code below will not be executed
//         // goes to next line if not conditions not met
//     }
//     if (modulus1 == 2 && modulus2 != 12) {
//         return userInput + "nd";
//     }
//     if (modulus1 == 3 && modulus2 != 11) {
//         return userInput + "rd";
//     }
//     return userInput + "th";
//     // return this only if the codes above will not be executed
// }

// console.log(ordinalSuffix(userInput));


// Option 2:
// var userInput = prompt("Enter a number");

// function ordinalSuffix(userInput) {
//     var suffix = "th";
//     var modulus1 = userInput % 10,
//         modulus2 = userInput % 100;
//     if (modulus1 == 1 && modulus2 != 11) {
//         suffix = "st";
//     }
//     if (modulus1 == 2 && modulus2 != 12) {
//         suffix = "nd";
//     }
//     if (modulus1 == 3 && modulus2 != 11) {
//         suffix = "rd";
//     }
//     // go through above if's, if none met, return userInput while suffix remains the same
//     return userInput + suffix;
// }

// console.log(ordinalSuffix(userInput));

// ========================== Exercise 3 =================================
// Generate a random integer (hint: search Google or MDN) between 1 to 10.
// Prompt the user for an integer between 1 to 10, then let the user know
// whether his/her number matched the randomly generated one.
// =======================================================================
// Write your solution below.
// =======================================================================


// var randomNumber = Math.floor(Math.random()*10) + 1;

// var enteredNumber = prompt("Enter a whole number between 1 to 10");

// if (randomNumber == enteredNumber) {
//     console.log("Your number " + enteredNumber + " matched the random number" + randomNumber);
// } else {
//     console.log("Your number did not match with the random number of " + randomNumber);
// }

// ========================== Exercise 4 ===============================
// Generate a random string of length 6 alphanumeric characters.
// E.g. a result might be "a5bxt1". Running it again might give "2bhdr3"
// Hint: Pseudocode this first, possibly starting from the end result.
// What information do you need to construct the string? How would you
// get that information? Can you store fixed information in a convenient
// place first?
//
// Bonus: Generate a random alphanumeric string of any specified length.
// =====================================================================
// Write your solution below.
// =====================================================================

// function randomStringGenerator() {
//   var string = "";
//   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 6; i++)
//     string += characters.charAt(Math.floor(Math.random() * characters.length));

//   return string;
// }

// console.log(randomStringGenerator());

// ========================== Exercise 5 ==============================
// Shuffle the elements of the given array below.
// E.g. running your code might produce [4, 1, 16, 8, 128, 2, 32, 64]
// once, and [128, 1, 2, 64, 16, 4, 8, 32] the next time.
// ====================================================================
// Write your solution below.
// ====================================================================

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// var testArray = [1, 2, 4, 8, 16, 32, 64, 128];
// testArray = shuffle(testArray);
// console.log(testArray);

// ========================== Exercise 6 ==============================
// Examine the phonebook below.

// 1. Prompt the user for a name, and show
// (in any way, e.g. console.log) the phone number corresponding to
// the given name.

// 2. Prompt the user for a name and a number. Update the number
// corresponding to the name if the name exists in the phonebook.

// 3. Prompt the user for a name and a number. If the name and number
// do not already exist in the phonebook, insert it into the phonebook.

// 4. Prompt the user for a name. If the name exists in the phonebook,
// erase its record.

// Bonus: Prompt the user for a number. If the number exists in the
// phonebook, show the name corresponding to it.
// Hint: The phonebook is a JS Object. Search Google / MDN for
// 'Javascript Object methods' to see if there might be something useful.
// ====================================================================
// Write your solution 1 below.
// ====================================================================

// 1. Prompt the user for a name, and show
// (in any way, e.g. console.log) the phone number corresponding to
// the given name.

// var Phonebook = {
//     "Jason"         :   91216599,
//     "Amelie"        :   64239839,
//     "Sing An"       :   85404834,
//     "Ong Tng Kai"   :   94547788,
//     "Nelson Tan"    :   63396565
// };

// var inputName = prompt("Enter a name");

// var phonebookName = Object.keys(Phonebook);

// // console.log(phonebookName); // ["Jason", "Amelie", "Sing An", "Ong Tng Kai", "Nelson Tan"]

// for (var i = 0; i < phonebookName.length; i++) {
//   if (inputName == phonebookName[i]) {
//     console.log("The phone number for " + phonebookName[i] + " is: " + Phonebook[inputName])
//   }
// }

// ====================================================================
// Write your solution 2 below.
// ====================================================================

// 2. Prompt the user for a name and a number. Update the number
// corresponding to the name if the name exists in the phonebook.

// 3. Prompt the user for a name and a number. If the name and number
// do not already exist in the phonebook, insert it into the phonebook.

// var Phonebook = {
//     "Jason"         :   91216599,
//     "Amelie"        :   64239839,
//     "Sing An"       :   85404834,
//     "Ong Tng Kai"   :   94547788,
//     "Nelson Tan"    :   63396565
// };

// var updatePhonebookName = prompt("Enter a name");

// var updatePhonebookNumber = parseInt(prompt("Enter a number"));

// var phonebookKeys = Object.keys(Phonebook);

// var elementExist = false;

// for (var i = 0; i < phonebookKeys.length; i++) {
//   if (updatePhonebookName == phonebookKeys[i]) {
//     elementExist = true;
//     Phonebook[updatePhonebookName] = updatePhonebookNumber;
//     console.log("The number has been updated!");
//     break; // assuming that a name is unique in Phonebook
//   }
// }

// if (!elementExist) {
//     Phonebook[updatePhonebookName] = updatePhonebookNumber;
//     console.log("The number has been added!");
// }

// console.log(Phonebook);

// Solution 2:
// var updatePhonebookName = prompt("Enter a name");

// var updatePhonebookNumber = parseInt(prompt("Enter a number"));

// var phonebookKeys = Object.keys(Phonebook);

// var elementExist = false;

// var index = phonebookKeys.indexOf(updatePhonebookName);
// // if exist, this will return the index of the element
// // if doesnt exist, this will return -1

// if (index > -1) {
//     elementExist = true;
//     Phonebook[updatePhonebookName] = updatePhonebookNumber;
//     console.log("The number has been updated!");
// } else {
//     Phonebook[updatePhonebookName] = updatePhonebookNumber;
//     console.log("The number has been added!");
// }

// console.log(Phonebook);

// ====================================================================
// Write your solution 4 below.
// ====================================================================

// 4. Prompt the user for a name. If the name exists in the phonebook,
// erase its record.

// var Phonebook = {
//     "Jason"         :   91216599,
//     "Amelie"        :   64239839,
//     "Sing An"       :   85404834,
//     "Ong Tng Kai"   :   94547788,
//     "Nelson Tan"    :   63396565
// };

// var deletePhonebookName = prompt("Enter a name");

// var phonebookKeys = Object.keys(Phonebook);

// var index = phonebookKeys.indexOf(deletePhonebookName);

// if (index > -1) {
//     delete Phonebook[deletePhonebookName];
//     console.log(deletePhonebookName + "'s number has been deleted!");
// }

// // Alternate way:
// // for (var i = 0; i < phonebookKeys.length; i++) {
// //   if (deletePhonebookName == phonebookKeys[i]) {
// //     delete Phonebook[deletePhonebookName];
// //     console.log(deletePhonebookName + "'s number has been deleted!");
// //   }
// // }

// console.log(Phonebook);

// ====================== Bonus Exercise 7 =============================
// JS Array / Object Handling - References vs Values
// =====================================================================
// A common class of bugs that programmers face occurs when they change
// an object that they didn't mean to.

// Examine the array below.
// Prompt the user for 2 integers. Swap the elements in the 2 positions
// of the array corresponding to the user input, and display the result.
// E.g. if the user enters 3 and 1, then display [3, 2, 1, 4, 5].

// Bonus: Do the same, but without changing the below array, i.e. if the
// user enters 3 and 1, display [3, 2, 1, 4, 5], but
// console.log(MutateMeNot) should still produce [1, 2, 3, 4, 5].
// =====================================================================
// Write your solution below.
// =====================================================================

// var MutateMeNot = [1, 2, 3, 4, 5];
// var MutateMeNot2 = [1, 2, 3, 4, 5];

// var firstSwap = parseInt(prompt("Enter an integer between 1 and 5"));
// var secondSwap = parseInt(prompt("Enter another integer between 1 and 5"));

// if (firstSwap >=1 && firstSwap <=5 && secondSwap >=1 && secondSwap <=5) {
//     var indexOne = MutateMeNot.indexOf(firstSwap);
//     var indexTwo = MutateMeNot.indexOf(secondSwap);

//     // var buffer = MutateMeNot[indexOne]

//     MutateMeNot2[indexOne] = MutateMeNot2[indexTwo];
//     MutateMeNot2[indexTwo] = MutateMeNot[indexOne];

//     alert(MutateMeNot2);
//     console.log("The value of MutateMeNot is ", MutateMeNot);

// } else {

//     alert("Hey wrong number!");

// }
