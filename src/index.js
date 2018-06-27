import './sass/index.scss'
import './js/demo-5/index'
/* 切换语言 */
var isEnglish = location.search.indexOf('english') !== -1

function setLanguage() {
    if (isEnglish) {
        $('body').removeClass('chinese').addClass('english')
    } else {
        $('body').removeClass('english').addClass('chinese')
    }

}

setLanguage()
$('.tab-language').click(function () {

    isEnglish = !isEnglish
    setLanguage()
})
var scale

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    hashNavigation: {
        watchState: true
    },
    mousewheel: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 可点击

    },
    on: {
        init: function () {
            this.myIndex = 0//activeIndex在滑动到一半时会切换，改用滑动完再切换的myIndex
            swiperAnimateCache(this)
            swiperAnimate(this)
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this)
        }
    }
})

