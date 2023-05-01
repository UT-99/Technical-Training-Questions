Q.1 How to check if an object is an array or not?

 ```JS
const myArr = [1,2,3,4,5]
console.log("Is the variable an array : ", Array.isArray(myArr))
 ```
 
Q. 2 How to check whether a key exist in a JavaScript object or not.

```JS
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
```
Q.3 Write code for merge two JavaScript Object dynamically using inbuilt and without inbuilt method.

```JS

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
```

Q.4 What is would be the output of the following :

```JS
(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB); // false 
	console.log(objA === objB); // false 
})();

```

Q.5 How do you print numbers with commas as thousand separators

Q.6 How can we delete an element at a specific index in an array.

```JS
var mySecondArray = [1,2,3,4,56,6] // 1,2,3 ,56,6

function deleteArrayElement (arr, index){
    arr.splice(index-1 , 1);
    return arr; 
}

console.log("new aaray after deletion : ")
console.log(deleteArrayElement(mySecondArray,2 ))

```

Q.7 Write a code to find the second largest value in an array.");

Q.8 How to check the no. of occurrence of a character in a string.");

```JS
function countCharacterString(string , character){
   const length = string.length;
   let count = 0 ;
   for ( let  i =0 ; i < length ;i++){
    if(character === string[i]){
        count = count + 1;
    }
   }

    return count ;
}
console.log("Occurence of character in string is : ");
let numberOfCharacters = countCharacterString("PlacementsPractice", 's');

console.log(numberOfCharacters)

```

Q.9

```JS

function User(name) {
  this.name = name || "JsGeeks";
}

var person = new User("xyz")["location"] = "USA";
console.log(person); // USA will be seen on console .

```

Q.10  What are the ways by which we can create object in JavaScript ?

```JS
const usingObjectLiteral = {
    name : "Utkarsh Tiwari",
    age : 23,
    city : "Shahjahanpur"
}

console.log("Using Object literall : ");
console.log(usingObjectLiteral)


const usingObjectConstructor = new Object();

usingObjectConstructor.firstName = "Harsh";
usingObjectConstructor.lastName = "Tiwari";
usingObjectConstructor.age = 34;
usingObjectConstructor.city = "Pune";

console.log("Using object constructor  : ");
console.log(usingObjectConstructor)


// using functionConstructor 

function usingFunctionConstructor(name , age , city ){
    this.name = name ;
    this.age = age ;
    this.city = city ;
}


const object1 = new usingFunctionConstructor("Raj", 34, "Canada");

console.log("Using Function constructor : ");
console.log(object1);
```

Q.11 

```JS
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}()); // undefined will be printed on console .
```

Q.12 How to find duplicate elements in a given array?

Q.13 How to find the unique value from an array in sorted order

```JS
let array = [23, 45, 34, 33, 87, 45, 21, 76, 25]

// Output: [21, 23, 25, 33, 34, 45, 76, 87]

function uniqueArrayElements(arr){
    const len = arr.length;
    let temp  = 0 ;
    const newArray=[];
    for (let i = 0 ; i <len ; i++){
        for ( let j = i+1 ; j <= len ; j++){
            if (arr[i] !== arr[j] ){
                temp = arr[i];
            }
            else {
                break;
            }
        }
        newArray.push(temp);
    }

    return newArray.sort();

}

const uniqueArray = uniqueArrayElements(array)
console.log("Unique array is : ")
console.log(uniqueArray);

```

Q.14 Write a code to create a sentence from the given array.
```JS
let arr = ["Hi", "I am", "Full Stack" , "Developer"]

let sentencearr = arr.join(" ")
console.log("Newly created sentence is : "+sentencearr );
```

Q.15 Given a two strings find out if they are anagram of each other.

Q.16 How can you extract  a few fields  from the given JSON object  and form a new array? 

```JS
const input = {
   "students" : [
                 {
                  name : "Ravi",
                  id: 10
                  }
                  , {
                  name : "Mahesh",
                  id: 6
                  } ,
                   {
                  name : "Surya",
                  id: 7
                  }
                ]
}
```

Q.17 Tell me the output of this code ? 

```JS
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
} // Print 1 to 10 sequentialy 

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
} // Print undefined .
```

Q.18 How to convert an Object {} into an Array [] in JavaScript?

```JS
const obj =  {
    name : "Harshit",
    id: 10
}

const toArray = Object.entries(obj);

console.log(toArray);
```

Q.19 Write a function that takes an array of numbers and returns the median value.

```JS
const medianArray = [1,2,3,4,5,6,7,6,7,8,9]
```

Q.20 Output Based Question.

```JS
var Employee = { company: "abc" };
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);  // abc will be printed on console ;
```

Q.21 How do you check whether a string contains a substring.

```JS
const string = "myString"
console.log(string.includes("my"));
```

Q.22 Create a function that will convert from Celsius to Fahrenheit. 

```JS
function CelcuisToFahrenhiet(celsuis){
    return (celsuis * 1.8) + 32 ;
}
const Fahrenheit = CelcuisToFahrenhiet(32);
console.log("The fahrenhiet value is : "+ Fahrenheit)

```

Q.23 Create a function that will find the nth Fibonacci number using recursion.

Q.24 Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

```JS
let arr1 = [1,2,3,4,5,6]
let arr2 = [6,7,8,9,10]

let arr3 = [...arr1, ...arr2 ];;
console.log("New combined array is : ")
console.log(arr3)
```

Q.25 Create a function to return the longest word from the string.

```JS
let text = "Create a function to return the longest word(s) in a sentance.";
function longestWordFromstring (string){
    const arr = string.split(" ");
    let  maxLengthValue = 0;
    let  index = 0
    for ( let i =0 ; i < arr.length ; i++){
        if (arr[i].length > maxLengthValue){
            maxLengthValue = arr[i].length;
            index = i
        }
    }
    console.log(arr);
    console.log("Maximum length word is : ", arr[index]);
    console.log("Maximum length is : ", maxLengthValue)
}

longestWordFromstring(text);
```

Q.26 Output Based Question.  

```JS
var Y = 1;
if (function F(){})
{
y += Typeof (F)
}
console.log(y); // Output1undefnied;
```




