## Keyword export
`export = Obj` ***[CommonJS/AMD]*** specifies a single object that is exported from the module

`export as namespace` ***[UMD]*** creates a global variable so it can be used without importing

UMD (Universal Module Definition)

## CommonJS

```
// someModule.cjs
const maxInterval = 12;

function getArrayLength(arr) {
 return arr.length;
}

module.exports = {
 getArrayLength,
 maxInterval,
};

// someOtherModule.cjs
const someModule = require("someModule");
const arrLength = someModule.getArrayLength(arr)

// Importing Only Specific Properties
const {getArrayLength} = require("someModule");
```
- `require()` is used to use/import a dependency ,this function make module available globally everywhere in the program


- `require()` takes a relative or an absolute path of the module file and returns what module is exporting
- `require()` statement sometimes also called as **import statement**

## ECMAScript 

```
// SomeModule.mjs
export function getArrayLength(arr: any[]): number;
export const maxInterval: 12;

```
