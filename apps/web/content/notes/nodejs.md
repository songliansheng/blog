# Setup Nodejs
### Install pnpm (Node Package Manager)
```
curl -fsSL https://get.pnpm.io/install.sh | sh -
```
### Install Node engines
```
pnpm env use --global lts
```
### Install Node Version Manager
`pnpm` can also be used as a **Node Version Manager** enable
```
curl  https://registry.npmjs.org/yarn
```

```
npm --proxy http://127.0.0.1:9910 install pnpm
```
```
npm config ls -l
```

# Nodejs-TroubleShooting

### Command 'pnpm' not found in Vscode
Enable pnpm in Node used by project.
# Migrate from npm to pnpm
### (1) Generates a pnpm-lock.yaml file(Optional)
This step is needed if package-lock.json/yarn.lock exists.
```bash
pnpm import
```
### (2) Clean up old files
Delete the node_modules folder , Delete package-lock.json/yarn.lock
### (3) Install the dependencies
```bash
pnpm install
```
### (4) Create pnpm-workspace.yaml(for monorepo)
    packages:
    - "apps/*"
    - 'packages/*'
### (5) Force pnpm to be used(Optional)
    "scripts": {
    "preinstall": "npx only-allow pnpm", 
     ...
    }
