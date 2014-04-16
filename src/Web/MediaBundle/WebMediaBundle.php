<?php

namespace Web\MediaBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class WebMediaBundle extends Bundle
{

    public function getParent()
    {
        return 'AntMediaBundle';
    }
}
