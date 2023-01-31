var fruits = ['apple', 'banana', 'kiwi'];
console.log(fruits.length);
//---------------------------------------------------------

var fruits1 = ['apple', 'banana'];
var fruits2 = ['kiwi', 'mango'];
var allFruits = fruits1.concat(fruits2);
console.log(allFruits);
//-----------------------------------------------

var fruits = new Array('apple', 'banana', 'kiwi');
console.log(fruits);
//------------------------------------------------------------

var fruits = ['apple', 'banana', 'kiwi', 'mango', 'orange'];
fruits.copyWithin(2, 0, 2);
console.log(fruits);
//----------------------------------------------------------

var fruits = ['apple', 'banana', 'kiwi'];
var iterator = fruits.entries();
for (let entry of iterator) {
  console.log(entry);
}
//---------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const result = numbers.every(number => number > 0);
console.log(result);
//------------------------------------------------------

const array = [1, 2, 3, 4];
array.fill(0, 2, 4);
console.log(array);
//-----------------------------------------------------------


console.log(array1.fill(0, 2, 4));
console.log(array1.fill(5, 1));
console.log(array1.fill(6));

//-------------------------------------------------------------------------------
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
//------------------------------------------------------------------------------

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

//---------------------------------------------

const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

//---------------------------------------------

const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);
//---------------------------------------------

const arr = [1, 2, 3, 4];
const result = arr.flatMap(x => [x * 2, x * 3]);
console.log(result);

//---------------------------------------------

const arr = [1, 2, 3, 4];
arr.forEach(function(element) {
  console.log(element);
});


//---------------------------------------------
const arr = [1, 2, 3, 4];
const result = arr.includes(2);
console.log(result);

///--------------------------------------------------------
const arr = [1, 2, 3, 4];
const result = arr.indexOf(2);
console.log(result);
//--------------------------------------------------------------------
const arr = [1, 2, 3, 4];
const result = arr.join(', ');
console.log(result);
//------------------------------------------------------------------


const obj = {a: 1, b: 2, c: 3};
const result = Object.keys(obj);
console.log(result);
//Output: [ "a", "b", "c" ]

//------------------------------------------------------------------
const arr = [1, 2, 3, 4, 2];
const result = arr.lastIndexOf(2);
console.log(result);
//Output: 4
//------------------------------------------------------------------

const arr = [1, 2, 3, 4];
const result = arr.map(x => x * 2);
console.log(result);
// Output: [2, 4, 6, 8]
//---------------------------------------------------------------

const arr = [1, 2, 3, 4];
const result = arr.pop();
console.log(arr);
// Output: [1, 2, 3]
console.log(result);
//Output: 4
//----------------------------------------------------------

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//Output: [1, 2, 3, 4]
//------------------------------------------------------------
const arr = [1, 2, 3, 4];
const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(result);
//Output: 10
//---------------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4];
const result = arr.reverse();
console.log(result);
//Output: [4, 3, 2, 1]
//------------------------------------------------
const array = [1, 2, 3, 4, 5];
const firstElement = array.shift();
console.log(firstElement); // Output: 1
console.log(array); // Output: [2, 3, 4, 5]

//----------------------------------------
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]
console.log(array); //Output: [1, 2, 3, 4, 5]
//-------------------------------------------------
const array = [1, 2, 3, 4, 5];
const result = array.some(element => element % 2 === 0);
console.log(result); // Output: true
//---------------------------------------------------------
const object = { name: 'John', age: 30, job: 'developer' };
const values = Object.values(object);
console.log(values); // Output: ['John', 30, 'developer']
//---------------------------------------------------------------