const scriptURL = 'https://script.google.com/macros/s/AKfycbx3naASj3u_OrHOY7q8GDUByMe5lcifloBcSCCzlAzO0PEDneTPAEA184Cpos_CG22DAg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})