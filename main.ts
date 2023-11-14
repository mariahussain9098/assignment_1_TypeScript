console.log("Batch : 51 Assignment # 1");
console.log("Name : Maria");
console.log("Roll No : PIAIC173543");

// 1. Install Node.js, TypeScript and VS Code on your computer.

console.log("Q : 1")
console.log("Successfully Installed Node.js, TypeScript and VS Code on my computer.");

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

console.log("Q : 2")
let maria = "Hello Maria, would you like to learn some Python today?";
console.log(maria);

//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log("Q : 3")
let myName = "maria";
console.log("LowerCase :" + myName.toLowerCase());
console.log("LowerCase :" + myName.toUpperCase());
// console.log("LowerCase :" + myName.toUpperCase);

// 4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.

console.log("Q : 4");
console.log('Rumi once said, "The wound is the place where the light enters you."');

//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

console.log("Q : 5");
let famous_person = "Maulana Rumi";
let message = "The wound is the place where the light enters you.";
console.log(message);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("Q : 6");
console.log("With White Spaces:");
let personName = "\n \t Maria \t \n";
console.log(personName);

console.log("Without White Spaces:");
personName = "Maria";
console.log(personName);

//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//8. You should create four lines that look like this:
// console.log(5 + 3)

// name : maria, date : 10-11-2023,  This program performs arithmetic operations and returns 8 as an output for each operation.    <--- (Answer of Question 10)
console.log("Q : 7 & 8");
console.log("Addition --> : ", 4 + 4);
console.log("Subtraction --> : ", 12 - 4);
console.log("Multiplication --> : ", 4 * 2);
console.log("Division --> : ", 16 / 2);

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// name : maria, date : 10-11-2023,  This program just simply prints the favourite number of user                              <--- (Answer of Question 10)
console.log("Q : 9");
let favNumber = 2;
message = "My favourite number is : " + favNumber;
console.log(message);

//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("Q : 10");
console.log("The answer of question 10 is available in the comments section of Questions 8 and 9.")


//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

console.log("Q : 11");
let friendsName = ["Saba", "Aliza", "Asma"];
console.log("Array for names of friends :");
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);

//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log("Q : 12");
console.log("Message for each friend :");
console.log("Hello, How are you, ", friendsName[0]);
console.log("Hello, How are you, ", friendsName[1]);
console.log("Hello, How are you, ", friendsName[2]);

//13.  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

console.log("Q : 13");
let cars = ["Toyota Camry", "Toyota Corolla", "Honda Accord", "BMW 3 Series"];
for (const car of cars) {
  console.log(`I would like to own a ${car}.`);
}

//14.  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

