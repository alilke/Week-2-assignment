console.log('js');
let firstName = 'Angela ';
// 1 - Create a variable called `firstName` and assign it the value of your first name
let lastName = 'Lilke';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let fullName = firstName + lastName;
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
console.log( fullName );
// 4 - Console log the value of `fullName`
let age = 26;
// 5 - Create a variable called `age` and assign it the value of your age
let sentence = 'My name is, ' + fullName + ' and I am ' + age + ' years old.';
console.log( sentence );
// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I am (age) years old.'.
let adventurous = true;
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let food = 'pizza'
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let pets = 4;
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let friendsPets = 2;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
pets+=2;
// 11 - Add two pets to your `pets` variable
const allowedPets = 5;
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
if(adventurous){
  console.log( 'Adventures are great!' );
}
else{
    console.log( 'How about we stay home?' );
}
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if(age > 18 && adventurous){
  console.log('Hurray!');
}
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true,
// console log "Hurray!"

if(pets === allowedPets){
  console.log('I have enough pets');
}
else if(pets < allowedPets){
  console.log('I can have more pets!');
}
else{
  console.log('Oh no, I have too many pets!');
}
// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if(pets > friendsPets){
  assign
}
else if(pets < allowedPets){
  console.log('I can have more pets!');
}
else{
  console.log('Oh no, I have too many pets!');
}
// 16 - Write a conditional that assigns the value of the `pets` variable
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.
