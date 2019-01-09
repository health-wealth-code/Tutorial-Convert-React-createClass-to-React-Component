# Tutorial: Convert React.createClass to React.Component

How to get a component written with React.createClass to work in later versions of React.

This example contains code only, for full instructions visit http://mattwatson.codes/...

This tutorial covers three steps:

- Loading a broken React component that has been built using `React.createClass`
- Patching the React component by replacing `React.createClass` with `createReactClass`
- Rebuilding the component to use `React.Component`

Note that to test this component I am loading it within a the WordPress plugin as a component of the WordPress Block Editor (Gutenberg). You don't have to.

## Credits

In this example I am disecting [`react-checkbox-list` by Sony An](https://github.com/sonyan/react-checkbox-list) (available as [`react-checkbox-list` on NPM](https://www.npmjs.com/package/react-checkbox-list)), which was built with the unsupported `React.createClass` component at the time of writing this. 

Note that I have submitted a Pull Request based on this tutorial so Sony can update it as appropriate.
