const scriptURL = 'https://script.google.com/macros/s/AKfycby8z2Ilg4-MOlizaFihXqNFS0mLFwd6SVYa6a2Nyka6udqQsQcKplmzjoaFqkJ_w4e9/exec'

const form = document.forms['registrationForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})