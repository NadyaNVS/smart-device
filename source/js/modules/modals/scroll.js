function initScroll() {
  const scrollButton = document.querySelector('.promo__button');
  const showContent = document.getElementById('question');

  scrollButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    showContent.scrollIntoView({behavior: 'smooth'});
  });
}

export {initScroll};
