let emailForm = $('#emailForm')

emailForm.submit(e => {
  e.preventDefault()

  let children = Array.from(emailForm[0].children),
  name = children[0].value,
  email = children[1].value,
  message = children[2].value

  $.ajax({
    url: '//formspree.io/smithermansl@gmail.com',
    method: 'POST',
    data: { name, email, message },
    dataType: 'json',
    success: () => {
      $('#initial_contact').addClass('hidden')
      $('#email_success').addClass('visible')
    },
    error: err => {
      console.log(err)
      $('#initial_contact').addClass('hidden')
      $('#email_failure').addClass('visible')
    }
  })
})