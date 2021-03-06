<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
 
'*' => array(
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'poetadmin',
    ),
 'poet.dev' => array(
        'devMode' => false,
    ),

 '*.com' => array(
        'cooldownDuration' => 0,
    )
);
