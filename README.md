# Solid-Webcomponent
Minimal template repo for building Web Components with SolidJS, TypeScript, and Vite. Styling with plain CSS. 

## Usage

`npm i` to install dependencies

`npm run build` to build
`npm run dev` to build on file changes

Change the name of the component in `package.json`, `vite.config.json`, and `WebComponent.tsx`

Copy `dist/xxx.umd.js` into wherever you want to use the component and import it or import it directly from `dist` to enable hot reloading in the consumer project.

Adding the component to another project: `<xxx attr1="some_val" />`

