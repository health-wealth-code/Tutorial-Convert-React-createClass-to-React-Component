# Tutorial: Convert React.createClass to React.Component

How to get a component written with React.createClass to work in later versions of React.

This example contains code only, for full instructions visit http://mattwatson.codes/...

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

## (Very) Rough Notes for Article

array is undefined

That is because React.PropTypes is undefined.

https://reactjs.org/docs/typechecking-with-proptypes.html

React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead.

Keeping to the same syntax add var PropTypes = require('prop-types');

You will also have to install it via npm https://www.npmjs.com/package/prop-types

npm install --save prop-types

Also replace instances of React.PropTypes with PropTypes

React.createClass is not a function

https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#new-deprecation-warnings

The biggest change is that we’ve extracted React.PropTypes and React.createClass into their own packages.

A drop in replacement is availble via NPM https://www.npmjs.com/package/create-react-class

npm install --save create-react-class

Add line var CreateReactClass = require('create-react-class');

Replace React.createClass with CreateReactClass

Module build failed: SyntaxError: The @jsx React.DOM pragma has been deprecated as of React 0.12

Remove the line

Replace module.exports = CreateReactClass({ with class CheckBoxList extends React.Component {

Remove the closing );

after the class, export it with export default CheckBoxList;

Use supported declarations:

'use strict';
import React from 'react';
import PropTypes from 'prop-types';

No need for createReactClass

Add a constructor

constructor( props ) {
	super( props );
	this.state = {
		data: [],
	}
}

We have moved the state declaration into here!

remove displayName: 'CheckBoxList',

Remove commas from the end of all functions!

propTypes: {
	defaultData: PropTypes.array,
	onChange: PropTypes.func
},

Now becomes

CheckBoxList.propTypes = {
	defaultData: PropTypes.array,
	onChange: PropTypes.func,
};

Before the export statement

getInitialState: function() {
	return {
		data: this.props.defaultData || []
	};
},

Now becomes

componentWillMount() {
	this.setState({
		data: this.props.defaultData
	});
}

for my example I removed the two functions

// uncheck all items in the list
reset: function() {
	var newData = [];
	this.state.data.forEach(function(item) {
		item.checked = false;
		newData.push(item);
	});

	this.setState({data: newData});
},

checkAll: function() {
	var newData = [];
	this.state.data.forEach(function(item) {
		item.checked = true;
		newData.push(item);
	});

	this.setState({data: newData});
},

but you can add them in. Using the followingn example

handleItemChange: function(e) {
	var selectedValues = [],
		newData = [];

	this.state.data.forEach(function(item) {
		if(item.value === e.target.value) {
			item.checked = e.target.checked;
		}
		if(item.checked) {
			selectedValues.push(item.value);
		}
		newData.push(item);
	});

	this.setState({data: newData});

	if(this.props.onChange) {
		this.props.onChange(selectedValues);
	}
},

Becomes

handleItemChange( e ) {
	var selectedValues = [],
		newData = [];

	this.state.data.forEach(function(item) {
		if(item.value == e.target.value) {
			item.checked = e.target.checked;
		}
		if(item.checked) {
			selectedValues.push(item.value);
		}
		newData.push(item);
	});

	this.setState( {data: newData} );

	if(this.props.onChange) {
		this.props.onChange(selectedValues);
	}
}

render: function() {

becomes

	render() {

you need to bind the function to this, do that in the constructor

this.handleItemChange = this.handleItemChange.bind( this );
