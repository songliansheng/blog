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
Everything With a "Value" is True ;

Everything Without a "Value" is False

# Operators - Destructuring assignment
**Destructuring assignment** unpack values (arrays , properties from objects) into distinct variables

### Destructuring assignment

### Nullish coalescing assignment -  `??`


 