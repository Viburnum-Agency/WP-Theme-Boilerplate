<?php

//Remove unnecessary WordPress scripts and styles
add_action('after_setup_theme', function () {
  remove_action('wp_head', 'wp_generator');
  remove_action('wp_head', 'print_emoji_detection_script');
  remove_action('wp_print_styles', 'print_emoji_styles');
  add_action('wp_enqueue_scripts', function () {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('classic-theme-styles');
    wp_dequeue_style('global-styles');
  });
});

//Add own configs, styles and scripts
add_action('after_setup_theme', function () {
  add_theme_support('post-thumbnails');

  register_nav_menus([]);

  add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/assets/dist/css/style.min.css', [], wp_get_theme()->get('Version'));
    wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/assets/dist/js/bundle.min.js', [], wp_get_theme()->get('Version'), true);
  });
});


