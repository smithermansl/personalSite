$(document).ready(() => {
  
  let upArrow = $('#backToTop')

  upArrow.hide()
  let arrowWillShow = $('#background').offset().top

  $(window).scroll(() => {
    if($(window).scrollTop() > arrowWillShow) {
      upArrow.show()
    }

    if($(window).scrollTop() < arrowWillShow) {
      upArrow.hide()
    }
  })

  upArrow.click(() => {
    $('html, body').animate({ scrollTop: 0}, 300)

  })

})