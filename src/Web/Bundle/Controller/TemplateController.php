<?php
/**
 * Created by PhpStorm.
 * User: nevada
 * Date: 12.05.14
 * Time: 19:38
 */

namespace Web\Bundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TemplateController extends Controller {

    /**
     * Show list ads in group
     *
     */
    public function showAction($template) {

        return $this->render($template, array(
            'template'=>$template
        ));
    }

} 