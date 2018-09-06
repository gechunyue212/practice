import './sass/index.scss'
import './js/demo-5/index'
import './js/language'
import { secondAnimate, fourAnimate, fiveAnimate } from './js/animate'

var mySwiper = new Swiper('.main-swiper-container', {
  direction: 'vertical',
  hashNavigation: {
    watchState: true
  },
  mousewheel: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination-main',
    clickable: true // 可点击

  },
  on: {
    init: function () {
      this.myIndex = 0//activeIndex在滑动到一半时会切换，改用滑动完再切换的myIndex
      swiperAnimateCache(this)
      swiperAnimate(this)
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this)
    },
    slideChangeTransitionStart: function () {
      switch (this.activeIndex) {
        case 1:
          secondAnimate.restart()
          break
        case 3:
          fourAnimate.restart()
          break
        case 5:
          fiveAnimate.restart()
          break

      }
    }
  }
})
var tiemSwiper = new Swiper('.time-swiper-container', {
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.swiper-button-next-time',
    prevEl: '.swiper-button-prev-time',
  }
})
new Swiper('.team-swiper-wrap', {
  slidesPerView: 'auto',
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next-people',
    prevEl: '.swiper-button-prev-people',
  },
})
var bannerSwiper = new Swiper ('.banner-swiper', {
  autoplay:{
    disableOnInteraction:false
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  }
})


