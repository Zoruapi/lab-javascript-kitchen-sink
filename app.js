var i = 0;
/* My name */
var myName = "Alejandra";

/* Number of states of the US */
const numberOfStates = 50;

/* Result of adding 5 + 4 */
var sum = 5 + 4;

/* List of my favorite vegetables */
var myFavoriteVegetables = ['carrot', 'potato', 'lettuce', 'olive', 'corn'];

/* Object with the information of my pet */
var pet = {
    name: 'Pearl',
    breed: 'Chihuahua'
};

/* List of people with their names and age */
var people = [
    {
        name: 'Matt',
        age: 35
    },
    {
        name: 'Gabi',
        age: 18
    },
    {
        name: 'Pedro',
        age: 31
    },
    {
        name: 'Andrea',
        age: 24
    },
    {
        name: 'Bruno',
        age: 20
    }
]

/* Calling the function sayHello */
sayHello();

/* Calling the function checkAge to test it's functionality */
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

/* Displaying the content of the array*/
for (var i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
}

/* Display the content store on the object pet */
console.log(pet);

/* Checking the age of the people on the array */
for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

/* Getting the length of the string 'Hello World' */
var length = getLength('Hello World');

/* Checking if the length it's even or not */
if (length % 2) {
    console.log('The world is an odd place!');
} else {
    console.log('The world is nice and even!')
}

/* Function that says Hello World on the console */
function sayHello() {
    console.log("Hello World!");
}

/* Function that checks the age to know if it's old enough */
function checkAge(name, age) {
    if(age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    } 
}

/* Function that returns the length of a given word */
function getLength(word) {
    return word.length;
}