// Variáveis

const form = document.getElementById('form');
const username = document.getElementById('cardholder-name');
const cardNumber = document.getElementById('card-number')
const expDateMm = document.getElementById('exp-date-mm');
const expDateYy = document.getElementById('exp-date-yy');
const cvc = document.getElementById('cvc');
const cardFrontName = document.getElementById('card-name');
const cardFrontNumber = document.getElementById('card-number-text')
const cardExpDateMm = document.getElementById('card-expdate-mm')
const cardExpDateYy = document.getElementById('card-expdate-yy')
const cardCvc = document.getElementById('card-cvc')
const inputs = document.getElementById('inputs')
const completed = document.getElementById('completed')






//Funções

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const cardNumberValue = cardNumber.value.trim();
  const expDateMmValue = expDateMm.value.trim();
  const expDateYyValue = expDateYy.value.trim();
  const cvcValue = cvc.value.trim();
  let value = 0;


  if (usernameValue === '') {
    setError(username, "Can't be blank.")
  } else if (!isValidName(usernameValue)) {
    setError(username, "Should not contain numbers.")
  } else {
    setSuccess(username)
    value++
  }

  if (cardNumberValue === '') {
    setError(cardNumber, "Can't be blank.")
  } else if(!isValidNumber(cardNumberValue)){
    console.log(cardNumberValue)
    setError(cardNumber, "Not a valid card number.")
  }
else {
    setSuccess(cardNumber)
    value++
  }

  if (expDateMmValue === '') {
    setError(expDateMm, "Can't be blank.")
  }else if(!isValidExpDateMm(expDateMmValue)){
    setError(expDateMm, 'Not a valid month.')
  }
   else {
    setSuccess(expDateMm)
    value++
  }

  if (expDateYyValue === '') {
    setError(expDateYy, "Can't be blank.")
  } else if(!isValidExpDateYy(expDateYyValue)){
    setError(expDateYy, 'Not a valid year.')
  }
  
  else {
    setSuccess(expDateYy)
    value++
  }

  if (cvcValue === '') {
    setError(cvc, "Can't be blank.")
  }
  else if(!isValidCvc(cvcValue)){
    setError(cvc, 'Not a valid CVC.')
  }
  else {
    setSuccess(cvc)
    value++
  }


  if(value == 5){
    inputs.classList.add('hide')
    inputs.classList.remove('inputs')
    completed.classList.remove('hide')
    completed.classList.add('container')
  }
}


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error-msg');
  const inputBox = inputControl.querySelector('input');

  errorDisplay.innerText = message;
  inputBox.classList.add('error')
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error-msg');
  const inputBox = inputControl.querySelector('input');

  errorDisplay.innerText = '';
  inputBox.classList.remove('error')

}

const isValidName = (username) => {
  const nameRegex = /^[a-zA-Z\s]*$/;
  return nameRegex.test(String(username))
}

const isValidNumber = (number) => {
  const numberRegex = /^[0-9]{16}$/;;
  return numberRegex.test(String(number).replace(/\s+/g, ''));
}

const isValidExpDateMm = (expdate) =>{
  if(parseInt(expdate) < 1 || parseInt(expdate) > 12){
    return false;
  }
  else{
    return true;
  }
}

const isValidExpDateYy = (expdate) => {
  if(parseInt(expdate) < 24 || parseInt(expdate) > 99){
    return false;
  }
  else{
    return true;
  }
}

const isValidCvc = (cvc) => {
  if(parseInt(cvc) < 100 || parseInt(cvc) > 999){
    return false;
  }
  else{
    return true;
  }
}




//Eventos

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
  


})

username.addEventListener('input', function() {
  if(username.value === ''){
    cardFrontName.textContent = 'Jane Appleseed'
  }
  else{
 cardFrontName.textContent = username.value;
  }

});

cardNumber.addEventListener('input', function() {
  if(cardNumber.value === ''){
    cardFrontNumber.textContent = '0000 0000 0000 0000'
  }
  else{
 cardFrontNumber.textContent = cardNumber.value;
  }
});

expDateMm.addEventListener('input', function() {
  if(expDateMm.value === ''){
    cardExpDateMm.textContent = '00'
  }
  else{
 cardExpDateMm.textContent = expDateMm.value;
  }
});

expDateYy.addEventListener('input', function() {
  if(expDateYy.value === ''){
    cardExpDateYy.textContent = '00'
  }
  else{
 cardExpDateYy.textContent = expDateYy.value;
  }
});

cvc.addEventListener('input', function() {
  if(cvc.value === ''){
    cardCvc.textContent = '000'
  }
  else{
 cardCvc.textContent = cvc.value;
  }
});

