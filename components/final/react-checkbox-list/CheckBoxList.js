'use strict';
import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxList extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			data: [],
		}
		this.handleItemChange = this.handleItemChange.bind( this );
	}

	componentWillMount() {
		this.setState({
			data: this.props.defaultData,
		});
	}

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

	render() {
		var options;
		options = this.state.data.map(function(item, index) {
			return (
				<div key={item.id} className="checkbox">
					<label>
						<input
							type="checkbox"
							value={item.value}
							onChange={this.handleItemChange}
							checked={item.checked ? true : false} /> {item.label}
					</label>
				</div>
			);
		}.bind(this));

		return (
			// fieldgroup and legend needed
			<div role="group">
				{options}
			</div>
		);
	}
};

CheckBoxList.propTypes = {
	defaultData: PropTypes.array,
	onChange: PropTypes.func,
};

export default CheckBoxList;
