const d = document,
      $inputEmail = d.getElementById('input-email'),
      $form = d.getElementById('form-email'),
      $msgError = d.querySelector('.msg-error'),
      $msgContainer = d.querySelector('.message-container'),
      $emailTarget = d.getElementById('email-target'),
      $btnClose = d.querySelector('.btn-close')

$inputEmail.addEventListener('input', e =>{
  //console.log(e.target.value)
  let email = $inputEmail.value

  if(emailIsValid(email)){
    $msgError.style.display = 'none'
    $inputEmail.style.background = 'rgba(132, 255, 173, 0.527)'
    $inputEmail.style.outline = 'rgb(0, 255, 60)'
  }else{
    $msgError.style.display = 'block'
    $inputEmail.style.background = 'rgba(255, 132, 132, 0.527)'
    $inputEmail.style.outline = 'rgb(255, 0, 0)'
    $form.setAttribute('novalidate', '')
    
  }
})


function emailIsValid(email) {
  // Ejemplo de validación utilizando una expresión regular básica
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

$form.addEventListener("submit", e =>{
  e.preventDefault()
  console.log(e.target)
  
  if($inputEmail.value === '' || !emailIsValid($inputEmail.value)){
    $msgError.style.display = 'block'
    $form.setAttribute('novalidate', '')
  }else{
    $msgContainer.classList.add('show')
    $emailTarget.innerHTML = $inputEmail.value
  }

})

d.addEventListener('click', e =>{

  if(e.target === $btnClose || e.target === $msgContainer){
    $msgContainer.classList.remove('show')
  }

})