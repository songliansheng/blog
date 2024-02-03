## Miscellaneous
**JavaScript Object Notation** is a text-based **data format**

JSON can start with an Array

JSON exists as a (serialized) **string** , this means it can later be parsed and decoded into data types.

JSON's data saved in a .json file, consisting of a series of key/value pairs

You **can’t have comments** in JavaScript objects ; but you can make **fake comments** using underscores

`{__aComment__:"The weather is fine."}`

JSON doesn't (officially) support **octal numbers**
So json cannot use **leading zeros** in value


## The purpose of JSON
JSON is used to transmit data between a server and a browser

For app prototypes, JSON can be used in lieu of a database like MongoDB

## JSON.parse()
`JSON.parse()` convert **JSON to value/object**
## JSON.stringify()
`JSON.stringify()` convert **value/object to JSON**

This method need to be invoke before data to be  instored to memory
## Response.json()
`Response.json()` convert **Response body(JSON) to value/object**

## Can JSON Have Duplicate Keys ?
Yes, Only the last occurrence of a key is going to be saved when JSON data is parsed

But JSON files probably shouldn’t have duplicate keys, 
since JavaScript objects can’t have duplicate keys .
