/**
 * NAVIGATION.JS — Minimal hamburger menu for mobile navigation
 * Keyboard-accessible, progressive enhancement, no dependencies
 */

(function() {
  'use strict';

  // Initialize navigation on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }

  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) {
      return; // Navigation elements not found, exit gracefully
    }

    // Toggle menu when button is clicked
    navToggle.addEventListener('click', function() {
      const isActive = navMenu.classList.contains('active');
      
      if (isActive) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when Escape key is pressed
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
        navToggle.focus(); // Return focus to toggle button
      }
    });

    // Close menu when clicking outside of nav
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });

    function openMenu() {
      navMenu.classList.add('active');
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }
})();
