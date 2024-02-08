"use strict";


// 1) Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin.
function stringReverse(text){
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }
    return newText;
}

// console.log(stringReverse("Cavid"));




// 2) Parametr olaraq gelen yasha gore hansi ilden olduqugunu gosteren function yazin. Meselen 30 gelirse function geriye 1994 qaytarmalidir.

function getBornYear(age) {
    let dateNow = new Date();
    let bornYear = dateNow.getFullYear() - age;
    return bornYear;
}

// console.log(getBornYear(30));


// 3) Personlardan ibaret objectleriniz olacaq. (id,name,fullName,age,salary) . Ashagidaki tasklari array qebul eden functionlar seklinde yazin.


let person1 = {
    id: 1,
    name: "Cavid",
    fullName: "Cavid Bashirov",
    age: 30,
    salary: 1500,
}


let person2 = {
    id: 1,
    name: "Aqsin",
    fullName: "Aqsin Veliyev",
    age: 26,
    salary: 1500,
}

let person3 = {
    id: 2,
    name: "Semed",
    fullName: "Semed Huseynov",
    age: 27,
    salary: 1500,
}

let person4 = {
    id: 3,
    name: "Tunzale",
    fullName: "Tunzale Memmedova",
    age: 24,
    salary: 1500,
}

const people = [person1,person2,person3,person4];


//      1) Personlarin umumi sayini geri qaytaran.

function countOfPeople(people) {
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        count++;
    }
    return count;
}

// console.log(countOfPeople(people));



//      2) Personlarin maashlarinin umumi ortalamasini qaytaran.

function averageSalary(people){
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        sum += people[i].salary
    }
    let average = sum / people.length;
    return average;
}

// console.log(averageSalary(people));


//      3) Personlarin fullName-ne gore search function-u yazin. (elave parametr olaraq searchText de qebul edecek)

function search(people,searchText) {
    for (const person of people) {
        if(person.fullName.trim().toLowerCase().includes(searchText.trim().toLowerCase())){
            console.log(`**Fullname: ${person.fullName}\n**Age: ${person.age}\n**Salary: ${person.salary}`);
        }
    }
}

// search(people," h   ")