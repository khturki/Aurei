<?php
// Theme support
function aurei_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'aurei_theme_support');

// Enqueue styles and scripts
function aurei_enqueue_assets() {
    wp_enqueue_style('aurei-style', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'aurei_enqueue_assets');

// Register navigation menus
function aurei_register_menus() {
    register_nav_menus(array(
        'primary' => 'Primary Navigation',
        'footer' => 'Footer Navigation'
    ));
}
add_action('init', 'aurei_register_menus');

// Handle contact form submission
function handle_contact_form() {
    if (!isset($_POST['contact_nonce']) || !wp_verify_nonce($_POST['contact_nonce'], 'contact_form_nonce')) {
        wp_die('Security check failed');
    }

    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $company = sanitize_text_field($_POST['company']);
    $message = sanitize_textarea_field($_POST['message']);

    // Email to admin
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission - ' . get_bloginfo('name');
    $body = "New contact form submission:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Company: $company\n";
    $body .= "Message: $message\n";

    $headers = array('Content-Type: text/plain; charset=UTF-8');

    wp_mail($to, $subject, $body, $headers);

    // Redirect back with success message
    wp_redirect(home_url('/?message=success'));
    exit;
}
add_action('admin_post_nopriv_submit_contact_form', 'handle_contact_form');
add_action('admin_post_submit_contact_form', 'handle_contact_form');

// Add custom body classes
function aurei_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'aurei_body_classes');

// Customizer settings
function aurei_customize_register($wp_customize) {
    // Company Info Section
    $wp_customize->add_section('aurei_company_info', array(
        'title' => 'Company Information',
        'priority' => 30,
    ));

    // Company Email
    $wp_customize->add_setting('company_email', array(
        'default' => 'info@aurei.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('company_email', array(
        'label' => 'Company Email',
        'section' => 'aurei_company_info',
        'type' => 'email',
    ));

    // Company Phone
    $wp_customize->add_setting('company_phone', array(
        'default' => '+971 4 123 4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('company_phone', array(
        'label' => 'Company Phone',
        'section' => 'aurei_company_info',
        'type' => 'text',
    ));

    // Company Address
    $wp_customize->add_setting('company_address', array(
        'default' => 'Dubai, UAE',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('company_address', array(
        'label' => 'Company Address',
        'section' => 'aurei_company_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'aurei_customize_register');

// Helper function to get customizer values
function aurei_get_option($option, $default = '') {
    return get_theme_mod($option, $default);
}

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Clean up WordPress head
function aurei_clean_head() {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'aurei_clean_head');
?>