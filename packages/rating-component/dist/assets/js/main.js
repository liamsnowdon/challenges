(() => {
  const RatingComponent = {
    el: null,
    initialStateEl: null,
    finishedStateEl: null,
    numberEls: null,
    submitEl: null,
    ratingEl: null,
    rating: null,

    initialize () {
      this.el = document.querySelector('.js-rating');
      this.initialStateEl = this.el.querySelector('.js-rating-initial-state');
      this.finishedStateEl = this.el.querySelector('.js-rating-finished-state');
      this.numberEls = this.el.querySelectorAll('.js-rating-number');
      this.ratingEl = this.el.querySelector('.js-rating-rating');
      this.submitEl = this.el.querySelector('.js-rating-submit');

      this.connectEvents();
    },

    connectEvents () {
      this.numberEls.forEach((el, index) => {
        el.addEventListener('click', this.setRating.bind(this, index + 1));
      });

      this.submitEl.addEventListener('click', this.submitRating.bind(this));
    },

    setRating (value) {
      this.rating = value
      this.numberEls.forEach((el, index) => {
        if (index === value - 1) {
          el.classList.add('rating__number--active')
        } else {
          el.classList.remove('rating__number--active')
        }
      })
    },

    submitRating () {
      this.ratingEl.innerText = `You selected ${this.rating} out of 5`;

      this.initialStateEl.style.display = 'none';
      this.finishedStateEl.style.display = '';
    },
  }

  RatingComponent.initialize();
})()
