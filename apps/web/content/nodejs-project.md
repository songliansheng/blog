# Nextjs Setup
### Add GraphQL Client
```bash
pnpm install @apollo/client graphql
```
### Use Faunadb
```bash
pnpm install --save faunadb
```
or
```bash
yarn add faunadb
```
# Nextjs Trouble-shooting
### About Compilation
In turborepo ,`next dev --turbo` shouldn't be used ,`next dev`should be used instead.
# Using Turborepo
### (1) Configure workspaces
Specify your packages in **pnpm-workspace.yaml**

    packages:
    - "packages/*"
    - "apps/*"
### (2) Install Turbo(repo) globally
```bash
pnpm install turbo --global
```
### (3) Create turbo.json
    {
    "$schema": "https://turbo.build/schema.json"
    }

### (4) Define task dependency graph
Configure the **pipeline** key in the **turbo.json** configuration file at the **root of monorepo**

### (5) Edit .gitignore
    + .turbo
# Headless UI
```
Radix UI
```
```
Reach UI
```
```
Headless UI
```
```
Downshift
```
```
React Aria
```
```
Ariakit
```
# Common packages
### *next-transpile-modules(deprecated)*
### *@babel/preset-env*
### *@babel/preset-react*

