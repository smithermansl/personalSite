$(document).ready(() => {
  
  let upArrow = $('#backToTop')

  upArrow.hide().addClass('fixed')
  let backgroundSectionTop = $('#background').offset().top

  $(window).scroll(() => {
    if($(window).scrollTop() >= backgroundSectionTop) {
      upArrow.show()
    }

    if($(window).scrollTop() < backgroundSectionTop) {
      upArrow.hide()
    }

    let footerSectionTop = $('footer').offset().top
  
    if($(window).scrollTop() + $(window).height() >= footerSectionTop) {
      upArrow.removeClass('fixed').addClass('relative')
    }

    if($(window).scrollTop() + $(window).height() < footerSectionTop) {
      upArrow.removeClass('relative').addClass('fixed')
    }
  })

  upArrow.click(() => {
    $('html, body').animate({ scrollTop: 0}, 300)
  })

})