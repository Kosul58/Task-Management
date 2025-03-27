// Array methods

// Array.of() used to create an array
const arr = Array.of(1, 2, 3, 4);
console.log(arr); -> [ 1, 2, 3, 4 ]

const arr = Array.of(1, 2, "aa", "bb");
console.log(arr); -> [ 1, 2, 'aa', 'bb' ]

// Array.from() used to create an array
const arr = Array.from("foo");
console.log(arr); -> [ 'f', 'o', 'o' ]

const arr = Array.from([1, 2, 3], (x) => x \* 2);
console.log(arr); -> [ 2, 4, 6 ]

// isArray() used to check if given value is an array or not

const arr = [1,2,3]
console.log(isArray(arr)) -> true

// Array.at()

const arr = [0, 1, 2, 3, 4, 5];
console.log(arr.at(2)); // output 2

// Array.concat()

const arr2 = [6, 7, 8, 9, 10];
console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);

// Array.copyWithin() used to create copies of same array in different location (target) of the array -- doesn't change the original length of an array.

target-> where to create copies from location
start -> create copies starting from this value
end -> create copies upto this value

const arr3 = arr2.copyWithin(1, 2, 3);
console.log(arr3); -> [6,8,8,9,10]

const arr = [1, 2, 3, 4, 5, 6];
const j = arr.copyWithin(2, 4, 5);
console.log(j); -> [ 1, 2, 5, 4, 5, 6 ]

const arr = [1, 2, 3, 4, 5, 6];
const j = arr.copyWithin(2);
console.log(j); -> [ 1, 2, 1, 2, 3, 4 ]

// copyWithin(target, start)
// copyWithin(target, start, end)

// Array.entires()
creates an array iterator object that contains key/value pairs for each index in an array

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.entries()); -> Object [Array Iterator] {}

// for (const [a, b] of arr2.entries()) {
// console.log(a, b);
// }
->
0 1
1 2
2 3
3 4
4 5
5 6

// for (const a of arr2.entries()) {
// console.log(a);
// }
->
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
[ 5, 6 ]

// Array.every() used to check if all the element in an array satisfy a given condtion or not. if all elements satisfy the condition then it return 'true' else if any one of the element doesn't satisfy the condition then it returns 'false'

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.every((x) => x < 10)); -> true
console.log(arr.every((x) => x % 2 === 0)); -> false

// Array.some() used to check if some (atleast one element) in an array satisfy a given condition or not. if atleast one element satisfies the condition the it returns 'true' else if none satisfy the condition then it returns 'false'
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.some((x) => x % 2 === 0)); -> true
console.log(arr.some((x) => x > 10)); -> false

// Array.fill() used to add or replace values in an array
fill(value)
fill(value, start)
fill(value, start, end)

const arr = new Array(5).fill(5) -> [5,5,5,5,5]
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.fill(2, 4, 5)); -> [ 1, 2, 3, 4, 2, 6 ]
console.log(arr.fill(2, 4)); -> [ 1, 2, 3, 4, 2, 2 ]
console.log(arr.fill(2)); -> [ 2, 2, 2, 2, 2, 2 ]

// Array.find() returns the first value that satisfies a given condition

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.find((x) => x % 2 === 0)); -> 2

const inventory = [
{ name: "apples", quantity: 2 },
{ name: "bananas", quantity: 0 },
{ name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// Array.findLast() returns the last value that satisfies the given condition

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.findLast((x) => x % 2 === 0)); -> 6

// Array.findIndex() returns the index of first element that satisfies a given condition
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.findIndex((c) => c % 2 == 1)); -> 0

// Array.findLastIndex() returns the index of the last element that satisfies a given condition
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.findLastIndex((c) => c % 2 == 1)); -> 4

// Array.flat() used to flatten an array (convert a nested array to a normal array)
flat()
flat(depth)

by default the depth = 1

const arr = [1, 2, 3, [4, 5], 6];
console.log(arr.flat()); -> [ 1, 2, 3, 4, 5, 6 ]

const arr = [1, 2, 3, [4, [5]], 6];
console.log(arr.flat()); -> [ 1, 2, 3, 4, [ 5 ], 6 ]

const arr = [1, 2, 3, [4, [5]], 6];
console.log(arr.flat(2)); -> [ 1, 2, 3, 4, 5, 6 ]

