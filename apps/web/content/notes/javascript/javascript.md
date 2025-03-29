# Scope in JavaScript
## Global scope
## Function scope
## Block scope

    {
        let、const  // global scope
        var  //global scope

        function(){
        // This is a function
        var  //function scope
        let、const   //function scope
        ......
        }

                  {
        // This is a block
        var  //global scope
        let、const   //block scope
        ......
        }

    }

# Asynchronous function
&nbsp;&nbsp;&nbsp;
## `async`/`await`
`async`/`await` is a **special syntax** to work with promises

`async function` declare a **async function**(whick always return a Promise).

`await` makes a function (The function containing `await` expressions) pause、wait for a (resolved) Promise ; after the `await` expression returns the resolved value of the promise ，the function continues
* The `await` keyword is only valid inside `async function`( Since `await` wait for a promise ).
* An `async function` can contain **zero or more** *await* expressions.
* `await` makes an `async function` behave as though they're synchronous (by suspending execution until the returned promise is fulfilled or rejected)
* A promise can be resolved or rejected

# Primitives
## Boolean
- Everything With a "Value" is True. (**0**, **0n**, **-0** is false)

- Everything Without a "Value" is False. (`""`, `null`, `undefined` and `NaN` is false)
- Booleans are generally used for **Conditional testing**


## Type Coercion
- Coercion takes place when the operands of an expression are of different data types ; 
- **aNumber + aString**, the number is always converted to the string type;
- **aNumber - aString**, the string is converted to a number;

  `"foo"` is converted to the number `NaN`

  `"3"` is converted to the number `3`
- **operand1 == operand2** ,both operands are converted to the same type before compare


**Implicit Type coercion** :automatic conversion of values from one data type to another ;
# Objects
## Properties
- Accessing/Setting Properties of a JavaScript object

  `myCar.make ='Ford';` or `myCar['make']='Ford';`

# Operators
**Destructuring assignment** unpack values (arrays , properties from objects) into distinct variables
## || (Logical or)
- || returns the value of **one of the specified operands**

  `42 || false` return 42

## Destructuring assignment

## Nullish coalescing assignment -  `??`


 