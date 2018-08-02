/* 切换语言 */
// var isEnglish = location.search.indexOf('chinese') === -1
var isEnglish = location.search.indexOf('english') !== -1

function setLanguage () {
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
