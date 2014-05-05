<?php
/**
 * Created by PhpStorm.
 * User: nevada
 * Date: 16.01.14
 * Time: 10:41
 */

namespace Web\Bundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class FrontendBuilder extends ContainerAware {

    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav navbar-nav')
            ->addChild('menu.frontend.about', array('uri' => '#', 'attributes' => array('class'=>'dropdown')))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.tarifs', array('route' => 'tarifs', 'attributes' => array('class'=>'dropdown')))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('menu.frontend.webmodules', array('route' => 'webmodules'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('Преимущества', array('route' => 'we_are_the_best'));
        $menu['menu.frontend.about']
            ->addChild('menu.frontend.work', array('route' => 'steps'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('menu.frontend.portfolio', array('route' => 'sonata_media_gallery_index'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->setChildrenAttributes(array ('class'=>'dropdown-menu'));
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.standart', array('route' => 'tarifs'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.develop', array('route' => 'tarifs'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.copywriting', array('route' => 'tarifs'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->setLinkAttributes(array ());
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.hosting', array('route' => 'tarifs'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->setChildrenAttributes(array ('class'=>'dropdown-menu'));
        $menu
            ->addChild('menu.frontend.order', array('route' => 'order_new'))
            ->setExtra('translation_domain', 'WebBundle')
            ->setLinkAttribute('class','btn btn-primary btn-lg btn-order');
        return $menu;
    }






    public function modulesMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav')
            ->addChild('Дизайн', array('uri' => '#1'));
        $menu
            ->addChild('Типы структуры', array('uri' => '#2'));
        $menu
            ->addChild('Разделы сайта', array('uri' => '#3'));
        $menu
            ->addChild('Поисковая оптимизация', array('uri' => '#4'));
        $menu
            ->addChild('Социальные сети', array('uri' => '#5'));
        $menu
            ->addChild('Интерактив', array('uri' => '#6'));
        $menu
            ->addChild('Управление сайтом', array('uri' => '#7'));

        return $menu;
    }


} 