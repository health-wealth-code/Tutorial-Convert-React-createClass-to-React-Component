/**
 * Import Assets
 */
import '../scss/style.scss';
import '../scss/editor.scss';

/**
 * Block Dependencies
 */
import classnames from 'classnames';

/**
 * Component Testing
 *
 * Delete as applicable.
 */
// import CheckBoxList from '../../../components/original/react-checkbox-list';
// import CheckBoxList from '../../../components/patched/react-checkbox-list';
import CheckBoxList from '../../../components/final/react-checkbox-list/CheckBoxList.js';

/**
 * Internal Block Libraries
 */
const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
} = wp.editor;
const {
	PanelBody,
	PanelRow,
} = wp.components;

/**
 * Register secure block
 */
export default registerBlockType(
	'hwc/tutorial-reateclass-component',
	{
		title:       __( ' Tutorial: Convert React.createClass to React.Component', 'tutorial-reateclass-component' ),
		description: __( 'How to get a component written with React.createClass to work in later versions of React.', 'tutorial-reateclass-component' ),
		category:   'layout',
		icon:       'book',
		keywords:   [
			__( 'Tutorial' ),
			__( 'React.createClass' ),
			__( 'React.Component' ),
		],
		attributes: {
			selectedOptions: {
				type: 'array',
				default: [],
			},
		},
		supports: {
			align: false,
		},
		edit: props => {
			const { attributes: { selectedOptions }, className, setAttributes } = props;

			const onChangeSelectedOptions = selectedOptions => { setAttributes( { selectedOptions } ) };

			let options = [
				{ value: 'option-1', label: __( 'Option 1', 'tutorial-reateclass-component' ), checked: selectedOptions.indexOf( 'option-1' ) > -1 },
				{ value: 'option-2', label: __( 'Option 2', 'tutorial-reateclass-component' ), checked: selectedOptions.indexOf( 'option-2' ) > -1 },
				{ value: 'option-3', label: __( 'Option 3', 'tutorial-reateclass-component' ), checked: selectedOptions.indexOf( 'option-3' ) > -1 },
				{ value: 'option-4', label: __( 'Option 4', 'tutorial-reateclass-component' ), checked: selectedOptions.indexOf( 'option-4' ) > -1 },
			];

			return [
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'tutorial-reateclass-component' ) }>
						<PanelRow>
						<CheckBoxList
							onChange={ onChangeSelectedOptions }
							defaultData={ options }
						/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>,
				<div>
					<h1>Options</h1>
					<p>Your selected options are:</p>
					{ selectedOptions.indexOf( 'option-1' ) > -1 ? (
						<p>Option 1</p>
					) : null }
					{ selectedOptions.indexOf( 'option-2' ) > -1 ? (
						<p>Option 2</p>
					) : null }
					{ selectedOptions.indexOf( 'option-3' ) > -1 ? (
						<p>Option 3</p>
					) : null }
					{ selectedOptions.indexOf( 'option-4' ) > -1 ? (
						<p>Option 4</p>
					) : null }
				</div>
			];
		},
		save: props => {
			const { attributes: { selectedOptions }, className, setAttributes } = props;

			return (
				<div>
					<h1>Options</h1>
					<p>Your selected options are:</p>
					{ selectedOptions.indexOf( 'option-1' ) > -1 ? (
						<p>Option 1</p>
					) : null }
					{ selectedOptions.indexOf( 'option-2' ) > -1 ? (
						<p>Option 2</p>
					) : null }
					{ selectedOptions.indexOf( 'option-3' ) > -1 ? (
						<p>Option 3</p>
					) : null }
					{ selectedOptions.indexOf( 'option-4' ) > -1 ? (
						<p>Option 4</p>
					) : null }
				</div>
			);
		},
	},
);