console.log("Q : 14");
let guestList = ["Saba", "Aliza", "Yasmeen"];
console.log(`Dear ${guestList[0]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);
console.log(`Dear ${guestList[1]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);
console.log(`Dear ${guestList[2]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);


//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

console.log("Q : 15");
guestList[2] = "Sadia";
console.log(`Dear ${guestList[0]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);
console.log(`Dear ${guestList[1]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);
console.log(`Dear ${guestList[2]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);


//16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("Q : 16");
console.log("Great news! I found a bigger dinner table.");

// • Add one new guest to the beginning of your array.
guestList.unshift("Asia");

// •Add one new guest to the middle of your array. 
guestList[2] = "Fiza";

// • Use append() to add one new guest to the end of your list.
guestList.push("Hania");

// • Print a new set of invitation messages, one for each person in your list.
console.log(`Dear ${guestList[0]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);
console.log(`Dear ${guestList[2]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);
console.log(`Dear ${guestList[4]}: \t You are cordially invited to join me for dinner. Your presence would be an honor for me.`);

//17.  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("Q : 17");
console.log("Attention guests! Unfortunately, the new dinner table won't arrive in time, and we can only accommodate two guests.");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

let removeGeusts = guestList.pop();
// console.log(removeGeusts);

console.log(`Dear ${removeGeusts} I am sorry, we can't invite you for dinner due to some unexpected  issue`);

removeGeusts = guestList.pop();
console.log(`Dear ${removeGeusts} I am sorry, we can't invite you for dinner due to some unexpected  issue`);

removeGeusts = guestList.pop();
console.log(`Dear ${removeGeusts} I am sorry, we can't invite you for dinner due to some unexpected  issue`);

// console.log(guestList.length);

// Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log(`Dear ${guestList[0]}, you are still invited for dinner`);
console.log(`Dear ${guestList[1]}, you are still invited for dinner`);

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestList = [];
console.log(guestList);


//18.  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Q : 18");

let placesToVisit = ["Mecca", "Medina", "Al-AqsaMosque", "Istanbul", "Granada"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);


//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("Q : 19");
console.log("Number of people that were invited for dinner is seven");

//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

console.log("Q : 20");
let cities = ["Karachi", "Lahore", "Quetta", "Peshawar", "Islamabad"];

for (const city of cities) {
  console.log(`my favourite city is : ${city}.`);
}

//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items

console.log("Q : 21");

let cities_obj: { name: string, population: number, country: string }[] = [
  { name: "Karachi", population: 14910352, country: "Pakistan" },
  { name: "Lahore", population: 12188196, country: "Pakistan" },
  { name: "Quetta", population: 1080510, country: "Pakistan" },
  { name: "Peshawar", population: 1970042, country: "Pakistan" },
  { name: "Islamabad", population: 1095064, country: "Pakistan" }
];

// Print information about each city
for (const city of cities_obj) {
  console.log(`City: ${city.name}, Population: ${city.population}, Country: ${city.country}`);
}

//22.  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

console.log("Q : 22");
console.log(cities[10]); 
console.log("No error here now! Corrected the index error.");


//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log("Q : 23");

let car: string = 'subaru';
let yourAge: number = 25;
let temperature: number = 20;

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 2
console.log("Is age > 18? I predict True.");
console.log(yourAge > 18);

// Test 3
console.log("Is temperature <= 30? I predict True.");
console.log(temperature <= 30);

// Test 4
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

// Test 5
console.log("Is age < 21? I predict True.");
console.log(yourAge < 21);

// Test 6
console.log("Is temperature >= 25? I predict False.");
console.log(temperature >= 25);

// Test 7
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'honda');

// Test 8
console.log("Is age >= 30? I predict False.");
console.log(yourAge >= 30);

// Test 9
console.log("Is temperature < 15? I predict False.");
console.log(temperature < 15);

// Test 10
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');


//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

console.log("Q : 25");

let string1: string = 'hello';
let string2: string = 'world';
let number1: number = 42;
let number2: number = 20;
let array: string[] = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 === 'hello');

console.log("Is string1 not equal to 'world'? I predict True.");
console.log(string1 !== 'world');

// Tests using the lowercase function
console.log("Is string1 in lowercase equal to 'HELLO' in uppercase? I predict True.");
console.log(string1.toLowerCase() === 'hello'.toUpperCase());

// Numerical tests
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is number1 greater than 30 and number2 less than 25? I predict True.");
console.log(number1 > 30 && number2 < 25);

console.log("Is number1 greater than 30 or number2 less than 15? I predict True.");
console.log(number1 > 30 || number2 < 15);

// Test whether an item is in an array
console.log("Is 'banana' in the array? I predict True.");
console.log(array.indexOf('banana') !== -1);


// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(array.indexOf('grape') !== -1);



//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

console.log("Q : 25");
let alien_color = "green";

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if (alien_color === 'green') {
  console.log("The player just earned 5 points.");
}

// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// failed versions
alien_color === 'red';


//26.  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

console.log("Q : 26");
alien_color === 'yellow';
if (alien_color === 'yellow') {
  console.log("The player just earned 5 points for shooting the alien");
} else {
  console.log("The player just earned 10 points.");
}

//27.  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

console.log("Q : 27");
alien_color === 'red';

if (alien_color === 'green') {
  console.log("The player just earned 5 points.");
} else if (alien_color === 'yellow') {
  console.log("The player just earned 10 points.");
} else if (alien_color === 'red') {
  console.log("The player just earned 15 points.");
}

//28.  Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log("Q : 28");
// If the person is less than 2 years old, print a message that the person is a baby.
let age = 14;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age == 2 || age < 4) {
  console.log("The person is a toddler.");
} else if (age == 4 || age < 13) {
  console.log("The person is a kid.");
} else if (age == 13 || age < 20) {
  console.log("The person is a teenager.");
} else if (age == 20 || age < 65) {
  console.log("The person is a adult.");
} else if (age >= 65) {
  console.log("The person is a elder.");
}

//29.  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
console.log("Q : 29");
const favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.indexOf('banana') !== -1) {
  console.log('You really like bananas!');
}
if (favorite_fruits.indexOf('apple') !== -1) {
  console.log('You really like apples!');
}
if (favorite_fruits.indexOf('strawberry') !== -1) {
  console.log('You really like strawberries!');
}
if (favorite_fruits.indexOf('orange') !== -1) {
  console.log('Orange is not your favorite fruit!');
}
if (favorite_fruits.indexOf('kiwi') !== -1) {
  console.log('Kiwi is not your favorite fruit!');
}


