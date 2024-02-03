# Schema
Every GraphQL service use **schemas** to defines a set of types which completely describe the set of possible data you can query

GraphQL services can be written in any language. Since we can't rely on a specific programming language syntax to talk about GraphQL schemas, we use the "GraphQL schema language"

A GraphQL schema consist of:
- **Objects**：(Broadly speaking) A type with fields.
- **Scalars**: As opposed to object ,**scalars** can't have fields/sub-selections in the query , scalars refer to **concrete data**

**Objects**、**scalars** and **enums** are the only kinds of types you can define in GraphQL

**Interface** : Abstract types

**Union** :

# Objects in schema
- **Regular objects**
- **Query**
- **Mutation**

Query 、Mutation has special status of being the "entry point" into the schema
# Scalars in schema
- Int
- Float
- String
- Boolean
- ID
- enum : Enums are a special kind of scalar
### Type modifiers
Non-Null modifier： **！**
# Miscellaneous
## Selection set
All the stuff between square brackets(A set of fields requested in an operation, or nested within another field) is called *selection set* .

Selection sets are **not allowed** on fields that return scalar types, such as Int or String

Passing complex objects(instead of scalars) as arguments into a field : **Input types**


