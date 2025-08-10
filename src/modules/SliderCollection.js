import getParams from '../utils/getParams';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const rootSelector = '[data-js-slider]';

class Slider {
  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    navigation: '[data-js-slider-navigation]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
  };

  defaultSliderParams = {
    sliderParams: {
      slidesPerView: 4,
      centeredSlides: false,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
    const customParams = getParams(this.rootElement, this.selectors.root);

    this.params = customParams ? customParams : this.defaultSliderParams;

    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation);
    if (this.navigationElement) {
      this.paginationElement = this.rootElement.querySelector(this.selectors.pagination);
      this.nextButtonElement = this.navigationElement.querySelector(this.selectors.nextButton);
    }

    this.init();
  }

  bindEvents() {}

  init() {
    this.swiper = new Swiper(this.swiperElement, {
      ...this.params.sliderParams,
      modules: [Navigation, Pagination],
      navigation: {
        disabledClass: 'swiper-button-next--return',
        nextEl: this.nextButtonElement,
      },
      keyboard: {
        enabled: true,
      },
    });

    this.handleLastSlideClick = () => {
      setTimeout(() => {
        this.swiper.slideTo(0);
      }, 300);
    };

    this.swiper.on('slideChange', () => {
      this.nextButtonElement?.removeEventListener('click', this.handleLastSlideClick);

      if (this.swiper.isEnd) {
        this.nextButtonElement.disabled = false;
        this.nextButtonElement?.addEventListener('click', this.handleLastSlideClick);
      }
    });
  }
}

class SliderCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element);
    });
  }
}

export default SliderCollection;
