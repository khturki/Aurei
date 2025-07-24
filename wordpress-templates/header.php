<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Header -->
<header class="header">
    <div class="container">
        <div class="header-content">
            <a href="<?php echo home_url(); ?>" class="logo">
                <?php 
                $logo_url = get_template_directory_uri() . '/assets/aurei-logo.webp';
                if (file_exists(get_template_directory() . '/assets/aurei-logo.webp')): 
                ?>
                    <img src="<?php echo $logo_url; ?>" alt="Aurei Logo">
                <?php endif; ?>
                <span><?php bloginfo('name'); ?></span>
            </a>
            
            <nav>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-links',
                    'container' => false,
                    'fallback_cb' => function() {
                        echo '<ul class="nav-links">
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#dashboard">Dashboard</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>';
                    }
                ));
                ?>
            </nav>
            
            <div class="header-cta">
                <a href="#contact" class="btn btn-outline">Contact Sales</a>
                <a href="#demo" class="btn btn-primary">Request Demo</a>
            </div>
        </div>
    </div>
</header>