// Array.flatMap() first maps an array based on given condition and then flattens it.
const arr = [1, 2, 3, 4];

const j = arr.flatMap((x) => [x, x * 2]);
console.log(j);
->
[
1, 2, 2, 4,
3, 6, 4, 8
]

// Array.forEach() used to loop over each element of an array. It cannot be broken or conitnued
const arr = [1, 2, 3, 4];

arr.forEach((x) => console.log(x));
->
1
2
3
4

// Array.includes() used to check if an array has a given value or not. If a given array has that value then it returns true else it returns false

const arr = [1, 2, 3, 4];

console.log(arr.includes(2)); -> true
console.log(arr.includes(8)); -> false

// Array.indexOf() used to find the first index of a given value in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1];

console.log(arr.indexOf(2)); -> 1

// Array.lastIndexOf() used to find the last index of a given value in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1];

console.log(arr.lastIndexOf(2)); -> 8

// Array.join() used to join the values inside an array and return them as a string
join()
join(separator)

const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); -> Fire,Air,Water
console.log(elements.join("+")); -> Fire+Air+Water
const elements = [1, 2, 3, 4, 5];
console.log(elements.join("\_")); -> 1_2_3_4_5

// Array.keys()
The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for (const key of iterator) {
console.log(key);
}
->
0
1
2

// Array.values()
The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.
const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (const value of iterator) {
console.log(value);
}
->
"a"
"b"
"c"

// Array.push()
used to add new values at the end of an array

const arr = [1,2,3,4]
arr.push(5)
console.log(arr) -> [1,2,3,4,5]
arr.push(6,7,8,9,10)
console.log(arr) -> [1,2,3,4,5,6,7,8,9,10]

// Array.pop()
used to remove the last value of an array

const arr = [1,2,3,4,5]
arr.pop()
console.log(arr) -> [1,2,3,4]

// Array.shift()
used to remove the first value of an array

const arr = [1,2,3,4]
arr.shift()
console.log(arr) -> [2,3,4]

// Array.unshift()
used to add values form the start of an array
const arr = [8,9,10]
arr.unshift(7)
console.log(arr) -> [7,8,9,10]

const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1) -> [4, 5, 1, 2, 3]

// Array.map()
used to create a new array by mapping over an array and applying some operations on it
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x \* 2);

console.log(map1); -> [ 2, 8, 18, 32 ]

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x % 2 === 0);

console.log(map1); -> [ false, true, false, true ]

// Array.filter()
creates a new array by filtering over a array based on certain condition
const array1 = [1, 4, 9, 16];

const map1 = array1.filter((x) => x % 2 === 0);

console.log(map1); -> [ 4, 16 ]

// Array.reduce()

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

reduce(callbackFn)
reduce(callbackFn, initialValue)

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue,
);

console.log(sumWithInitial); -> 10

// Array.reduceRight()
reduces starting from the right(last)
const array1 = [
[0, 1],
[2, 3],
[4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
accumulator.concat(currentValue)
);

console.log(result); -> [ 4, 5, 2, 3, 0, 1 ]

const array1 = [1, 2, 5, 4, 8];

const result = array1.reduceRight(
(accumulator, currentValue) => accumulator + currentValue,
10
);

console.log(result); -> 30

const array1 = [1, 2, 5, 4, 8];

const result = array1.reduceRight((accumulator, currentValue) => {
console.log(accumulator);
return accumulator + currentValue;
}, 10);

console.log(result);
->
10
18
22
27
29
30

// Array.sort()
used to sort an array
by default it perfroms lexical sorting
const arr = [1, 8, 5, 7, 6, 9, 8, 10];
console.log(arr.sort()); -> [1, 10, 5, 6, 7, 8, 8, 9];

const arr = [1, 8, 5, 7, 6, 9, 8, 10];
console.log(arr.sort((a, b) => a - b)); -> [1, 5, 6, 7, 8, 8, 9, 10]; // sorts this in an ascending order

console.log(arr.sort((a, b) => b - a)); -> [10, 9, 8, 8, 7, 6, 5, 1]; // sorts this in descending order

const arr = ["cat", "bat", "fat", "mat"];
console.log(arr.sort()); -> [ 'bat', 'cat', 'fat', 'mat' ]

const arr = ["cat", "bat", "fat", "Mat"];
console.log(arr.sort((a, b) => a.toLowerCase() > b.toLowerCase())); -> [ 'cat', 'bat', 'fat', 'Mat' ]

// Array.reverse()
used to reverse the arrangement of elements in an array
const arr = ["cat", "", "bat", "fat", "Mat"];

console.log(arr.reverse()); -> [ 'Mat', 'fat', 'bat', '', 'cat' ]
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]