//30.  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log("Q : 30");
let usernames: string[] = ['admin', 'ali', 'asad', 'ahmed', 'saad'];
for (let username of usernames) {
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

console.log("Q : 31");
usernames = [];
if(usernames.length === 0){
  console.log('We need to find some users!');
}


//32.  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

console.log("Q : 32");
// List of current usernames
const current_users: string[] = ['farah', 'nida', 'dania', 'sara', 'maryam'];

// List of new usernames
const new_users: string[] = ['sara', 'nida', 'mahnoor', 'fatima', 'ayesha'];

// Loop through new_users to check if each username is already used
for (const newUser of new_users) {
    // Check if the username is already used (case-insensitive)
    const isUsernameUsed = current_users.some(username => username.toLowerCase() === newUser.toLowerCase());

    if (isUsernameUsed) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Great! The username '${newUser}' is available.`);
    }
}

//33.  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

console.log("Q : 33");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    let ordinalEnding;

    if (number === 1) {
        ordinalEnding = 'st';
    } else if (number === 2) {
        ordinalEnding = 'nd';
    } else if (number === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }
    console.log(`${number}${ordinalEnding}`);
}


//34.  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("Q : 34");
let pizzas = ['Margherita', 'Pepperoni','BBQ Chicken'];

for (const pizzaName of pizzas) {
  console.log(pizzaName);
}

for (const pizzaName of pizzas) {
  console.log(`I like ${pizzaName} pizza`);
}
console.log("How much you like pizza?");
console.log( "I love Margherita pizza! It\'s a classic");
console.log("Pepperoni is always a great choice!");
console.log("Vegetarian pizza is my absolute favorite.");
console.log(" I really love pizza");

//35.  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

console.log("Q : 35");
let animals = ["elephant", "dolphin", "kangaroo"];

for (let animal of animals){
    console.log(animal);
}

for (let animal of animals){
  if(animal === "elephant"){
    console.log("Elephants are large mammals known for their long trunks, large ears, and tusks.");
  }else if(animal === "dolphin"){
    console.log("Dolphins are highly intelligent marine mammals known for their playful behavior.");
  }else if(animal === "kangaroo"){
    console.log("Kangaroos are marsupials, a type of mammal that carries and nurses their young in a pouch.");
  }
}
console.log("These animals are mammals.");

//36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("Q : 36");

function make_shirt(size, message) {
  console.log(`Shirt size: ${size}, Message: "${message}"`);
}
make_shirt('Large', `Today's Code, Tomorrow's Innovation`);


//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("Q : 37");

function makeShirt(size = 'Large', message = 'I love TypeScript') {
  console.log(`Shirt size: ${size}, Message: "${message}"`);
}
makeShirt(); 
makeShirt('Medium'); 
makeShirt('Small', 'Hello World!'); 


//38.  Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

console.log("Q : 38");
function describe_city(city , country = 'Pakistan'){
  console.log(`city : ${city}, Country; ${country}`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Jakarta");

//39.  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
console.log("Q : 39");
function city_country(city , country){
  console.log(`"${city} , ${country}"`);
}
city_country("Lahore", "Pakistan");
city_country("Jakarta", "Indonesia");
city_country("Dhaka", "Bangladesh");


//40.  Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

console.log("Q : 40");

type Album = {
    artist: string;
    title: string;
    tracks?: number; 
};

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album('Pakistan Army Tribute Band', 'Guardians of the Green', 6));
console.log(make_album('National Defense Melodies', 'Silent Heroes Symphony'));
console.log(make_album('Army Harmony Project', 'Defenders Anthem', 5));

//41.  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

console.log("Q : 41");

let magicians: string[]= ['Mystique Mirage', 'Merlin Moonlight', 'Celestia Enigma'];

function show_magicians(magicianNames: string[]): void{
  for (let magician of magicianNames) {
    console.log(magician);
}
}
show_magicians(magicians);

//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

console.log("Q : 42");

function make_great(magicianNames: string[]): void {
  for (let i = 0; i < magicianNames.length; i++) {
      magicianNames[i] = 'the Great '+ magicianNames[i];
  }
}

make_great(magicians);

show_magicians(magicians);

//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

console.log("Q : 43");

let originalMagicians: string[] = ['Mystique Mirage', 'Merlin Moonlight', 'Celestia Enigma'];

let greatMagicians: string[] = [...originalMagicians]; // Creating a copy

make_great(greatMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("Great Magicians:");
show_magicians(greatMagicians);



//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

console.log("Q : 44");
function orderSandwich(...items: string[]): void {
  console.log("Sandwich Ordered:");
  if (items.length === 0) {
      console.log("You ordered an empty sandwich. Are you sure?");
  } else {
      console.log("Ingredients: " + items.join(', '));
  }
  console.log("------------------------");
}

// Call the function three times with different numbers of arguments
orderSandwich('Ham', 'Cheese', 'Lettuce');
orderSandwich('Turkey', 'Tomato');
orderSandwich(); // Empty sandwich

//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

console.log("Q : 45");

function createCar(manufacturer: string, modelName: string, options: { [key: string]: any }): { [key: string]: any } {
  return {
      manufacturer,
      modelName,
      ...options
  };
}

console.log(createCar('Toyota', 'Camry', { color: 'Blue', year: 2022 }));
