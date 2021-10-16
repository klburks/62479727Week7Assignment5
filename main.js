//Question 1
const myPizzaOrder = ["Pepperoni", 12.9, false];

//Question 2
let myArray = ["Pepperoni", "Beef", "Cheese"];
function getPizzaOrder(array) {
    return myArray[myArray.length - 3];
}
console.log(getPizzaOrder(myArray));

//Question 3

function addTax(array) {
    array.splice((array[1]*0.0925).toFixed(2));
    return array;
}

addTax(array);


//Question 4

let toppings = ["Cheese", "Pineapple", "Onion", "Mushroom"];

function completeOrder(array) {
    toppings.splice(3, 1, "true");
    return toppings;
}

console.log(completeOrder(myArray));

//Question 5
let num = 4;

function allTheNumbers(num) {
    let arr = [];
    for (let i=1; i < num; i++) {
        arr=arr.concat(i);
    }
    return arr;
}
console.log(allTheNumbers(num));


//Question 6

function getEvens(startNum, endNum) {
    let arr=[];
    for(let i = startNum; i<endNum; i++) {
        if(i%2 == 0)
        arr = arr.concat(i)
    }
    return arr;
}


//Question 7
let flavors = ["vanilla", "strawberry", "chocolate"];
function getLastElement(array) {
    return flavors[myArray.length - 1];
}
console.log(getLastElement(flavors))

//Question 8
let array1 = ['Apple', 'Banna', 'Orange'];
let array2 = ['Strawberry', 'Kiwi', 'Grape'];
let array3 = (array1, array2);

function combineArrays(arr1, arr2) {
    let array3 = array1.concat(array2);
    return array3;
}
console.log(combineArrays(array3));

