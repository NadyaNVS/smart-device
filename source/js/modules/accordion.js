function initAccordion() {
  const accordionButtons = document.querySelectorAll('[data-button]');
  const accordionContent = document.querySelectorAll('[data-content-menu]');

  accordionButtons.forEach((item) => {
    item.addEventListener('click', () => {
      let content = item.nextElementSibling;
      if (content.style.maxHeight && item.classList.contains('is-open')) {
        accordionButtons.forEach(function (el) {
          el.classList.remove('is-open');
        });
        accordionContent.forEach(function (el) {
          el.style.maxHeight = null;
        });
      } else {
        accordionButtons.forEach(function (el) {
          el.classList.remove('is-open');
          item.classList.add('is-open');
        });
        accordionContent.forEach(function (el) {
          el.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        });
      }
    });
  });
}

export {initAccordion};
