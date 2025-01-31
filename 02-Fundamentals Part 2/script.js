'use strict'
//If we active the strict  mode, then, in the console you can see unexcepted errors that you cannot see.
let isAdded = false;
const pass = true;
if(pass)isAdded = true;
if(isAdded)console.log("It's added");
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions

function logger() {
    console.log('Logger!');
}
logger();
function numberLogger(num1, num2){
    console.log(num1+num2*num2+num1);
}
numberLogger(5,6);
function sum_minus_multi_divide(number1,number2,number3,number4,number5){
    return (number1+number2-number3*number4/number5);
}
let x = sum_minus_multi_divide(6,0,4,2,8);
console.log(`Number is ${x}`);
const fullName = function(fName, sName){
    console.log(`${fName} ${sName}`);
}
fullName("Sithila Sihan", "Somaratne")
/*Arrow Functions*/
const theName = (fName, sName) => {
    return `${fName} ${sName}`;
}
let Name = theName("Sithila Sihan", "Somaratne");
console.log("My full name is "+Name);
const isPrime = (number) =>{
    if(number > 0 && number > 1){
        if(number % 2 == 0 && number != 2){
            console.log("Number is not prime");
        }else{
            console.log("Number is  prime")
        }
    }
}
isPrime(2);
////////////////////////////////////////////////////////////////////////////////////
//Arrays
const friend1 = `Armenia`;
const friend2 = `Azerbaijian`;
const friend3 = `Georgia`;
let friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends.length);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
let friend = new Array(`Danapala`, `Gunapala`, `Somapala`, `Siripala`, `Amara`, ``);
console.log(friend);
friend[4] = `Amarapala`;
console.log(friend);
let setName = document.getElementById('setName');
let newName = document.getElementById('name').value;
friend[5] = newName;
console.log(friend);
//Add Element
friend.push("Weerapala");
//Remove Element
friend.unshift("Dunapala");
console.log(friend);
friend.pop();
console.log(friend);
friend.shift();
console.log(friend);
console.log("Contains Dunapala : "+friend.includes('Dunapala'));
console.log("Contains Danapala : "+friend.includes('Danapala'));
///////////////////////////////////////////////////////////////////////////////////
// Looping Array
for (let i = 0; i < friend.length; i++) {
    console.log("For Loop : "+friend[i]);
}
let j = 0;
while(j!=friend.length){
    console.log("While Loop: "+friend[j]);
    j++;
}
let k = -1;
do {
    console.log("Do-While Loop: "+friend[k]);
    k++;
} while (k!=friend.length);
///////////////////////////////////////////////////////////////////////////////////
//Sorting Arrays
let ar = [52,74,36,58,96,32,56,41];
console.log(ar);

function sortAr(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i]>array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
           } 
        } 
    }
    return array;
}
console.log(sortAr(ar));
////////////////////////////////////////////////////////////////////////////////
// Introdution to objects

const kamal = [
    'Vimal',
    'Sanjeewa',
    '23',
    'student'
];
console.log(kamal)
console.log(kamal[0]+" "+kamal[1]+" is "+kamal[2]+" and he is a "+kamal[3]);
const nimal = {
    firstName : 'Nimal',
    lastName : 'Sangeetha',
    age : 23,
    occupation : 'student' 
};
console.log(nimal)
console.log(nimal.firstName+" "+nimal.lastName+" is "+nimal.age+ " and he is a "+nimal.occupation);
///////////////////////////////////////////////////////////////////////////////
// Dot and Bracket Notation
const bimal = {
    firstName : 'Bimal',
    lastName : 'Shan',
    age : 22,
    occupation : 'student' 
};
console.log(bimal.firstName); //Dot Notation. //Bimal

console.log(bimal['lastName']); //Bracket notation. //Shan
let keys = ['firstName','lastName','age','occupation'];
keys.forEach(element => {
    console.log(`${element} : ${bimal[element]}`);
});
console.log(keys);
//////////////////////////////////////////////////////////////////////////////
//Obhects Methods

const vimal = {
    firstName : 'Vimal',
    lastName : 'Sanjeewa',
    age : 23,
    occupation : 'student',
    fullName : function(){
        return this.firstName+" "+this.lastName;
    },
    canGetDrivingLisance : function(){
        if(this.age > 18){
            return `Yes, ${this.fullName()} is ${this.age} years old. So he can get the driving lisance.`;
        }else{
            return `No, ${this.fullName()} is ${this.age} years old. So he cannot get the driving lisance.`;
        }
    }
}


console.log(vimal.fullName());
console.log(vimal.canGetDrivingLisance());

vimal.age = 12;
console.log(vimal.canGetDrivingLisance());
console.log(vimal);

///////////////////////////////////////////////////////////////////////////////////
//ES6 Classes

class person{
    constructor(firstName,lastName,age,occupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
}
person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

let kasun = new person('Kasun','Saliya',26,'Driver');
console.log(`Hi, I'm ${kasun.fullName()}`);

class People{
    constructor(firstName,lastName,age,occupation,getFriends){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.getFriends = function(){
            for (let index = 0; index < Friend.length; index++) {
                if(Friend.length == 0){
                   return `${anura.firstName}'s friend is ${friend[index]}.`;
                }else{
                    if(index == Friend.length-2){
                        return `${anura.firstName}'s friend are ${Friend[index].firstName} and ${Friend[index+1].firstName}.`
                    }else if(index == Friend.length-1){
                        return `${anura.firstName}'s friend are ${Friend[index].firstName}, ${Friend[index+1].firstName} and ${Friend[index+2].firstName}.`
                    }else{
                        return `${anura.firstName}'s friend are ${Friend[index].firstName}, ${Friend[index+1].firstName}, ${Friend[index+2].firstName} and ${Friend[index+3].firstName}.`
            
                    }
                }
            }
        };
    }
}
let Friend = new Array();

let anura = new People('Anura','Anjana',27,'Doctor');
Friend.push(new People('Praveen','Senaratne',24,'Cricketer'));
Friend.push(new People('Lakmal','Jayasuriya',26,'Bus Driver'));
Friend.push(new People('Sunil','Gaulagala',29,'Mechanic'));
Friend.push(new People('Kumara','Mendis',25,'Software Enginner'));
console.log(anura.getFriends());