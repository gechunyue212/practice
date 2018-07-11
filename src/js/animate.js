export var secondAnimate = new TimelineLite({paused: true})
export var fourAnimate = new TimelineLite({paused: true})
export var fiveAnimate = new TimelineLite({paused: true})

// 初始化动画
function initAnimate () {
  // 第二屏的初始化
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
    x: 374,
    y: 736
  })
  TweenMax.set(svgItem2, {
    y: 647,
    x: 1205
  })
  TweenMax.set(svgItem3, {
    x: 1038,
    y: 230
  })
  TweenMax.set(line0, {
    strokeDashoffset: 324,
    strokeDasharray: '324'
  })
  elInit(line1)
  elInit(line2)
  elInit(line3)
  elInit(line4)
  elInit(line5)
  elInit(svgItem1)
  elInit(svgItem2)
  elInit(svgItem3)

  function elInit (el) {
    TweenMax.set(el, {
      scale: '0,0',
      transformOrigin: 'left bottom'
    })
  }

  // 第四屏的初始化
  var $fourSvg = $('.slide4-svg'),
   img1 = $fourSvg.find('.slide4-svg-img1')[0],
   img2 = $fourSvg.find('.slide4-svg-img2')[0],
   img3 = $fourSvg.find('.slide4-svg-img3')[0],
   img4 = $fourSvg.find('.slide4-svg-img4')[0],
   img5 = $fourSvg.find('.slide4-svg-img5')[0],
   img6 = $fourSvg.find('.slide4-svg-img6')[0]

  elInit2(img1, 300)
  elInit2(img2, 300)
  elInit2(img3, 800)
  elInit2(img4, 800)
  elInit2(img5, 800)
  elInit2(img6, 800)

  function elInit2 (el, y) {
    TweenMax.set(el, {
      y: y
    })
  }

  // 第5屏初始化
  var $svg5 = $('.tech-svg'),
   startLine1 = $svg5.find('#i2'),
   endLine1 = $svg5.find('#i1'),
   yuan1 = $svg5.find('#_4'),
   yuan2 = $svg5.find('#_3'),
   yuan3 = $svg5.find('#_2'),
   yuan4 = $svg5.find('#_1'),
   z1 = $svg5.find('#z1'),
   z2 = $svg5.find('#z2'),
   z3 = $svg5.find('#z3'),
   z4 = $svg5.find('#z4'),
   z5 = $svg5.find('#z5'),
   enbLine1 = $svg5.find('.enb-line1'),
   enbLine2 = $svg5.find('.enb-line2'),
   enbLine3 = $svg5.find('.enb-line3'),
   enbLine4 = $svg5.find('.enb-line4'),
   enbText1 = $svg5.find('.enb-text1'),
   enbText2 = $svg5.find('.enb-text2'),
   enbText3 = $svg5.find('.enb-text3'),
   enbText4 = $svg5.find('.enb-text4')
  TweenMax.set($svg5, {
    opacity: 0
  })
  TweenMax.set([enbText1, enbText2, enbText3, enbText4], {
    opacity: 0,
    scaleX: .3

  })

  function initLine (el) {
    var pathLength = el[0].getTotalLength()
    TweenMax.set(el, {
      strokeDashoffset: pathLength,
      strokeDasharray: pathLength
    })
  }

  initLine(enbLine1)
  initLine(enbLine2)
  initLine(enbLine3)
  initLine(enbLine4)
  TweenMax.set(z5, {
    scaleX: .3, scaleY: .3,
    transformOrigin: 'center center',
    opacity: 0,
    // rotation: 180,

  })
  TweenMax.set([z1, z2, z3, z4], {opacity: 0})
  TweenMax.set(yuan1, {
    x: 550, y: -1500
  })
  TweenMax.set(startLine1, {
    x: 660, y: -1600
  })
  TweenMax.set(endLine1, {
    x: 300, y: -1300
  })
  TweenMax.set(yuan2, {
    x: 550, y: -1500
  })
  TweenMax.set(yuan3, {
    x: 250, y: -1200
  })
  TweenMax.set(yuan4, {
    x: 250, y: -1200
  })
  fiveAnimate
   .to($svg5, 0, {
     opacity: 1
   },1)
   .to(startLine1, 1.1, {
     x: 0, y: 0
   })
   .to(yuan1, 1.3, {
     x: 0, y: 0
   }, '-=1')
   .to(yuan2, 1.2, {
     x: 0, y: 0
   }, '-=1')
   .to(yuan3, 1.2, {
     x: 0, y: 0
   }, '-=1')
   .to(yuan4, 1.2, {
     x: 0, y: 0
   }, '-=1')
   .to(endLine1, 1, {
     x: 0, y: 0
   }, '-=1.2')
   .to(z5, .3, {
     scaleX: 2, scaleY: 2,
     transformOrigin: 'center center',
     opacity: 1,
     rotation: 0
   }, '-=0.3')
   .to(z5, .3, {
     scaleX: 1, scaleY: 1,
     transformOrigin: 'center center'
   })
   .to([z1, z2, z3, z4], .5, {
     opacity: 1,
   })
   .to(enbLine1, .5, {
     strokeDashoffset: 0
   })
   .to(enbText1, .5, {
     opacity: 1,
     scaleX: 1
   })
   .to(enbLine2, .5, {
     strokeDashoffset: 0
   })
   .to(enbText2, .5, {
     opacity: 1,
     scaleX: 1
   })
   .to(enbLine3, .5, {
     strokeDashoffset: 0
   })
   .to(enbText3, .5, {
     opacity: 1,
     scaleX: 1
   })
   .to(enbLine4, .5, {
     strokeDashoffset: 0
   })
   .to(enbText4, .5, {
     opacity: 1,
     scaleX: 1
   })

  fourAnimate
   .to(img1, 1, {
     y: 0
   }, 1.6)
   .to(img2, 1, {
     y: 0
   }, '-=0.5')
   .to(img3, 1, {
     y: 0
   }, '-=0.5')
   .to(img4, 1, {
     y: 0
   }, '-=0.9')
   .to(img5, 1, {
     y: 0
   }, '-=0.9')
   .to(img6, 1, {
     y: 0
   }, '-=0.9')
  secondAnimate
   .to(svgBg, 1, {
     x: 280,
     y: 0,
     opacity: 1

   })
   .to(line0, .543, {
     transformOrigin: 'left bottom',
     strokeDashoffset: 0

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

initAnimate()

