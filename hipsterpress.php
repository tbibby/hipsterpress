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

	private function check_objc_swift {
		//need these globals to check whether we need to load
		global $post, $wp_query;
		//string to hold display contents
		$contents_to_display = '';
		//are we on a single post/page?
		if( is_singular() ) {
				$contents_to_display = $post->post_content;
			}
		//else we're displaying more than one post
		else {
			//get the ids we're displaying
			$ids_being_displayed = wp_list_pluck( $wp_query->posts, 'ID');
			//get the content of all these ids
			foreach( $ids_being_displayed as $single_id) {
				$contents_to_display .= get_post_field( 'post_content', $single_id ); 
				}
			}
		
	}

?>
