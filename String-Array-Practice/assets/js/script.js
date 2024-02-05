"use strict"
//#region String



let word = "Azerbaycan AAA, BBB CCC";

// console.log(word.length);

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// console.log(word.toUpperCase());

// console.log(word.toLowerCase());

// console.log(word.trim());

// console.log(word.charAt(5));

 
// let res = word.concat(" salam");

// console.log(res);


// console.log(word.slice(3,5));


// console.log(word.substring(1,3));


// let txt = "aaaa bbbb ccc dddd";

// console.log(txt.substring(0,11) + "...");


// console.log(word.replace("A","a"));

// console.log(word.indexOf("z"));

// console.log(word.lastIndexOf("a"));

// console.log(word.replaceAll("a","b"));

// let res = word.split(",");

// console.log(res[1]);



let stu1 = {
    id:1,
    name: "Semed",
    surname: "Huseynov",
    age: 27,
    email: "semed@code.edu.az"
}
let stu2 = {
    id:2,
    name: "Aqsin",
    surname: "Veliyev",
    age: 26,
    email: "aqsin@code.edu.az"
}
let stu3 = {
    id:3,
    name: "Ilham",
    surname: "Abasli",
    age: 20,
    email: "ilham@mail.ru"
}

const students = [stu1,stu2,stu3];

function getStudentsByAge(students){
    for (const student of students) {
        if(student.age > 18 && student.age < 25){
            console.log(`${student.name} ${student.surname} - ${student.age} - ${student.email}`);
        }
    } 
}

// getStudentsByAge(students);


let getStudents1 = (students) =>{
    for (const student of students) {
        if(student.age > 18 && student.age < 25){
            console.log(`${student.name} ${student.surname} - ${student.age} - ${student.email}`);
        }
    } 
}

// getStudents1(students);

function ageCondition(age){
    return age > 18 && age < 25;
}

function getStudents(students,callback){
    for (const student of students){
        if(callback(student.age)){
            console.log(`${student.name} ${student.surname} - ${student.age} - ${student.email}`);            
        }
    }
}

// getStudents(students,ageCondition);



function checkEmail(students){
    let count = 0;
    for (const student of students){
        if(student.email.includes("c")){
            count++;            
        }
    }
    return count;
}

// console.log(checkEmail(students));



function emailCondtion(email){
    return email.includes("c")
}

function getStudentCountByEmail(students,callback){
    let count = 0;
    for (const student of students) {
        if(callback(student.email)){
            count++;            
        }
    }
    return count;
}

// console.log(getStudentCountByEmail(students,emailCondtion));


//#endregion

//#region Array

let ages = [22,33,44,55];

// console.log(ages.toString());

// console.log(ages.at(2));

// console.log(ages.join(" * "));

// ages.pop();
// ages.push(66); 

// ages.shift();
// ages.unshift(11);

// console.log(ages);

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let res = fruits.filter(m => m.includes('Orange'));

// fruits = fruits.filter(m =>!m.includes("Orange"));

// console.log(res);

// console.log(fruits);

// console.log(fruits.includes("Banana"));

// var res = fruits.find(m => m.startsWith("B"));
// console.log(res);



// fruits.forEach((fruit,i) => {
//     // console.log(fruit + " - " + i);
//     fruits[i] += " FFF";
// });

// console.log(fruits);

// let res = fruits.map(m =>{
//     return m + " FFF";
// })

// console.log(res);

// console.log(fruits);

//#endregion
