export var secondAnimate = new TimelineLite({})
export var fourAnimate = new TimelineLite()
export var fiveAnimate = new TimelineLite()

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
  var $svg = $('.tech-svg'),
   startLine1 = $svg.find('#i2'),
   endLine1 = $svg.find('#i1'),
   yuan1 = $svg.find('#_4'),
   yuan2 = $svg.find('#_3'),
   yuan3 = $svg.find('#_2'),
   yuan4 = $svg.find('#_1'),
   z1 = $svg.find('#z1'),
   z2 = $svg.find('#z2'),
   z3 = $svg.find('#z3'),
   z4 = $svg.find('#z4'),
   z5 = $svg.find('#z5')
  TweenMax.set(z5, {
    scaleX:.3,scaleY:.3,
    transformOrigin:'center center',
    opacity:0,
    rotation:180,


  })
  TweenMax.set([z1,z2,z3,z4],{opacity:0})
  TweenMax.set(yuan1, {
    x: 550, y: -500
  })
  TweenMax.set(startLine1, {
    x: 660, y: -600
  })
  TweenMax.set(endLine1, {
    x: 300, y: -300
  })
  TweenMax.set(yuan2, {
    x: 550, y: -500
  })
  TweenMax.set(yuan3, {
    x: 250, y: -200
  })
  TweenMax.set(yuan4, {
    x: 250, y: -200
  })
  fiveAnimate
   .to(startLine1, 1.1, {
     x: 0, y: 0
   }, 1)
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
   .to(z5, .3,{
     scaleX:2,scaleY:2,
     transformOrigin:'center center',
     opacity:1,
     rotation:0
   },'-=0.3')
   .to(z5, .3,{
     scaleX:1,scaleY:1,
     transformOrigin:'center center'
   })
   .to([z1,z2,z3,z4], 1,{
     opacity:1,
   })
   .to(z5, 3,{
     repeat:-1,
     opacity:.5,
     yoyo:true
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

