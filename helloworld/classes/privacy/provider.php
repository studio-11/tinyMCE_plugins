<?php
namespace tiny_helloworld\privacy;

defined('MOODLE_INTERNAL') || die();

class provider implements \core_privacy\local\metadata\null_provider {
    /**
     * @return string
     */
    public static function get_reason() : string {
        return get_string('privacy:metadata', 'tiny_helloworld');
    }
}
