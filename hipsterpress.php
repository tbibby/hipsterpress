<?php
/*
 * Plugin Name: hipsterpress
 * Version: 0.1
 * Plugin URI: http://thomas.bibby.ie/
 * Description: This is a plugin which attempts to mimic the behaviour of NSHipster by including Objective-C and Swift code, with syntax highlighting, and the ability to toggle between them
 * Author: Thomas Bibby
 * Author URI: http://thomas.bibby.ie/
 * Requires at least: 4.0
 * Tested up to: 4.0
 *
 * @package WordPress
 * @author Thomas Bibby
 * @since 1.0.0
 */
//don't allow calling of this directly
if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'plugins_loaded', array( 'hipsterpress', 'get_instance' ) );

class hipsterpress {

	protected static $instance = null;

	private function __construct() {
	
	}

	public static function activate() {

		}

	public static function deactivate() {

	}

	function check_objc_swift {
		
	}

?>
