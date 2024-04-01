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

# async/await
&nbsp;&nbsp;&nbsp;*async/await* is a **special syntax** to work with promises
## async
&nbsp;&nbsp;&nbsp; *async* key word is used when **declaring a *async* function** ,then *await* is permited within the function body.

 &nbsp;&nbsp;&nbsp; A *async* fuction **always** return a *Promise* , which will be **resolved/rejected**

 &nbsp;&nbsp;&nbsp; Async functions can contain **zero or more** *await* expressions.
 ## await
 &nbsp;&nbsp;&nbsp; The *await* keyword is **only valid inside** *async* functions.

 &nbsp;&nbsp;&nbsp; *Await expressions* *return* a **resolved Promise**(not promise itself)

 &nbsp;&nbsp;&nbsp; *await* is used with promise-returning function , which makes the functions behave as though they're synchronous (by suspending execution until the returned promise is fulfilled or rejected)
# Primitives
## Boolean
- Everything With a "Value" is True. (**0**, **0n**, **-0** is false)

- Everything Without a "Value" is False. (**“”**, **null**, **undefined** and **NaN** is false)
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


 