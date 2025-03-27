```JS

// Object mehtods

// object.assign()
copies values from one or more sources to a target
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /_ …, _/ sourceN)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); -> { a: 1, b: 4, c: 5 }

// object.create()
creates new objects based on existing objects

// object.defineProperties()
defines new or modifies existing properties directly on an object, returning the object.
Object.defineProperties(obj, props)
const object1 = {};

Object.defineProperties(object1, {
property1: {
value: 42,
writable: true,
},
property2: {},
});

console.log(object1.property1); -> 42

// object.defineProperty()
used to define a new property for an object
Object.defineProperty(obj, prop, descriptor)
const object1 = {};

Object.defineProperty(object1, "property1", {
value: 42,
writable: false,
});
console.log(object1.property1); -> 42

// Object.entires()
const object1 = {
a: 10,
b: 20,
c: 30,
d: 40,
};

for (const [key, value] of Object.entries(object1)) {
console.log(`${key}: ${value}`);
}

->
a: 10
b: 20
c: 30
d: 40

// Object.freeze()

it freezes an object
-makes an object unchangable
const person = {
age: 20,
};

Object.freeze(person);

person.age = 50;
console.log(person); -> 20

// Object.fromEntries()

it transforms a list of key-value pairs into an object
const a = [
["a", 10],
["b", 20],
];

const obj = Object.fromEntries(a);
console.log(obj); -> { a: 10, b: 20 }

// Object.groupBy()
Object.groupBy(items, callbackFn)

const inventory = [
{ name: "asparagus", type: "vegetables", quantity: 9 },
{ name: "bananas", type: "fruit", quantity: 5 },
{ name: "goat", type: "meat", quantity: 23 },
{ name: "cherries", type: "fruit", quantity: 12 },
{ name: "fish", type: "meat", quantity: 22 },
];
const result = Object.groupBy(inventory, ({ quantity }) =>
quantity < 10 ? "restock" : "sufficient"
);
console.log(result);

->
{
restock: [
{ name: 'asparagus', type: 'vegetables', quantity: 9 },
{ name: 'bananas', type: 'fruit', quantity: 5 }
],
sufficient: [
{ name: 'goat', type: 'meat', quantity: 23 },
{ name: 'cherries', type: 'fruit', quantity: 12 },
{ name: 'fish', type: 'meat', quantity: 22 }
]
}

// Object.hasOwn()
Object.hasOwn(obj, prop)
The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

const object1 = {
prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// Expected output: true

console.log(Object.hasOwn(object1, "toString"));
// Expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// Expected output: false

// Object.is()
Object.is(value1, value2)
The Object.is() static method determines whether two values are the same value.

console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
(objects are compared by reference not by value)

// Object.preventExtensions()
makes it so that an object's existing property can be modified or deleted but no new property can be added

// Object.isExtensible()
used to check if an object can be extended
Object.isExtensible(obj)

// Object.isFrozen()
to check if an object is froozen or not

// Object.seal()

you cannot add or delete properties but can modify existing ones
(with freeze you cannot even modify existing properties)

// Object.isSeal()

// Object.setPrototypeOf()
Object.setPrototypeOf(obj, prototype)
The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

const obj = {};
const parent = { foo: "bar" };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"

// Object.keys()
provides keys of a given object

const obj = {
a: 10,
b: 20,
c: 30,
d: 40,
};

for (let val of Object.keys(obj)) {
console.log(val);
}

->
a
b
c
d

// Object.values()
provides values of a given object

for (let val of Object.values(obj)) {
console.log(val);
}

->
10
20
30
40
```
