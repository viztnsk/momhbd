function slidesPlagin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');
  slides[activeSlide].classList.add('slide__type_active');
  slides[activeSlide].querySelector('.slide__title').classList.add('slide__title_type_active');
  const clearActiveClasses = () => {
    slides.forEach(slide => {
      slide.classList.remove('slide__type_active');
      slide.querySelector('.slide__title').classList.remove('slide__title_type_active');
    })
  }
  const addActiveClasses = (slide) => {
    slide.classList.add('slide__type_active');
    slide.querySelector('.slide__title').classList.add('slide__title_type_active');
  }

  slides.forEach(slide => slide.addEventListener('click', () => {
    clearActiveClasses();
    addActiveClasses(slide)
  }));
}

slidesPlagin();

