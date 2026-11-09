(() => {
  document.documentElement.classList.remove('no-js');
  const header = document.querySelector('#site-header');
  const menuButton = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-menu nav a')];
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    header.classList.toggle('menu-is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
  });
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const sectionLinks = navLinks.filter((link) => link.hash && document.querySelector(link.hash));
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('is-active', active);
          if (active && link.closest('.desktop-nav')) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionLinks.forEach((link) => sectionObserver.observe(document.querySelector(link.hash)));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.visible = 'true';
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach((element) => {
      element.style.setProperty('--reveal-delay', `${element.dataset.delay || 0}ms`);
      revealObserver.observe(element);
    });
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelector('#current-year').textContent = String(new Date().getFullYear());

  const form = document.querySelector('#contact-form');
  const fields = ['name', 'email', 'subject', 'message'];
  const setError = (name, message) => {
    const input = form.elements.namedItem(name);
    const error = document.querySelector(`#${name}-error`);
    input.setAttribute('aria-invalid', String(Boolean(message)));
    error.textContent = message;
  };
  form.addEventListener('input', (event) => {
    const name = event.target.name;
    if (fields.includes(name) && event.target.getAttribute('aria-invalid') === 'true') setError(name, '');
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const errors = {
      name: data.name.trim().length < 2 ? 'Please enter your name' : data.name.trim().length > 100 ? 'Name must be 100 characters or fewer' : '',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) ? '' : 'Please enter a valid email',
      subject: data.subject.trim().length > 150 ? 'Subject must be 150 characters or fewer' : '',
      message: data.message.trim().length < 10 ? 'Message should be at least 10 characters' : data.message.trim().length > 2000 ? 'Message must be 2,000 characters or fewer' : '',
    };
    fields.forEach((field) => setError(field, errors[field] || ''));
    const invalid = fields.find((field) => errors[field]);
    const note = document.querySelector('#form-note');
    note.classList.remove('is-success');
    if (invalid) {
      note.textContent = 'Please check the highlighted fields.';
      form.elements.namedItem(invalid).focus();
      return;
    }
    const subject = data.subject.trim() || `Portfolio enquiry from ${data.name.trim()}`;
    const body = `${subject}\n\n${data.message.trim()}\n\n—\n${data.name.trim()}\n${data.email.trim()}`;
    const whatsapp = `https://wa.me/254798027285?text=${encodeURIComponent(body)}`;
    note.textContent = 'Opening WhatsApp…';
    note.classList.add('is-success');
    window.location.href = whatsapp;
    form.reset();
  });
})();
