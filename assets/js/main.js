/* =========================================================
   Russian Manicure by Elena — site script
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     ЕДИНЫЕ ССЫЛКИ — меняйте здесь
     BOOKING_URL: ссылка кнопок «Book an Appointment»
     (сейчас ведёт на Instagram, пока нет платформы записи)
     --------------------------------------------------------- */
  var BOOKING_URL = 'https://www.instagram.com/helena_nails_atlanta/';
  var INSTAGRAM_URL = 'https://www.instagram.com/helena_nails_atlanta/';
  var LANG_KEY = 'rmbe-lang';

  /* ---------------------------------------------------------
     ПЕРЕВОДЫ
     --------------------------------------------------------- */
  var DICT = {
    en: {
      'meta.title': 'Russian Manicure by Elena | Russian Manicure in Duluth, GA',
      'meta.desc': 'Professional Russian manicure by Elena in Duluth, Georgia. Explore manicure services, portfolio, location and appointment information.',

      'ui.skip': 'Skip to main content',
      'ui.wordmark': 'Russian Manicure by Elena — home',
      'ui.instagram': 'Instagram — Russian Manicure by Elena',
      'ui.nav_primary': 'Primary navigation',
      'ui.nav_mobile': 'Mobile navigation',
      'ui.nav_footer': 'Footer navigation',
      'ui.lang_group': 'Language: English or Russian',
      'ui.menu_open': 'Open menu',
      'ui.menu_close': 'Close menu',
      'ui.lightbox': 'Image viewer',
      'ui.close': 'Close',
      'ui.prev': 'Previous image',
      'ui.next': 'Next image',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.location': 'Location',
      'nav.contact': 'Contact',

      'cta.book': 'Book an Appointment',
      'cta.eyebrow': 'Contact',
      'cta.h2': 'Ready for your next manicure?',
      'cta.p': 'Book your appointment on Instagram — or message on WhatsApp for services and current pricing.',

      'hero.eyebrow': 'Duluth, Georgia — Open 24 Hours',
      'hero.book': 'Book an appointment',
      'hero.st1': 'Precision.',
      'hero.st2': 'Elegance.',
      'hero.st3': 'Beautifully detailed.',
      'hero.lead': 'Russian manicure in Duluth, Georgia — meticulous cuticle work, precise shaping and a clean, polished finish.',
      'hero.btn_portfolio': 'View Portfolio',

      'about.label': 'Russian Manicure — Duluth, Georgia',
      'about.side': 'About',
      'about.h2': 'About Elena',
      'about.p1': 'Elena is the nail artist behind Russian Manicure by Elena — a studio on Yorkwood St in Duluth, Georgia, open 24 hours.',
      'about.p2': 'Her approach is quiet and precise: careful preparation, detailed cuticle work, even shaping and a clean finish. Every appointment is unhurried and tailored to the client in the chair.',
      'about.p3': 'The goal is simple — elegant, refined nails and a studio where every detail is taken care of.',

      'services.label': 'What I do',
      'services.h2': 'Services',
      'services.note': 'Want to know current prices and services? Message me on WhatsApp or Instagram.',
      'services.ask': 'Ask on WhatsApp',

      'art.label': 'The technique',
      'art.h2': 'The Art of Russian Manicure',
      'art.p': 'Russian manicure is a technique built around careful preparation. The focus is on the cuticle line, accurate shaping and a smooth, even surface — so the nail looks neat up close and the polish sits cleanly.',
      'art.s1t': 'Preparation',
      'art.s1d': 'Careful work with the nail plate and cuticle area before styling.',
      'art.s2t': 'Cuticle work',
      'art.s2d': 'Detailed, precise cuticle work for a clean, defined line.',
      'art.s3t': 'Shaping',
      'art.s3d': 'An even, balanced shape that follows the natural nail.',
      'art.s4t': 'Finish',
      'art.s4d': 'A smooth, polished surface and a neat final look.',

      'portfolio.label': 'Selected work',
      'portfolio.h2': 'Portfolio',
      'portfolio.link': 'Follow on Instagram',

      'why.label': 'The difference',
      'why.h2': 'Why Choose Russian Manicure by Elena',
      'why.t1': 'Precision',
      'why.d1': 'Detailed and meticulous manicure work.',
      'why.t2': 'Personalized Service',
      'why.d2': 'A manicure experience tailored to each client.',
      'why.t3': 'Elegant Results',
      'why.d3': 'Clean, refined and sophisticated nail styling.',
      'why.t4': 'Attention to Detail',
      'why.d4': 'A careful approach to every appointment.',

      'loc.eyebrow': 'Find the studio',
      'loc.h2': 'Location',
      'loc.name_label': 'Studio',
      'loc.addr_label': 'Address',
      'loc.addr': 'Yorkwood St, Duluth, GA 30097, United States',
      'loc.hours_label': 'Opening hours',
      'loc.hours': 'Open 24 hours',
      'loc.btn': 'Get Directions',
      'loc.map_title': 'Map to Russian Manicure by Elena',
      'loc.map_badge': 'Open in Google Maps',

      'acc.h2': 'Accessibility',
      'acc.1': 'Wheelchair-accessible car park',
      'acc.2': 'Wheelchair-accessible entrance',
      'acc.3': 'Wheelchair-accessible toilet',
      'amen.h2': 'Amenities',
      'amen.1': 'Toilet',
      'pay.h2': 'Payments',
      'pay.1': 'Credit cards',
      'pay.2': 'Debit cards',

      'footer.addr': 'Duluth, GA 30097, United States',
      'footer.nav_label': 'Navigation',
      'footer.lang_label': 'Language',
      'footer.access_label': 'Accessibility',
      'footer.rights': '© 2026 Russian Manicure by Elena. All rights reserved.',
      'footer.to_top': 'Back to top',

      'img.portrait_alt': 'Portrait placeholder — replace with Elena\u2019s photo',
      'img.portfolio_alt': 'Image placeholder for manicure portfolio'
    },

    ru: {
      'meta.title': 'Russian Manicure by Elena — русский маникюр в Далуте, Джорджия',
      'meta.desc': 'Профессиональный русский маникюр от Елены в Далуте, штат Джорджия. Услуги, портфолио, расположение и запись на приём.',

      'ui.skip': 'Перейти к основному содержимому',
      'ui.wordmark': 'Russian Manicure by Elena — на главную',
      'ui.instagram': 'Instagram — Russian Manicure by Elena',
      'ui.nav_primary': 'Основная навигация',
      'ui.nav_mobile': 'Навигация в меню',
      'ui.nav_footer': 'Навигация в подвале',
      'ui.lang_group': 'Язык: английский или русский',
      'ui.menu_open': 'Открыть меню',
      'ui.menu_close': 'Закрыть меню',
      'ui.lightbox': 'Просмотр изображений',
      'ui.close': 'Закрыть',
      'ui.prev': 'Предыдущее изображение',
      'ui.next': 'Следующее изображение',

      'nav.home': 'Главная',
      'nav.about': 'О мастере',
      'nav.services': 'Услуги',
      'nav.portfolio': 'Портфолио',
      'nav.location': 'Расположение',
      'nav.contact': 'Контакты',

      'cta.book': 'Записаться',
      'cta.eyebrow': 'Контакты',
      'cta.h2': 'Готовы к своему следующему маникюру?',
      'cta.p': 'Запишитесь на приём в Instagram — или напишите в WhatsApp по услугам и актуальным ценам.',

      'hero.eyebrow': 'Далут, Джорджия — открыто 24 часа',
      'hero.book': 'Записаться',
      'hero.st1': 'Точность.',
      'hero.st2': 'Элегантность.',
      'hero.st3': 'Изящная детализация.',
      'hero.lead': 'Русский маникюр в Далуте, штат Джорджия: деликатная работа с кутикулой, точная форма и чистый аккуратный финиш.',
      'hero.btn_portfolio': 'Смотреть работы',

      'about.label': 'Русский маникюр — Далут, Джорджия',
      'about.side': 'О мастере',
      'about.h2': 'Об Елене',
      'about.p1': 'Елена — мастер студии Russian Manicure by Elena: Yorkwood St, Далут, штат Джорджия, работа ежедневно, 24 часа.',
      'about.p2': 'Её подход спокойный и точный: тщательная подготовка, деликатная работа с кутикулой, ровная форма и чистый финиш. Каждая встреча проходит без спешки и подстраивается под клиента.',
      'about.p3': 'Задача проста — элегантные, ухоженные ногти и внимание к каждой детали.',

      'services.label': 'Что я делаю',
      'services.h2': 'Услуги',
      'services.note': 'Актуальные цены и услуги узнаёте в WhatsApp или Instagram — напишите, и я пришлю всю информацию.',
      'services.ask': 'Написать в WhatsApp',

      'art.label': 'Техника',
      'art.h2': 'Искусство русского маникюра',
      'art.p': 'Русский маникюр — техника, построенная вокруг тщательной подготовки. Внимание сосредоточено на линии кутикулы, точной форме и гладкой ровной поверхности — поэтому ногти выглядят опрятно вблизи, а покрытие ложится чисто.',
      'art.s1t': 'Подготовка',
      'art.s1d': 'Тщательная работа с ногтевой пластиной и зоной кутикулы перед покрытием.',
      'art.s2t': 'Работа с кутикулой',
      'art.s2d': 'Деликатная, точная работа с кутикулой для чистой, ровной линии.',
      'art.s3t': 'Форма',
      'art.s3d': 'Ровная, сбалансированная форма, которая следует за натуральным ногтем.',
      'art.s4t': 'Финиш',
      'art.s4d': 'Гладкая ровная поверхность и опрятный итоговый вид.',

      'portfolio.label': 'Избранные работы',
      'portfolio.h2': 'Портфолио',
      'portfolio.link': 'Смотреть в Instagram',

      'why.label': 'Отличие',
      'why.h2': 'Почему выбирают Russian Manicure by Elena',
      'why.t1': 'Точность',
      'why.d1': 'Детальная и тщательная работа.',
      'why.t2': 'Индивидуальный подход',
      'why.d2': 'Сервис, настроенный под каждого клиента.',
      'why.t3': 'Изящный результат',
      'why.d3': 'Чистый, утончённый и благородный стиль.',
      'why.t4': 'Внимание к деталям',
      'why.d4': 'Внимательное отношение к каждому визиту.',

      'loc.eyebrow': 'Как нас найти',
      'loc.h2': 'Расположение',
      'loc.name_label': 'Студия',
      'loc.addr_label': 'Адрес',
      'loc.addr': 'Yorkwood St, Далут, Джорджия 30097, США',
      'loc.hours_label': 'Часы работы',
      'loc.hours': 'Открыто 24 часа',
      'loc.btn': 'Построить маршрут',
      'loc.map_title': 'Карта до Russian Manicure by Elena',
      'loc.map_badge': 'Открыть в Google Картах',

      'acc.h2': 'Доступность',
      'acc.1': 'Парковка для колясок',
      'acc.2': 'Вход для колясок',
      'acc.3': 'Туалет для колясок',
      'amen.h2': 'Удобства',
      'amen.1': 'Туалет',
      'pay.h2': 'Способы оплаты',
      'pay.1': 'Кредитные карты',
      'pay.2': 'Дебетовые карты',

      'footer.addr': 'Далут, Джорджия 30097, США',
      'footer.nav_label': 'Навигация',
      'footer.lang_label': 'Язык',
      'footer.access_label': 'Доступность',
      'footer.rights': '© 2026 Russian Manicure by Elena. Все права защищены.',
      'footer.to_top': 'Наверх',

      'img.portrait_alt': 'Заглушка портрета — замените на фото Елены',
      'img.portfolio_alt': 'Изображение-заглушка для портфолио'
    }
  };

  var currentLang = 'en';

  function t(key) {
    var d = DICT[currentLang] || DICT.en;
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    if (Object.prototype.hasOwnProperty.call(DICT.en, key)) return DICT.en[key];
    return key;
  }

  function applyLang(lang) {
    if (!DICT[lang]) lang = 'en';
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val !== key) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var idx = pair.indexOf(':');
        if (idx < 0) return;
        var attr = pair.slice(0, idx).trim();
        var key = pair.slice(idx + 1).trim();
        var val = t(key);
        if (attr && val !== key) el.setAttribute(attr, val);
      });
    });

    document.documentElement.lang = lang;
    document.title = t('meta.title');

    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));

    ['og:title', 'og:description'].forEach(function (name) {
      var m = document.querySelector('meta[property="' + name + '"]');
      if (m) m.setAttribute('content', t(name === 'og:title' ? 'meta.title' : 'meta.desc'));
    });
    var tw = document.querySelector('meta[name="twitter:title"]');
    if (tw) tw.setAttribute('content', t('meta.title'));
    var twd = document.querySelector('meta[name="twitter:description"]');
    if (twd) twd.setAttribute('content', t('meta.desc'));

    var locale = document.getElementById('og-locale');
    if (locale) locale.setAttribute('content', lang === 'ru' ? 'ru_RU' : 'en_US');

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* noop */ }

    updateLightboxText();
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-set-lang]');
    if (!btn) return;
    applyLang(btn.getAttribute('data-set-lang'));
  });

  /* ---------------------------------------------------------
     ССЫЛКИ ЗАПИСИ
     --------------------------------------------------------- */
  document.querySelectorAll('[data-book-link]').forEach(function (a) {
    a.setAttribute('href', BOOKING_URL);
  });
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    if (a.hasAttribute('data-book-link')) return;
    a.setAttribute('href', BOOKING_URL);
  });

  /* ---------------------------------------------------------
     HEADER: состояние при скролле + активный пункт меню
     --------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__list a, .mobile-menu__nav a'));
  var watched = ['home', 'about', 'services', 'portfolio', 'location', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && watched.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-current', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    watched.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------------------------------------------------------
     МОБИЛЬНОЕ МЕНЮ
     --------------------------------------------------------- */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuTimer = null;

  function setMenuLabel(open) {
    if (!menuToggle) return;
    menuToggle.setAttribute('aria-label', t(open ? 'ui.menu_close' : 'ui.menu_open'));
  }

  function openMenu() {
    if (!mobileMenu || !menuToggle) return;
    clearTimeout(menuTimer);
    mobileMenu.hidden = false;
    requestAnimationFrame(function () {
      mobileMenu.classList.add('is-open');
    });
    menuToggle.setAttribute('aria-expanded', 'true');
    setMenuLabel(true);
    document.body.classList.add('menu-open');
    var first = mobileMenu.querySelector('a');
    if (first) first.focus({ preventScroll: true });
  }

  function closeMenu(returnFocus) {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    setMenuLabel(false);
    document.body.classList.remove('menu-open');
    clearTimeout(menuTimer);
    menuTimer = setTimeout(function () { mobileMenu.hidden = true; }, 380);
    if (returnFocus) menuToggle.focus({ preventScroll: true });
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      if (menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(false);
      else openMenu();
    });

    mobileMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1080 && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(false);
      }
    });
  }

  /* ---------------------------------------------------------
     ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
     --------------------------------------------------------- */
  var revealItems = document.querySelectorAll('[data-reveal]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------------------------------------------------------
     ЛАЙТБОКС
     --------------------------------------------------------- */
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCount = document.getElementById('lightbox-count');
  var lbClose = document.getElementById('lightbox-close');
  var lbPrev = document.getElementById('lightbox-prev');
  var lbNext = document.getElementById('lightbox-next');
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  var lbIndex = 0;
  var lbLastFocus = null;

  function renderLightbox() {
    var item = galleryItems[lbIndex];
    if (!item || !lbImg) return;
    var thumb = item.querySelector('img');
    lbImg.src = item.getAttribute('href');
    lbImg.alt = thumb ? thumb.alt : '';
    if (lbCount) lbCount.textContent = (lbIndex + 1) + ' / ' + galleryItems.length;
  }

  function updateLightboxText() {
    if (!lightbox || lightbox.hidden) return;
    renderLightbox();
    lightbox.setAttribute('aria-label', t('ui.lightbox'));
    if (lbClose) lbClose.setAttribute('aria-label', t('ui.close'));
    if (lbPrev) lbPrev.setAttribute('aria-label', t('ui.prev'));
    if (lbNext) lbNext.setAttribute('aria-label', t('ui.next'));
  }

  function openLightbox(i) {
    if (!lightbox) return;
    lbIndex = i;
    lbLastFocus = document.activeElement;
    renderLightbox();
    lightbox.hidden = false;
    document.body.classList.add('menu-open');
    if (lbClose) lbClose.focus({ preventScroll: true });
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('menu-open');
    if (lbImg) lbImg.src = '';
    if (lbLastFocus && lbLastFocus.focus) lbLastFocus.focus({ preventScroll: true });
  }

  function step(dir) {
    lbIndex = (lbIndex + dir + galleryItems.length) % galleryItems.length;
    renderLightbox();
  }

  galleryItems.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(i);
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', function () { step(-1); });
  if (lbNext) lbNext.addEventListener('click', function () { step(1); });

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || lightbox.hidden) return;

    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'ArrowRight') { step(1); return; }
    if (e.key === 'ArrowLeft') { step(-1); return; }

    if (e.key === 'Tab') {
      var focusables = [lbClose, lbPrev, lbNext].filter(Boolean);
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (focusables.indexOf(document.activeElement) === -1) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ---------------------------------------------------------
     СТАРТОВЫЙ ЯЗЫК
     --------------------------------------------------------- */
  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* noop */ }
  applyLang(saved === 'ru' ? 'ru' : 'en');
})();
