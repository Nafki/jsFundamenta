// loops
/*
loops allow us 

loops help us repeat a process with out writing alot of code.
*/

/*
Structure

we have to setup our loops in the way that we can
1. see where we are in a way that we can
2. consider what sort of condition we want to run it against
3. Note where we are done with that condition and move on to the next iteration

we need to:

1. CreatE an Index
2. Run a Condition
3. Change to the indexing variable(execution of condition)
*/

//? LETS COUNT TO 10

for(let i = 0; i <= 10; i++){ //i++ = i=1
    console.log(i);
}

/* 
we state our loop with a "for". Within this function, we are injection some parameters that
the JS will run against. Index;condition, change index-> result

with in parameters, we are stating our index declaration to 0. This is our baseline. We move on to asking that variable is less than or equal to the number
10, take that set number and add 1 to it. Once that is processed, return that value(in this case console.log of that number).
once our condition is met, we return false wich ends our loop.

...
this is important to note
for(<create an index variable>;<run condition>;<>
)
<return results
<continnue until the condition is met>
}
*/

//? if don't INDICATE WHAT OUR CONDITION IS, the loop will not have a finish line and
/*and thus run untill we have to force close it

// INFINIT LOOP!

/* 
for(let i =0; i++){
    console.log(i);
}
*/

// No conditon means the JS doesn't know when to stop and will never assume that information.

//challenge

/*for(let i = 2; i > -10; i-- 4){  //i++ = i=1
    console.log(4);
}
*/

/*for(let i= 2; i > -10; i -=4){
console.log(a);
}
*/

//we are not limited by postive and negative numbers. we can cycle through variables assigned with strings

let word = "supercalifragilisticexpialidocious"
for (let b = 0 < word.length; b++){
    console.log(b, word[b]);

//1. we set a value pf each index and are displaying that.
//2. we set to display the value with in the 'object' of word. each character that is assigned to the variable of ;word' is provided an index value
//and that is how we are cycling through it
console.log(`the letter ${word[b]} is in position:${b}`);
}

/*
FOR IN LOOPS
WITH FOR LOOPS WE ARE SEEKING THE INDEX value and runing against a condition. for in loops do not require an index number
*/

let city = {
    name: 'indianapolis',
    pop: 877000,
    speedway: true
}

for(info in city){   //info can be change to any thing
    console.log(info);
    //console.log(city.name);  //city.info looks for city={info:'value'}
    //console.log(city["name"]);
    console.log(city[info]);
}
/* for(bear in city){  // we name the first(info) when ever we want like bear
    console.log(bear);
}
*/

/* 
for(variable in object){
    run code
}
*/

let list = ['milk', 'egg', 'lunch meat', 'bread']
for(item in list){   // because this is array we put the list numbers
    //console.log(item);
    //console.log([0]) // we see milk(0) 4 times
    console.log(list[item]); //[] this will look what our key has in it like the item name
    console.log(list[2]);
}

//!challenge
/*let myName = 'dwiGht', {
myNamelist = [...dwiGht]
    console.log (myNamelist);
}
for(let i = 0; i <= myName.length; i++){
    console.log(list[0].toUpperCase);
    console.log(list[1].toLowerCase);
    console.log(list[2].toLowerCase);
    console.log(list[3].toLowerCase);
    console.log(list[4].toLowerCase);
    console.log(list[5].toLowerCase);
    }
*/

/*let myName = 'dwiGht';

for(let i = 0; i <= myName.length; i++){
    console.log(myName.split(''))
}

let myName = 'dwiGht';
for(let index === 0; index < myName.length; index++){
    console.log(myName[index]);
}

let myName = 'dwiGht';
//to get rid of undefine on out put we can use .length -1 
for(let index = 0; index <= myName.length - 1; index++){
    //console.log(myName[index]);
    //console.log('d'.toUpperCase());
    if(index= 0){
    console.log(myName[index].toUpperCase());
    } else {
    console.log(myName[index].toLowerCase());
    }
}
*/

let propCase;

//for(let index = 0;index <= myName.length; index++){
  //  console.log(myName.split(''))
//}


for(let index = 0; index < myName.length; index++){
    console.log(myName[index]);
}

/*
//to get rid of undefine on out put we can use .length -1 
for(let index = 0; index <= myName.length - 1; index++){
    //console.log(myName[index]);
    //console.log('d'.toUpperCase());

    if(index === 0){
        propCase += myName[index].toLowerCase());
} else {

    }
}    
    console.log(proCase);
*/

// FOR IN VERSION

let myName = 'dwIght';

let proCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() : propcase +=
    myName[index].toLowerCase();
}
console.log(propCase);

/*
FOR OF LOOP
Inorder to run a for loop, the 'thing' must me numbered ilke an array
*/

//error
//let myObject = {
   // string: 'Peter'   
    //boolean: true,
    //number:1
//};
//for (item of myObject){
 //   confirm.apply(item);
//

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}

/* 
for (variable of interable)
code goes here
}
an interable is  some thing that has numbers assigned to it like an array, 
where the first item is assigned a 0, the second a 1, and so on..eg arrays, strings
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim'];

for(worker of officeCharacters ){
    if(worker === 'Dwight' || worker === 'Michael'){  // IF WE USE COMMA(,) INSTEAD OF || we will get only 'Michael
    console.log(worker, 'works in the office.');
    console.log(worker, 'works to much in the office.');
    }

    if(worker === 'Jim' && worker !== 'Dwight'){
        console.log('bear. beets. battlestar. moon');
    }
}  
