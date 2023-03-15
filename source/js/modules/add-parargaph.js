function showParagraph() {
  const paragraph = document.querySelector('[data-about-paragraph]');
  const paragraphButton = document. querySelector('[data-about-button]');

  paragraphButton.addEventListener('click', function () {
    if (paragraph.classList.contains('is-closed')) {
      paragraph.classList.remove('is-closed');
      paragraph.classList.add('is-opened');
      paragraphButton.textContent = 'Свернуть';
    } else {
      paragraph.classList.remove('is-opened');
      paragraph.classList.add('is-closed');
      paragraphButton.textContent = 'Подробнее';
    }
  });
}

export {showParagraph};
