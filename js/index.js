/* 
JAVASCRIPT VARIABLES
Complete the required JavaScript code underneath each "EXERCISE". In the end, you will have 5 statements logged to the console using: console.log()
*/

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."
let job_title='Swing Manager'; 
let geographic="Canada";
let location1="Etobicoke";
let annual_salary=80000;
let company_name="McDonald's";

console.log(`You will be a ${job_title} in ${location1}, making $${annual_salary} for ${company_name}`)

let exer1 = document.getElementById(`ex1`);
exer1.innerText = `You will be a ${job_title} in ${location1}, making $${annual_salary} for ${company_name}`;

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
let cur_year=2020;
let birth_year=1993;
let your_age;
your_age=cur_year - birth_year;
console.log(`They are ${your_age} years old.`)

let exer2 = document.getElementById(`ex2`);
exer2.innerText = `They are ${your_age} years old.`;

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
let cur_age = 27;
let max_age= 80;
let amt_per_day= 10;

let lifetime_supply_val= 365*( max_age-cur_age ) * amt_per_day;

console.log(`You will need ${lifetime_supply_val} to last you until the ripe old age of ${max_age-cur_age}`)

let exer3 = document.getElementById(`ex3`);
exer3.innerText = `You will need ${lifetime_supply_val} to last you until the ripe old age of ${max_age-cur_age}`;

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let rad= 10;
// Formula: 2*3.14*radius
let circum = 2*3.14*rad;
// Formula: 3.14*radius*radius
let area = 3.14*(rad**2);

console.log(`The circumference is ${circum}`);
console.log(`The area is ${area}`);

let exer4 = document.getElementById(`ex4`);
exer4.innerText = `The circumference is ${circum} and The area is ${area}`;

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let cel_temp = 32;
// Formula: (0°C × 9/5) + 32 = 32°F

let fahren_temp= ((cel_temp*9)/5) + 32;
//console.log("Celsius to Fahrenheit");
console.log(`${cel_temp}°C is ${fahren_temp}°F`);

fahren_temp = 89.6;
// Formula: (32°F − 32) × 5/9 = 0°C

cel_temp= ((fahren_temp-32)*5)/9;

//console.log("Fahrenheit to Celsius");
console.log(`${fahren_temp}°F is ${cel_temp}°C`);

let exer5 = document.getElementById(`ex5`);
exer5.innerText = `${cel_temp}°C is ${fahren_temp}°F and ${fahren_temp}°F is ${cel_temp}°C`;


/* <ol>
        <li id="ex1">You will be a ${job_title} in ${location1}, making $${annual_salary} for ${company_name}</li>
        <li id="ex2">They are ${your_age} years old.</li>
        <li id="ex3">You will need ${lifetime_supply_val} to last you until the ripe old age of ${max_age-cur_age}</li>
        <li id="ex4">The circumference is ${circum}and The area is ${area}</li>
        <li id="ex5">${cel_temp}°C is ${fahren_temp}°F and ${fahren_temp}°F is ${cel_temp}°C </li>
    </ol> */