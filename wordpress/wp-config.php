<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpvamppy' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`/=1][ Hfb kc<[(g>vR_7.J@O}ryRH9M?d&CA>4yTMTZ>N659:.&9;P/Wy3XTfc' );
define( 'SECURE_AUTH_KEY',  '{etjJoxM?`Vbe@x1e{06F1.MVn08pA8@)#@sUF!fqba!mQnMA72kh)~B1l*;KGc(' );
define( 'LOGGED_IN_KEY',    '!rZAHpn>@ei7pxuM+,]xPAOu4c)`rVeBBNA`d$tQF?t_XWm,$V-9t^~KMkOhSH[D' );
define( 'NONCE_KEY',        'k_50I}=um`x{B+-HEh&L{$cA}t|9?Q[:`ZX,>eMSSd5LK({-E|z^_6X(KroBS~kq' );
define( 'AUTH_SALT',        'I]^hi*f(eJVh!O.0ihO4Qt!pU^&O>Im(:HANC`nZb;W.%c: 6[P!7 2R7j?$W[kU' );
define( 'SECURE_AUTH_SALT', '=~[,ldrJX@RD;CIun+A7%uMYa;k@;` 1MFb[F_Jf OQg%R(-r% I;qWiAO0v3^DG' );
define( 'LOGGED_IN_SALT',   '^}{NC.sJuhN9/UW%5MU=tdpXF4=@!-*[AZj+>ZFx%dtpAE,*v+a8RAklVi?~$[y{' );
define( 'NONCE_SALT',       '0O9;As)J[AAC+5,%WM^L>r.pK4/&o;t>x@|t i!}XnF<<9i3x*4Cx>,}Qw/D0]Z_' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
