<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * @var int $post_id
 * @var boolean $is_permanently_delete
 */

$config_url = add_query_arg(
	[ 'force_delete_kit' => '1' ],
	get_delete_post_link( $post_id, '', $is_permanently_delete )
);
?>
<h4>
	<?php echo esc_html__( 'Are you sure you want to delete your Site Settings?', 'elementor' ); ?>
</h4>

<p>
	<?php echo esc_html__( 'By removing this template you will delete your entire Site Settings. If this template is deleted, all associated settings: Global Colors & Fonts, Theme Style, Layout, Background, and Lightbox settings will be removed from your existing site. This action can not be undone.', 'elementor' ); ?>
</p>

<br/>

<a class="btn btn-danger" href="<?php echo $config_url; ?>">
	<?php echo esc_html__( 'Delete', 'elementor' ); ?>
</a>
<a class="btn btn-primary" href="javascript:history.back()">
	<?php echo esc_html__( 'Keep my settings', 'elementor' ); ?>
</a>

<style>
	/* In WordPress "die" screen there is very basic style, so the current css is required for basic button styles. */
	.btn {
		text-decoration: none;
		padding: 9px 20px;
		font-weight: 500;
		border-radius: 3px;
	}

	.btn-danger {
		display: inline-block;
		color: #a00;
	}

	.btn-danger:hover, .btn-danger:focus, .btn-danger:active {
		color: #dc3232;
	}

	.btn-primary {
		color: #fff;
		background-color: #007cba;
		margin: 0 10px;
	}

	.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
		background-color: #0071a1;
		color: #fff;
	}
</style>
