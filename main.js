// Q. 1 How to check if an object is an array or not?

const myArr = [1,2,3,4,5]
console.log("Is the variable an array : ", Array.isArray(myArr))


// Q. 2 How to check whether a key exist in a JavaScript object or not.

const myObj = {
    firstName : "Utkarsh",
    lastName : "Tiwari",
    age : 23
}


function checkIfKeyExists(key){
    for (k in myObj){
        if( key === k ){
            return "Yes key exist inside object."
        }
        else {
            return "Specified key does not exist inside object."
        }
    }
}
let key = 'age2'
let keyStatus = checkIfKeyExists(key);
console.log(keyStatus)



// Q.3   Write code for merge two JavaScript Object dynamically using inbuilt and without inbuilt method.

var person = {
        name : 'John',
        age  : 24
}

var person2 = {
    name : 'John2',
    age  : 32,
    city: "Newyork"
}

var person = {...person , ...person2};

console.log("New person object is : ")
console.log(person    )
console.log("Main .js file invoked ")


var mergedObject = Object.assign(person, person2);
console.log("New object after using inbuilt method : " ),
console.log(mergedObject)


// Q.4 
console.log("Question 4 . ");

(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB);
	console.log(objA === objB);
})();


// Question : 5 

console.log("Q.5 : How do you print numbers with commas as thousand separators")


// Q.6 
console.log("Q.6 How can we delete an element at a specific index in an array.");



var mySecondArray = [1,2,3,4,56,6] // 1,2,3 ,56,6
// mySecondArray.splice(3-1 , 1)

// console.log(mySecondArray)

function deleteArrayElement (arr, index){
    arr.splice(index-1 , 1);
    return arr; 
}


console.log("new aaray after deletion : ")
console.log(deleteArrayElement(mySecondArray,2 ))



// Q.7 
console.log("Write a code to find the second largest value in an array.");



