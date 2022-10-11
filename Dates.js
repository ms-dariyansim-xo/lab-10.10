//Constructor for DATE object
let today = new Date();
console.log(today);
console.log(typeof(today));
console.log(typeof(today));

let christmas = new Date(2022, 11, 25);
console.log(christmas);

let valentine = new Date("02-14-2022");
console.log(valentine);

//Different date format
valentine = new Date("02/14/2022");
console.log(valentine);

//Target by month (methods)
let month = valentine.getMonth();
console.log(month);
console.log(typeof(month));

//Mindful of the outout for year as '122'.
let year = valentine.getYear();
console.log(year);
