 //print all numbers from 1 to 10 using a for loop
 for(let i=1; i<=10; i++){
    console.log(i);
 }
 // then print all numbers in reverse order from 10 to 1 using a for loop
 for(let i=10; i>=1; i--){
    console.log(i);
 }

    //print all even numbers from 1 to 20 using a for loop
    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log(i);
        }
    }
for(let i=1; i<=5; i++)
{
    let output="";
    for(let j=1; j<=i; j++){
        output=output+i;
    }
    console.log(output);
}
let num1=10, num2=45, num3=23, num4=67, num5=89;
let largest = num1; // assume num1 is biggest first

if(num2 > largest) { largest = num2; } // swap if bigger
if(num3 > largest) { largest = num3; } // swap if bigger
if(num4 > largest) { largest = num4; } // swap if bigger
if(num5 > largest) { largest = num5; } // swap if bigger

console.log(`Largest number is ${largest}`);

let sub1=85, sub2=92, sub3=67, sub4=45, sub5=78;// first piece

const total=sub1+sub2+sub3+sub4+sub5// second piece
console.log(total)
const average=Math.round(total/5);
console.log(average)

if(sub1 >= 90) {
    console.log(`Subject 1: ${sub1} → A+`);
} else if(sub1 >= 80) {
    console.log(`Subject 1: ${sub1} → A`);
} else if(sub1 >= 70) {
    console.log(`Subject 1: ${sub1} → B+`);
} else if(sub1 >= 60) {
    console.log(`Subject 1: ${sub1} → B`);
} else if(sub1 >= 50) {
    console.log(`Subject 1: ${sub1} → C`);
} else {
    console.log(`Subject 1: ${sub1} → Fail`);
}
//Second block for sub2;
if(sub2 >= 90) {
    console.log(`Subject 2: ${sub2} → A+`);
} else if(sub2 >= 80) {
    console.log(`Subject 2: ${sub2} → A`);
} else if(sub2 >= 70) {
    console.log(`Subject 2: ${sub2} → B+`);
} else if(sub2 >= 60) {
    console.log(`Subject 2: ${sub2} → B`);
} else if(sub2 >= 50) {
    console.log(`Subject 2: ${sub2} → C`);
} else {
    console.log(`Subject 2: ${sub2} → Fail`);
}
//Third block for sub3;
if(sub3 >= 90) {
    console.log(`Subject 3: ${sub3} → A+`);
} else if(sub3 >= 80) {
    console.log(`Subject 3: ${sub3} → A`);
} else if(sub3 >= 70) {
    console.log(`Subject 3: ${sub3} → B+`);
} else if(sub3 >= 60) {
    console.log(`Subject 3: ${sub3} → B`);
} else if(sub3 >= 50) {
    console.log(`Subject 3: ${sub3} → C`);
} else {
    console.log(`Subject 3: ${sub3} → Fail`);
}
//Fouth block for sub4
if(sub4 >= 90) {
    console.log(`Subject 4: ${sub4} → A+`);
} else if(sub4 >= 80) {
    console.log(`Subject 4: ${sub4} → A`);
} else if(sub4 >= 70) {
    console.log(`Subject 4: ${sub4} → B+`);
} else if(sub4 >= 60) {
    console.log(`Subject 4: ${sub4} → B`);
} else if(sub4 >= 50) {
    console.log(`Subject 4: ${sub4} → C`);
} else {
    console.log(`Subject 4: ${sub4} → Fail`);
}
//Fifth vlock for subject 5
if(sub5 >= 90) {
    console.log(`Subject 5: ${sub5} → A+`);
} else if(sub5 >= 80) {
    console.log(`Subject 5: ${sub5} → A`);
} else if(sub5 >= 70) {
    console.log(`Subject 5: ${sub5} → B+`);
} else if(sub5 >= 60) {
    console.log(`Subject 5: ${sub5} → B`);
} else if(sub5 >= 50) {
    console.log(`Subject 5: ${sub5} → C`);
} else {
    console.log(`Subject 5: ${sub5} → Fail`);
}

console.log(`Total: ${total}/500`);
console.log(`Average: ${average}`);
console.log(average>=50 ? "passed" :"Failed");

for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++) {
        if(i === j) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}
