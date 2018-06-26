import './sass/index.scss'

var scaleW = window.innerWidth / 320
var scaleH = window.innerHeight / 480
var scale
var resizes = document.querySelectorAll('.resize')
for (var j = 0; j < resizes.length; j++) {
    resizes[j].style.width = parseInt(resizes[j].style.width) * scaleW + 'px'
    resizes[j].style.height = parseInt(resizes[j].style.height) * scaleH + 'px'
    resizes[j].style.top = parseInt(resizes[j].style.top) * scaleH + 'px'
    resizes[j].style.left = parseInt(resizes[j].style.left) * scaleW + 'px'

}
var scales = document.querySelectorAll('.txt')
for (var i = 0; i < scales.length; i++) {
    ss = scales[i].style
    ss.webkitTransform = ss.MsTransform = ss.msTransform = ss.MozTransform = ss.OTransform = ss.transform = 'translateX(' + scales[i].offsetWidth * (scaleW - 1) / 2 + 'px) translateY(' + scales[i].offsetHeight * (scaleH - 1) / 2 + 'px)scaleX(' + scaleW + ') scaleY(' + scaleH + ') '
}


var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    hashNavigation: true,
    mousewheel: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true // 可点击
    },
    on: {
        init: function () {
            this.myIndex = 0//activeIndex在滑动到一半时会切换，改用滑动完再切换的myIndex
            swiperAnimateCache(this)
            swiperAnimate(this)
        },
        progress: function () {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                var progress = this.slides[i].progress
                var translate, boxShadow
                translate = progress * this.height * 0.8
                scale = 1 - Math.min(Math.abs(progress * 0.2), 1)
                if (i == this.myIndex) {
                    slide.transform('translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')')
                    slide.css({'z-index': 0, 'boxShadow': '0px 0px 10px rgba(0,0,0,.5)'})
                }
            }
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this)
        },
        transitionEnd: function () {
            this.myIndex = this.activeIndex
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transform('')
                slide.css('z-index', 1)
            }
            this.mousewheel.enable()
        },
        setTransition: function (speed) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(speed + 'ms')
            }
            this.mousewheel.disable()
        }
    }
})

