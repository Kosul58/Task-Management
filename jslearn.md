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
