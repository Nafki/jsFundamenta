/* 
CONDITIONALS
FASLY VALUES:
AVALUE THAT IS CONSIDER FALSE WHEN encountered in a boolean. There are 6 falsy values in js
- false
- 0
- "", '', ``
- null
- undefined
- NaN /NOT A NUMBER
what does this mean? when ever JS is expecting a boolean value and is given the above 6, 
it is evaluated as false
side note: there are also truthy values in JS, which tend to be much less limited. 
example: true,{},[],42(any non-empty string),"false",3.14(any decimal)
*/

//test if fractions are truthy

/* 
IF STATEMENTS

WHEN WE USE COMPARISON OPERATORS, WE TYPICALLY ARE ASKING IF WE CAN MOVE TO THE NEXT section of code.
"if" some thing is true,do 'this things"
*/


    //keyword    expression
    if           (true){
   // code to rune if the expression evaluates to true
    console.log('truthy Test');
    }
   //condition
    if(false){
        console.log('falsy Test');
    }
// result non

 //== comparison 

let light = 'on';

if(light == 'on'){
console.log('the light is on');
}

let weather = 65;
let rain = 'true';
if( weather < 70 && rain == 'true'){
    console.log('Maybe wear a jacket');
}

//we used == to comparison not assign values

let batman = 'is the night';
let bruce = 'true';
if(batman =='is the night' && bruce == 'true'){ 
    console.log('Batman');
}


/* we could take out ==
if(bruce && batman == 'is the night'){
    console.log('BATMAN');
}
if(true && true){
    console.log('BATMAN') // same result
    if it is false we may use || and or if(false || true)
}
*/

// not equal if statement
let batman = 'is the night';
let bruce = false;
// !brouce will check that bruce is not equal to true
/*if(!batman && bruce == 'is the night'){ 
    console.log('Batman');
}
*/

/* 
IF ELSE
we can think of this as not only providing an answer 
if our condition evaluates to be true,
but also one is it ends up being false
*/

let today = 75;
if(today < 70){
    //           string interpolation
    console.log(`lt's ${today}, wear a jacket!`);
}else{
    console.log(`it's ${today}. No jacket needed!`);
}

/* 
ELSE IF

this is a condition that will be checked if the above condition was not met
*/

let cooktime = 40;
if(cooktime === 45){
    console.log('Let us feast');
}else if(cooktime >= 30){
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
}else if(cooktime >= 20){
    console.log(`It has only been ${cooktime} minutes. Wait another 10 - 25 minutes.`);
}else{
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it..`);
}

let cooktime = 25;
if(cooktime === 45){
    console.log('Let us feast');
} else if(cooktime >= 30){
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
}else if(cooktime >= 20){
    console.log(`It has only been ${cooktime} minutes. Wait another 10 - 25 minutes.`);
}else{
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it..`);
}

let cooktime = 25;
if(cooktime === 45){
    console.log('Let us feast');
} else if(cooktime >= 30){
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
}else if(cooktime >= 20){
    console.log(`It has only been ${cooktime} minutes. Wait another 10 - 25 minutes.`);
}else{ //we should put else if before else. 
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it..`);
}

let age = 18;
if(age <= 17){
    console.log('sorry, you are too young to do any thing');
} else if(age >= 18){
    console.log('You can vote!');
} else if(age >= 21){
    console.log('you can drink!');
} else if(age >= 25){
    console.log('you can rent a car!');
}

let age = 25;
if(age >= 17){
    console.log('sorry, you are too young to do any thing');
} else if(age >= 18){
    console.log('You can vote!');
} else if(age >= 21){
    console.log('you can drink!');
} else if(age >= 25){
    console.log('you can rent a car!');
}

/*
TERNARIES
they are if /else statement but they look weird
*/

let myName = 'Nafkot';
  //condition
if(myName == 'Nafkot'){
    //if true run this
    console.log(`Hi, ${myName}!`);
}else {
    //else run this
    console.log(`Not sure I know ${maName}`);
}

//TERNARY  ( ternary uses to set up ? and :)
//condition? if true: else result
//condition        if true run this                  else run this 

myName === 'Nafkot' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${maName}`);

//CONDITION
myName === 'Nafkot' ? 
// if true
console.log(`Hi, ${myName}!`) : 
// if false
console.log(`Not sure I know ${maName}`);

let hero = 'Batman';
let villain = 'Freeze';

hero=='Batman' && villain =='Riddler' ? 
console.log('what has head and a tail but no body') : 
hero == 'Batman' && villain == 'Joker' ?
console.log('why so serious?') : 
hero == 'Batman' && villain == 'Mr.Freeze' ? 
console.log('Ice to meet you!') :
console.log(`${hero} is the night`);


//challenge

let lampOn = 'false';
let daytime = 'true';
lampOn == true && daytime != true ?
    console.log('the lamp is on during the night') :
lampOn !=true && daytime != true ?
    console.log('the lamp is off during the night') :
lampOn == true && daytime == true ?
    console.log('the lamp is on during the daytime') :
lampOn != true && daytime == true ?
    console.log('the lamp is off during the day') :
    console.log('what lamp'); // you have to finish with else statement that is ';'

/*
SWITCH STATEMENTS

EXECUTES A BLOCK OF code depending on different cases
*/

let instructor ='Josh';

switch(instructor) {
 // if (instructor ==='Jerome')
    case 'Jerome':
        console.log(`${instructor} 'is a part of the web develpment team`);
        break;
    case 'Summer' :
        console.log(`${instructor} 'is a part of the web develpment team`);
        break; //break separetes different cases
    case 'Josh' : 
        console.log(`${instructor}'is a part of the web develpment team`);
    break;
    default :   //else
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
        break;
}

let staff ='Bire';

switch(staff) {

    case 'Jerome':
    case 'Summer' : 
    case 'Bire' : 
    case 'Adam' : 
        console.log(`${staff} is a part of the web develpment team`);
        break;
    case 'Jase' : 
    case 'Buse' : 
    case 'Adamia' : 
        console.log(`${staff} 'is a part of the web develpment team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches`);
        break;
}

let switchConditional = 'true';

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
        console.log(`${switchConditional} is a string or boolean`);
        break;
    default:
        console.log(`${switchConditional} is a NOT string or boolean`);
        break;
}

// when we use || (or) only one side of the || needs to be true for expression to be true
// when we use && (and) both sides of the && need to be true for expression to be true

