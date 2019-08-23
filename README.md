# Tutorial: Convert React.createClass to React.Component

How to get a component written with React.createClass to work in later versions of React.

This example contains code only, for full instructions visit https://mattwatson.codes/articles/broken-react-createclass-component-lets-fix-it/ and https://mattwatson.codes/articles/converting-react-createclass-to-react-component/

This tutorial covers three steps:

- Loading a broken React component that has been built using `React.createClass`
- Patching the React component by replacing `React.createClass` with `createReactClass`
- Rebuilding the component to use `React.Component`

## Note

I am using a WordPress Block Editor (Gutenberg) plugin to test the components, so there are a few WP plugin files in this build, however you can find the relevent files you need in the following locations:

- Original (broken): `/components/original/react-checkbox-list/Checkboxlist.js` (note the original licencing information is located here.

- Patched: `/components/patched/react-checkbox-list/Checkboxlist.js`

- Rebuild with `React.Component`: `/components/final/react-checkbox-list/Checkboxlist.js`

## Credits

In this example I am disecting [`react-checkbox-list` by Sony An](https://github.com/sonyan/react-checkbox-list) (available as [`react-checkbox-list` on NPM](https://www.npmjs.com/package/react-checkbox-list)), which was built with the unsupported `React.createClass` component at the time of writing this.

Note that I have submitted a Pull Request based on this tutorial so Sony can update it as appropriate.
