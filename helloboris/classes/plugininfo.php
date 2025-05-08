<?php

namespace tiny_inspiration;

use editor_tiny\plugin;

class plugininfo extends plugin {
    #[\Override]
    public static function is_enabled(
        \context $context,
        array $options,
        array $fpoptions,
        ?editor_tiny\editor $editor = null
    ): bool {
        // Users must have permission to generate inspiration.
        return has_capability('tiny/inspiration:inspire', $context);
    }
}
