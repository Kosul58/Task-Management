```JS

// String Method

// String.fromCharCode()
Converts one or more Unicode values (between 0 and 65535, or 0xFFFF) into a string.
Cannot handle characters outside the Basic Multilingual Plane (BMP) (i.e., characters with code points > 65535, such as emojis and rare symbols).
Works with UTF-16 encoding, meaning it only processes 16-bit character values.
console.log(String.fromCharCode(189, 43, 190, 61)); -> 

// String.fromCodePoint()
Converts one or more Unicode code points into a string.
Supports all Unicode characters, including those beyond 0xFFFF (such as emojis and rare symbols).
Works with full Unicode (32-bit values) rather than just UTF-16.

console.log(String.fromCodePoint(10, 20, 30, 40, 50)) -> (2

// String.anchor()

creates a string that embeds strings in an <a> element with a name
const str = 'Hello Bro'
document.body.innerHTML = contentString.anchor("Hello") -> <a name="hello">Hello Bro</a>

// String.at()
used to get a value(character) from a string based on a index
const str = "Kosul";
console.log(str.at(2)); -> s
-new method (ES 2022)
-supports negative indexing (str.at(-1))
-if index out of bounds returns undefined

// String.charAT()
used to get a character at a specific position from a string
-old method
-doesn't support negative indexing
-if index is out of bounds returns '' (empty string)
const str = "Kosul";
console.log(str.charAt(2));

// String.charCodeAt()
returns UTF-16 code of a character at a specific position in a string

- doesn't work for emojis and symbols
  const sentence = "The quick brown fox jumps over the lazy dog.";
  console.log(sentence.charCodeAt(4)); -> 113 (q)

// String.codePointAt()
returns UTF-16 code of a character at a specific position in a string
-works for emojis and symbols
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.codePointAt(8)); -> 107 (k)

//

// String.big()
embeds a string inside a <big> gelement
<big>string</big>

const str = 'Hello'
document.body.innerHTML = str.big() -> <big>Hello</big>

// String.blink()
embeds inside a <blink> element

// String.bold()
embeds inside a <bold> element

// String.fixed()
embeds inside a <tt> element (element with a fixed width font)

// String.fontcolor()
embeds inside a <font> element with color fontcolor(color) -> <font color="color"> </font>

// String.fontsize()
embeds inside a <font> element with size fontsize(size) -> <font size="size"> </font>

// String.italics()
embeds inside a <i> element

// String.link()
embeds inside a <a> element with href link equaling link(link) -> <a href="link"> </a>

// String.small()
<small>str</small>

// String.strike()
<strike>str</strike>

// String.sub()
<sub>str</sub>

// string.sup()
<sup>str</sup>



// String.concat()
joins multiple strings and returns a new joined string
const str1 = "this";
const str2 = "is";
const str3 = "cool";
console.log(str1.concat(str2, str3)); -> 'thisiscool'
console.log(str1.concat(", ", str2, str3)); -> 'this, iscool'
console.log(str1.concat(", ", str2, ", ", str3)); ->"this, is, cool
"

// String.startsWith()
used to check if a given string starts with a given character or not
it returns true or false values
const str = 'kosul'
console.log(str.startsWith('k')) -> true
console.log(str.startsWith("l")); -> false

// String.endsWith()
used to check if a given string ends with a given character or not
it returns true or false values

const str = 'kosul'
console.log(str.endsWith('l')) -> true
console.log(str.endsWith("ll")); -> false

const str = "kosull";
console.log(str.endsWith("ll")); -> true

// String.includes()
used to check if a given string has a certain value or not
returns true or false

const arr = 'kosul'
console.log(arr.includes('os')) -> true

// String.indexOf()
returns the first index of a given value in the given string
const str = "abcabcabc";
console.log(str.indexOf("b")); -> 1

// String.lastIndexOf()
returns the last index of a given value in the given string
const str = "abcabcabc";
console.log(str.lastIndexOf("b")); -> 7

// String.isWellFormed()
The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.
const strings = [
"ab\uD800",
"ab\uD800c",
"\uDFFFab",
"c\uDFFFab",
"abc",
"ab\uD83D\uDE04c",
];

for (const str of strings) {
console.log(str.isWellFormed());
}

->
false
false
false
false
true
true

// string.localeCompare()

The localeCompare() method in JavaScript is used to compare two strings in a way that respects the rules of a specific locale (language/culture). It is particularly useful for comparing strings in a culturally correct manner, especially when sorting strings in different languages or dealing with locale-specific rules for character ordering.

localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
const str1 = "cat";
const str2 = "bat";
console.log(str1.localeCompare(str2)); -> 1
console.log(str2.localeCompare(str1)); -> -1

// string.match()
The match() method in JavaScript is used to retrieve the result of matching a string against a regular expression. It is typically used for pattern searching or extracting substrings from a string.
str.match(regexp);

// string.matchAll()
The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

// string.normalize()
The normalize() method of String values returns the Unicode Normalization Form of this string.
-converts UTF to english
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";

console.log(name1.normalize()); -> Amélie

// string.padEnd()
used to add values at the end of a string and get a string of desired length
padEnd(targetLength)
padEnd(targetLength, padString)

const str1 = "Breaded Mushrooms";
console.log(str1.padEnd(25, ".")); -> "Breaded Mushrooms........"

// string.padStart()
used to add values at the start of a string
padStart(targetLength)
padStart(targetLength, padString)
const str1 = "Breaded Mushrooms";
console.log(str1.padStart(25, ".")); -> "........Breaded Mushrooms"

// string.repeat()
used to repeat a string for a certain times

const mood = "Happy! "
console.log(`I feel ${mood.repat(3)}`) ->"I feel Happy! Happy! Happy! "

// string.replace()
used to replace first string pattern with desired string
replace(pattern, replacement)

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("i", "my")); -> "I thmynk Ruth's dog is cuter than your dog!"

// string.replaceAll()
used to replace all strings patterns with desired string
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("i", "my")); -> "I thmynk Ruth's dog mys cuter than your dog!"

// string.search()
The search() method in JavaScript is used to search a string for a pattern (specified using a regular expression) and returns the index of the first match. If no match is found, it returns -1.
str.search(regexp);
const paragraph = "I think Ruth's dog is cuter than your dog!";
const regex = /[^\w\s']/g;
console.log(paragraph.search(regex)); -> 41

// string.substr()
substr(start)
substr(start, length)
-used to extract parts of a string
-Works with negative start to count from the end, but length is still positive.
const str = "JavaScript";
console.log(str.substr(4, 6)); -> 'Script'

// string.substring()
substring(indexStart)
substring(indexStart, indexEnd)

- if indexstart > indexend it swaps them
- if both are -ve then it treats them as 0

// string.slice()
slice(indexStart)
slice(indexStart, indexEnd)
used to create a new string based on a start index and end index
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.slice(14)); -> " dog is cuter than your dog!"
console.log(paragraph.slice(14, 27)); -> " dog is cuter"

// string.split()
used to convert a string to an array
const paragraph = "I think Ruth's dog is cuter than your dog!";
const arr = paragraph.split();
console.log(arr); -> [ "I think Ruth's dog is cuter than your dog!" ]

const arr = paragraph.split(" ");
console.log(arr);
->
[
'I', 'think',
"Ruth's", 'dog',
'is', 'cuter',
'than', 'your',
'dog!'
]

// string.toLowerCase()
// string.toUpperCase()

// string.toLocaleLowerCase()
converts ot lower case based on locale-specific mapping

// string.toLocaleUpperCase()
converts ot upper case based on locale-specific mapping

// .tostring()
a method used to convert a value to a string
const val = 123
const str = val.tostring()

// string.trim()
used to remove white space from both sides of a string
const str = " abc "
str.trim()
console.log(str) -> 'abc'

// string.trimStart()
used to remove white space from the start of a string
const str = " abc "
str.trimStart()
console.log(str) -> 'abc '

// string.trimEnd()
used to remove white space form the end of a string
const str = " abc "
str.trimEnd()
console.log(str) -> ' abc'

// string.valueOf()
returns the value of a string

const str = 'This is cool'
for(const char of str){
console.log(char)
}
->
T
h
i
s

i
s

c
o
o
l


```