// Array.slice()
used to create a shallow copy of an array
slice()
slice(start)
slice(start, end)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
Expected output: Array ["camel", "duck"]

const arr = ["cat", "", "bat", "fat", "Mat"];

console.log(arr.slice(-1)); -> [ 'Mat' ]

// Array.splice()
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /_ …, _/ itemN)

const arr = ["sun", "mon", "tue", "thus"];
arr.splice(-1);
console.log(arr); -> [ 'sun', 'mon', 'tue' ]
arr.splice(2, 0, "wed", "thus", "fri");
console.log(arr); -> [ 'sun', 'mon', 'wed', 'thus', 'fri', 'tue' ]

// Array.with()
used to create a new array by changing a value at a given index
arrayInstance.with(index, value)
const arr = ["sun", "mon", "tue", "thus"];
console.log(arr.with(2, "Tue")); -> [ 'sun', 'mon', 'Tue', 'thus' ]

// Array.toLocaleString()
The toLocaleString() method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").

const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString); -> 1,a,12/21/1997, 2:12:00 PM

// Array.toReversed()
returns a new array with the elements of original array reversed
const arr = ['a','b','c','d']
const arr2 = arr.toReversed()
console.log(arr2) -> ['d','c','b','a']

// Array.toSorted()
returns a new array with the elements of original array sorted in ascending order
const arr = ["d", "c", "b", "a"];
const arr2 = arr.toSorted();
console.log(arr2, arr); -> [ 'a', 'b', 'c', 'd' ] [ 'd', 'c', 'b', 'a' ]

// Array.toSpliced()
same as splice() but instead of affecting the original it just returns a new array after performing certain operation

// Array.toString()
The toString() method of Array instances returns a string representing the specified array and its elements.

const array1 = [1, 2, "a", "1a"];
console.log(array1.toString()); -> "1,2,a,1a"

//Practice questions

const arr = ["cat", "bat", "cat", "Mat", "fat", "", "hat", "Eat"];
output = ["bat", "cat", "Eat", "fat", "hat", "Mat", ""];

const myfunc = (array) => {
let filteredArr = [];
//filter section
array.forEach((x) => {
const lcase = x.toLowerCase();
const ucase = x.toUpperCase();
if (!filteredArr.includes(lcase) && !filteredArr.includes(ucase)) {
filteredArr.push(x);
}
});
const result = filteredArr.sort((a, b) => {
if (a === "") return 1;
if (b === "") return -1;
if (a.toLowerCase() > b.toLowerCase()) return 1;
if (b.toLowerCase() > a.toUpperCase()) return -1;
});
return result;
};

console.log(myfunc(arr)); -> ["bat", "cat", "Eat", "fat", "hat", "Mat", ""];

//without built in methods
const arr = ["cat", "bat", "Mat", "rat", "", "Cat", "cat", "rat", ""];
const output = ["bat", "cat", "Mat", "rat", ""];

const customSort = (arr) => {
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
for (let j = 0; j < n - 1 - i; j++) {
if (arr[j] === "") {
[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
} else if (
arr[j].toLowerCase() > arr[j + 1].toLowerCase() &&
arr[j + 1] !== ""
) {
[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}
}
}
return arr;
};

const filterfunc = (arr) => {
let filterdarr = [];
for (let i = 0; i < arr.length; i++) {
let lowerVal = arr[i].toLowerCase();
let isDuplicate = false;
for (let j = 0; j < filterdarr.length; j++) {
if (lowerVal === filterdarr[j].toLowerCase()) {
isDuplicate = true;
break;
}
}
if (!isDuplicate) {
filterdarr[i] = arr[i];
}
}
return customSort(filterdarr);
};

console.log(filterfunc(arr));
