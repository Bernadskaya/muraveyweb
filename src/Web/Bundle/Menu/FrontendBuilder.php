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
            ->addChild('menu.frontend.tarifs', array('uri' => '/tarifs', 'attributes' => array('class'=>'dropdown')))
            ->setExtra('translation_domain', 'WebBundle');
        $menu
            ->addChild('menu.frontend.news', array('uri' => '/news'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('menu.frontend.webmodules', array('uri' => '/webmodules'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('Преимущества', array('uri' => '/preimuschestva'));
        $menu['menu.frontend.about']
            ->addChild('О платформе', array('uri' => '/o_platforme'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('menu.frontend.work', array('uri' => '/poryadok_raboty'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->addChild('menu.frontend.portfolio', array('uri' => '/media/gallery'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.about']
            ->setChildrenAttributes(array ('class'=>'dropdown-menu'));
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.standart', array('uri' => '/tarifs#modules'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.develop', array('uri' => '/tarifs#develop'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.copywriting', array('uri' => '/tarifs#copywriting'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->setLinkAttributes(array ());
        $menu['menu.frontend.tarifs']
            ->addChild('menu.frontend.hosting', array('uri' => '/tarifs#hosting'))
            ->setExtra('translation_domain', 'WebBundle');
        $menu['menu.frontend.tarifs']
            ->setChildrenAttributes(array ('class'=>'dropdown-menu'));
        $menu
            ->addChild('menu.frontend.order', array('route' => 'order_new'))
            ->setExtra('translation_domain', 'WebBundle')
            ->setLinkAttribute('class','btn btn-lg btn-success');
        return $menu;
    }

    public function modulesMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav')
            ->addChild('Разделы, виджеты и плагины', array('uri' => '#1'));
        $menu
            ->addChild('Варианты структуры', array('uri' => '#3'));
        $menu
            ->addChild('Поисковая оптимизация', array('uri' => '#5'));
        $menu
            ->addChild('Управление сайтом', array('uri' => '#7'));

        return $menu;
    }


} 