const initMainNav = () => {

  const page = document.querySelector('html');
  const button = document.querySelector('[data-btn-nav]');
  const header = document.querySelector('[data-header]');
  const mainNav = document.querySelector('[data-main-nav]');
  const body = document.querySelector('body');

  if (!button || !header || !mainNav || !body || !page) {
    return;
  }

  let headerHeight = header.clientHeight;

  // Устанавливаем слежение за высотой хедера и передаём переменную в стили

  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

  window.addEventListener('resize', function () {
    headerHeight = header.clientHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  });

  // -----------------------------------------------------------------

  const toggleActive = () => {
    mainNav.addEventListener('click', closeNav);
    header.classList.toggle('is-active');
    mainNav.style['padding-top'] = `${headerHeight}px`;
    if (body.classList.contains('scroll-lock')) {
      window.scrollLock.enableScrolling();
      mainNav.removeEventListener('click', closeNav);
      page.style.scrollBehavior = 'smooth';
      setTimeout(() => {
        header.style.zIndex = '100';
      }, 800);
    } else {
      window.scrollLock.disableScrolling();
      page.style.scrollBehavior = 'unset';
      header.style.zIndex = '102';
    }
  };

  const closeNav = (event) => {
    if (event.target.classList.contains('main-nav__link')) {
      window.scrollLock.enableScrolling();
      header.classList.remove('is-active');
      setTimeout(() => {
        page.style.scrollBehavior = 'smooth';
      }, 100);
      setTimeout(() => {
        header.style.zIndex = '100';
      }, 800);
    }
    mainNav.removeEventListener('click', closeNav);
  };

  button.addEventListener('click', toggleActive);
};

export {initMainNav};
