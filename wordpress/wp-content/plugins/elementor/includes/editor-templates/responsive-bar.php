<?php
namespace Elementor;

use Elementor\Core\Breakpoints\Breakpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// TODO: Use API data instead of this static array, once it is available.
$breakpoints = Plugin::$instance->breakpoints->get_active_breakpoints();

$breakpoints['desktop'] = [];

$breakpoint_label = esc_html__( 'Settings added to %1$s device will apply to %2$spx screens and down', 'elementor' );
?>

<script type="text/template" id="tmpl-elementor-templates-responsive-bar">
		<div id="e-responsive-bar__center">
			<div id="e-responsive-bar-switcher" class="e-responsive-bar--pipe">
			<?php foreach ( $breakpoints as $name => $breakpoint ) {
				if ( 'desktop' === $name ) {
					$tooltip_label = esc_html__( 'Settings added to Base device will apply to all breakpoints unless edited', 'elementor' );
				} else {
					$tooltip_label = sprintf( $breakpoint_label, $breakpoint->get_label(), $breakpoint->get_value() );
				}
				printf( '<label
					id="e-responsive-bar-switcher__option-%1$s"
					class="e-responsive-bar-switcher__option"
					for="e-responsive-bar-switch-%1$s"
					data-tooltip="%2$s">

					<input type="radio" name="breakpoint" id="e-responsive-bar-switch-%1$s" value="%1$s">
					<i class="eicon-device-%1$s" aria-hidden="true"></i>
					<span class="screen-reader-text">%2$s</span>
				</label>', $name, $tooltip_label );
			} ?>
			</div>
			<div id="e-responsive-bar-scale">
				<div id="e-responsive-bar-scale__minus"></div>
				<div id="e-responsive-bar-scale__value-wrapper"><span id="e-responsive-bar-scale__value">100</span>%</div>
				<div id="e-responsive-bar-scale__plus"><i class="eicon-plus" aria-hidden="true"></i></div>
				<div id="e-responsive-bar-scale__reset"><i class="eicon-undo" aria-hidden="true"></i></div>
			</div>
		</div>
		<div id="e-responsive-bar__end">
			<div id="e-responsive-bar__size-inputs-wrapper" class="e-flex e-align-items-center">
				<label for="e-responsive-bar__input-width">W</label>
				<input type="number" id="e-responsive-bar__input-width" class="e-responsive-bar__input-size" autocomplete="off">
				<label for="e-responsive-bar__input-height">H</label>
				<input type="number" id="e-responsive-bar__input-height" class="e-responsive-bar__input-size" autocomplete="off">
			</div>
			<button id="e-responsive-bar__settings-button" class="e-responsive-bar__button e-responsive-bar--pipe"
					data-tooltip="<?php echo __( 'Manage Breakpoints', 'elementor' ); ?>">
				<span class="elementor-screen-only"><?php echo __( 'Settings', 'elementor' ); ?></span>
				<i class="eicon-cog" aria-hidden="true"></i>
			</button>
			<button id="e-responsive-bar__close-button" class="e-responsive-bar__button"
					data-tooltip="<?php echo __( 'Exit', 'elementor' ); ?>">
				<span class="elementor-screen-only"><?php echo __( 'Close', 'elementor' ); ?></span>
				<i class="eicon-close" aria-hidden="true"></i>
			</button>
		</div>
</script>
