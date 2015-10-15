<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
	
	'*' => array(
        'tablePrefix' => 'craft',
    ),

	'.com' => array(
	// The database server name or IP address. Usually this is 'localhost' or '99.198.119.130'.
	'server' => '127.0.0.1',

	// The database username to connect with.
	'user' => 'wiwsc_poet',

	// The database password to connect with.
//	'password' => '3MtmV9VJ8b5rTT42',
	'password' => 'MourningStar1!',

	// The name of the database to select.
	'database' => 'wiwsc_poet',
    ),
   
	'.dev' => array(
	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
//	'server' => '127.0.0.1',
    'server' => '99.198.119.130',

	// The database username to connect with.
//	'user' => 'root',
	'user' => 'wiwsc_poet',


	// The database password to connect with.
//	'password' => '3MtmV9VJ8b5rTT42',
//	'password' => 'root',
	'password' => 'MourningStar1!',


	// The name of the database to select.
//	'database' => 'PoetSite',
	'database' => 'wiwsc_poet',

    )

);