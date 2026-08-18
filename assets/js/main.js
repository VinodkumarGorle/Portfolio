/**
 * Vinod Kumar Gorle — Portfolio Main JavaScript
 * Theme toggle, navigation, scroll animations, UI interactions
 */

(function () {
  'use strict';

  const THEME_KEY = 'portfolio-theme';
  const DEFAULT_THEME = 'dark';

  /* Apply stored theme immediately to prevent flash */
  document.documentElement.setAttribute('data-theme', localStorage.getItem(THEME_KEY) || DEFAULT_THEME);

  /* ---- Theme Toggle ---- */
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('i');
      const label = toggleBtn.getAttribute('aria-label');
      if (theme === 'dark') {
        if (icon) {
          icon.className = 'bi bi-sun-fill';
        }
        toggleBtn.setAttribute('aria-label', 'Switch to light mode');
        toggleBtn.title = 'Light mode';
      } else {
        if (icon) {
          icon.className = 'bi bi-moon-fill';
        }
        toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        toggleBtn.title = 'Dark mode';
      }
    }
  }

  function initTheme() {
    applyTheme(getStoredTheme());

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const current = getStoredTheme();
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  /* ---- Active Navigation ---- */
  function initActiveNav() {
    const path = window.location.pathname;
    let currentPage = path.split('/').pop() || 'index.html';
    if (!currentPage || !currentPage.includes('.html')) {
      currentPage = 'index.html';
    }
    const isProjectDetail = path.includes('/projects/') && currentPage.endsWith('.html');
    const navLinks = document.querySelectorAll('.navbar-ai .nav-link');

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkPage = href.split('/').pop();
      const isProjectsLink = linkPage === 'projects.html';

      if (isProjectDetail && isProjectsLink) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else if (!isProjectDetail && linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ---- Mobile Nav Close ---- */
  function initMobileNav() {
    const navCollapse = document.getElementById('navbarNav');
    if (!navCollapse) return;

    const navLinks = navCollapse.querySelectorAll('.nav-link');
    const toggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navCollapse.classList.contains('show')) {
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
            collapse.hide();
          } else {
            navCollapse.classList.remove('show');
          }
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!navCollapse.classList.contains('show')) return;
      const isClickInside = navCollapse.contains(e.target) || (toggler && toggler.contains(e.target));
      if (!isClickInside && typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        collapse.hide();
      }
    });
  }

  /* ---- Scroll Animations ---- */
  function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Navbar Scroll Shadow ---- */
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar-ai');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ---- Current Year ---- */
  function initCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initActiveNav();
    initMobileNav();
    initScrollAnimations();
    initNavbarScroll();
    initCurrentYear();
  });
})();
