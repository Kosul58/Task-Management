# Async in JS

```JS

// Callback in JS

// A callback is a funciton passed as an argument to another function


const func1 = () => {
    console.log('Callback Example')
}

const func2 = (func1) => {
    func1() // This is a callback function
}

func2(func1)

// Problems with callback


function f1(f2){
    f2(f3){
        f3(f4){
            f4(f5){
                f5(f6){
                    f6()
                }
                f6(f8){
                    f8()
                }
                f7(f9){
                    f9()
                }
            }
        }
    }
}

//  1-> Error Handling
//  2-> Callback Hell

// When multiple asynchronous functions depend upon each other , callbacks get deeply nested.
// This makes code hard to read, understand and maintain.
// Codes that are hard to understand and maintan will lead to more bugs and errors

// Promise in JS
// Promise is like a container that stores the result of an asynchronous operation

const promise1 = new Promise((res,rej)=> {
    res()
    res()
})


const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            res("Promise resolved successfully!");
        } else {
            rej("Promise rejected due to an error!");
        }
    }, 2000);
});

promise1
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


fetch(`https://apicall/?query=${query}`)
    .then((response) => response.json())
    .then((data) => console.log("User:", data))
    .catch((error) => console.log("Error:", error));


// Benefits of Promises

// 1-> can chain promises instead of nesting callbacks

// 2-> makes error handling easier

// Promise methods

// Promise.all([])

// Promise.allSettled([])

// Promise.race([])

// Promise.any([])


// async and await in JS

```
