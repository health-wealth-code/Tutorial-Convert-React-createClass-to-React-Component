<?php
/**
 * Tutorial: Convert React.createClass to React.Component
 *
 * @link              https://github.com/mattwatsoncodes/Tutorial-Convert-React.createClass-to-React.Component
 * @package           hwc\tutorial-reateclass-component
 *
 * Plugin Name:       Tutorial: Convert React.createClass to React.Component
 * Plugin URI:        https://github.com/mattwatsoncodes/Tutorial-Convert-React.createClass-to-React.Component
 * Description:       How to get a component written with React.createClass to work in later versions of React.
 * Version:           1.0.0
 * Author:            Matt Watson <hello@mattwatson.codes>
 * Author URI:        https://healthwealthcode.com
 * License:           GPL-3.0+
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:       tutorial-reateclass-component
 * Domain Path:       /languages
 */

/**
 * Copyright (C) 2018  Matt Watson  hello@mattwatson.codes
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 3, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

namespace hwc\tutorial_createclass_component;

// Abort if this file is called directly.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Constants.
define( 'HWC_TUTORIAL_CREATE_CLASS_COMPONENT_ROOT', __FILE__ );
define( 'HWC_TUTORIAL_CREATE_CLASS_COMPONENT_PREFIX', 'hwc_tutorial_createclass_component' );

/**
 * The main loader for this plugin
 */
class Main {

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {}

	/**
	 * Run all of the plugin functions.
	 *
	 * @since 1.0.0
	 */
	public function run() {

		/**
		 * Load Text Domain
		 */
		load_plugin_textdomain( 'tutorial-reateclass-component', false, HWC_TUTORIAL_CREATE_CLASS_COMPONENT_ROOT . '\languages' );

		/**
		 * Actions and Hooks
		 */

		// Load Assets
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) ); // Load Editor Assets
		add_action( 'enqueue_block_assets', array( $this, 'assets' ) );               // Load Front End Assets
	}

	/**
	 * Enqueue Editor JS and CSS
	 */
	public function editor_assets() {

		$scripts = '/assets/js/editor.js';
		$styles  = '/assets/css/editor.css';

		// Enqueue editor JS.
		wp_enqueue_script(
			'tutorial-reateclass-component-editor-js',
			plugins_url( $scripts, __FILE__ ),
			[ 'wp-i18n', 'wp-blocks', 'wp-components', 'wp-editor' ],
			filemtime( plugin_dir_path( __FILE__ ) . $scripts )
		);

		// Enqueue edtior Styles.
		wp_enqueue_style(
			'tutorial-reateclass-component-editor-css',
			plugins_url( $styles, __FILE__ ),
			[ 'wp-blocks' ],
			filemtime( plugin_dir_path( __FILE__ ) . $styles )
		);
	}

	/**
	 * Enqueue JS and CSS
	 */
	public function assets() {

		$scripts = '/assets/js/script.js';
		$styles  = '/assets/css/style.css';

		// Enqueue JS.
		wp_enqueue_script(
			'tutorial-reateclass-component-js',
			plugins_url( $scripts, __FILE__ ),
			[ 'wp-i18n', 'wp-blocks', 'wp-components', 'wp-editor' ],
			filemtime( plugin_dir_path( __FILE__ ) . $scripts )
		);

		// Enqueue Styles.
		wp_enqueue_style(
			'tutorial-reateclass-component-css',
			plugins_url( $styles, __FILE__ ),
			[ 'wp-blocks' ],
			filemtime( plugin_dir_path( __FILE__ ) . $styles )
		);
	}
}

$main = new Main();
$main->run();
