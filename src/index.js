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
        clickable: true // 可点击

    },
    on: {
        init: function () {
            this.myIndex = 0//activeIndex在滑动到一半时会切换，改用滑动完再切换的myIndex
            swiperAnimateCache(this)
            swiperAnimate(this)
        },
        slideChangeTransitionEnd: function () {
            switch (this.activeIndex) {
                case 1:
                    secondAnimateFn()
                    break
            }
            swiperAnimate(this)
        },
        slideChangeTransitionStart: function () {
            function initSecondEls() {
                var $svg = $('.swiper-slide2 svg'),

                    svgBg = $svg.find('.svg-bg')[0],
                    svgItem1 = $svg.find('.svg-item1')[0],
                    svgItem2 = $svg.find('.svg-item2')[0],
                    svgItem3 = $svg.find('.svg-item3')[0],
                    svgText1 = $svg.find('.svg-text1')[0],
                    svgText2 = $svg.find('.svg-text2')[0],
                    svgText3 = $svg.find('.svg-text3')[0],
                    line0 = $svg.find('.svg-line0')[0],
                    line1 = $svg.find('.svg-line1')[0],
                    line2 = $svg.find('.svg-line2')[0],
                    line3 = $svg.find('.svg-line3')[0],
                    line4 = $svg.find('.svg-line4')[0],
                    line5 = $svg.find('.svg-line5')[0]
                TweenMax.set(svgText1, {
                    opacity: 0,
                    scaleX: .3

                })
                TweenMax.set(svgText2, {
                    opacity: 0,
                    scaleX: .3

                })
                TweenMax.set(svgText3, {
                    opacity: 0,
                    scaleX: .3

                })
                TweenMax.set(svgBg, {
                    opacity: 0,
                    x: 280,
                    y: 2000
                })
                TweenMax.set(svgItem1, {
                    x: 324,
                    y: 736
                })
                TweenMax.set(svgItem2, {
                    y: 637,
                    x: 1165
                })
                TweenMax.set(svgItem3, {
                    x: 1038,
                    y: 175
                })
                elInit(line0)
                elInit(line1)
                elInit(line2)
                elInit(line3)
                elInit(line4)
                elInit(line5)
                elInit(svgItem1)
                elInit(svgItem2)
                elInit(svgItem3)

                function elInit(el) {
                    TweenMax.set(el, {
                        scale: '0,0',
                        rotation: 100,
                        transformOrigin: 'left bottom'
                    })
                }
            }

            switch (this.activeIndex) {
                case 1:
                    initSecondEls()
                    break
            }
        }
    }
})


// 第二屏的动画

function secondAnimateFn() {
    var secondAnimate = new TimelineMax(),
        $svg = $('.swiper-slide2 svg'),
        svgBg = $svg.find('.svg-bg')[0],
        svgText1 = $svg.find('.svg-text1')[0],
        svgText2 = $svg.find('.svg-text2')[0],
        svgText3 = $svg.find('.svg-text3')[0],
        svgItem1 = $svg.find('.svg-item1')[0],
        svgItem2 = $svg.find('.svg-item2')[0],
        svgItem3 = $svg.find('.svg-item3')[0],
        line0 = $svg.find('.svg-line0')[0],
        line1 = $svg.find('.svg-line1')[0],
        line2 = $svg.find('.svg-line2')[0],
        line3 = $svg.find('.svg-line3')[0],
        line4 = $svg.find('.svg-line4')[0],
        line5 = $svg.find('.svg-line5')[0]

    secondAnimate
        .to(svgBg, 1, {
            x: 280,
            y: 0,
            opacity: 1

        })
        .to(line0, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(svgItem1, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            rotation: 0
        })
        .to(line1, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(svgText1, .543, {
            opacity: 1,
            scaleX: 1
        })
        .to(line1, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(line2, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(svgItem3, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            rotation: 0
        })
        .to(line3, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(svgText2, .543, {
            opacity: 1,
            scaleX: 1
        })
        .to(line4, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(svgItem2, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            rotation: 0
        })
        .to(line5, .543, {
            transformOrigin: 'left bottom',
            scaleY: 1,
            scaleX: 1,
            rotation: 0
        })
        .to(svgText3, .543, {
            opacity: 1,
            scaleX: 1
        })

}

