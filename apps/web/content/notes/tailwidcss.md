## Install Tailwind CSS
```bash
npm install -D tailwindcss
```

## Create 'tailwind.config.js' file
```bash
npx tailwindcss init
```
## Configure project's template paths

### Add the paths to all of your template files in your tailwind.config.js file.
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }


## Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Start the CLI build process
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```