$(document).on('submit', '#emailForm', () => {
  $.post('/contact', $('#emailForm').serialize(), (result) => {
    if (result.success) {
      $('#initial_contact').addClass('hidden')
      $('#email_success').addClass('visible')
    } else {
      $('#initial_contact').addClass('hidden')
      $('#email_failure').addClass('visible')
    }
  })
  return false
})