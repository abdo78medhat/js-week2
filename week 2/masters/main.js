// first exercise
let remember = "Abdelrahman";
console.log(remember);
let remember2 = 40 + 40;
console.log(remember2);
let remember3 = document.querySelector('#board');
console.log(remember3);

// mutable & immutable data exercise
let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4);
console.log(numbers1);

let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
console.log(numbers2);

// objects exercise
const anjana ={
    name: "Abdelrahman" , 
    home: "Mansoura",
    languages: ["English", "Arabic"] ,
    pet: null ,
    hobbies: ["travel" , "chess" , "gaming" , "football"]
};    

// object methods exercise
const spices = [
    {name:"Emma", nickname:"Baby"},
    {name:"Geri", nickname:"Ginger"},
    {name:"Mel B", nickname:"Scary"},
    {name:"Mel C", nickname:"Sporty"},
    {name:"Victoria", nickname:"Posh"}
]
const spiceGirls = {
    albums: ["Spice" , "spiceworld" ,"Forever"] ,
    motto: "Girl power",
    members: spices
};

console.log(spiceGirls.motto);
console.log(spiceGirls.members[1]);
console.log(spiceGirls.albums[1]);
console.log(spiceGirls.members[4].name);

// tic tac toe demo
const players = [
    {name : "Abdelrahman", symbol: "X"},
    {name: "Mohammed" , symbol:"O"}
];
document.querySelector('#p1-name').textContent = players[0].name;
document.querySelector('#p2-name').textContent = players[1].name;
const squares = document.getElementsByClassName('square');
squares[1].textContent = players[0].symbol;
squares[0].textContent = players[1].symbol;
squares[3].textContent = players[0].symbol;
squares[2].textContent = players[1].symbol;
squares[4].textContent = players[0].symbol;
squares[8].textContent = players[1].symbol;
squares[7].textContent = players[0].symbol;
