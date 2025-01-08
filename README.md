# This is a sample of how to get started on tailwind

To start with tailwind

npm init (this will create a package.json)
copy the commands in the tailwind site
on tailwind config copy the content path.
you can modify the path to your desired folder or path ("./dist/*.{html,js}")

you can also modify the command to run the tailwind on the package.json
by adding the "dev" then pasting the command u can simply run it using "npm run dev"

"scripts": 
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tailwindcss -i ./src/input.css -o ./src/output.css --watch"

also add a build in the package.json on the scripts after the dev. then link in the html.
"build": "tailwindcss -i ./src/input.css -o ./dist/style.css --minify"
- npm run build (use this command to apply the style)


to make your own utilitiy classes or save all the utility classes in one class to reuse it, just add a @layer components in input.css file

@layer components {
    .card {
        @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl
    }
}
put all the utility classes after the @apply


if you install tailwind in react or vite, you can use the ./ instead of myProject so it will install the packages inside the current folder and will not create a new directory