let emailInput = document.querySelector('input');
let passwordlInput = document.getElementById('signinPassword');
let loginButton = document.getElementById('btnlog')
let signupName = document.getElementById('signupName');
let signupEmail =document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let signupButton = document.getElementById('btnsignup');
let aler1 = document.querySelector('.aler1');
let aler2 = document.querySelector('.aler2');
let aler3 = document.querySelector('.aler3');
let aler4 = document.querySelector('.aler4');
let success =document.getElementById('success');
let aa = document.getElementById('aa')

let emails = [];
let passwords = [];
let emailStored = JSON.parse( localStorage.getItem('email'));
let passwordStored = JSON.parse( localStorage.getItem('password'));
 function signinCkeck(){
if( emailStored[0] == emailInput.value && passwordStored[0]== passwordlInput.value){
  alert('welcome')
}
else{
  aler3.removeAttribute('hidden')
  aler4.removeAttribute('hidden')
}
clearForm2()
 }



function removeAlert3(){
  aler3.hidden = 'true'

}
function removeAlert4(){
  aler4.hidden = 'true'

}


function clearForm2 (){
  emailInput.value=''
  passwordlInput.value=''   
}
function goWelcome (){
alert('welcome')
}
let regexName = /^([a-zA-Z ]){2,30}$/;
let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;






loginButton.addEventListener('click', signinCkeck);
emailInput.addEventListener('keypress', removeAlert3);
passwordlInput.addEventListener('keypress', removeAlert4);
