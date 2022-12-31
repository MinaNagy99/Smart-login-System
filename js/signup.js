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

let emails = [];
let passwords = [];
let emailStored = JSON.parse( localStorage.getItem('email'));
let passwordStored = JSON.parse( localStorage.getItem('password'));



function removeAlert1(){
  aler1.hidden = 'true'
  success.hidden = 'true'

}
function removeAlert2(){
  aler2.hidden = 'true'

}

function addUser (){
  function validationName (){
    if (  regexName.test(signupName.value)==true ){
      aler1.hidden = 'true'
      return true ;
    }
    else{
      aler1.removeAttribute('hidden')
      return false;
    }
  }
  
  function validationEmail (){
      if (  regexEmail.test(signupEmail.value)==true ){
        aler2.hidden = 'true'
  
        return true ;
      }
      else{
        aler2.removeAttribute('hidden')
  
        return false;
      }
    }
if (validationName() == true && validationEmail() == true){
  let user = { 
    name : signupName.value ,
    email : signupEmail.value , 
    password : signupPassword.value ,
  }
  emails.push(signupEmail.value);
  passwords.push(signupPassword.value)
  success.removeAttribute('hidden')
  console.log(emails);
  console.log(passwords);

  localStorage.setItem('email',JSON.stringify(emails) );
  localStorage.setItem('password' , JSON.stringify(passwords));  
  clearForm();
}
}

function clearForm (){
    signupName.value=''
    signupEmail.value=''
    signupPassword.value=''

}
function clearForm2 (){
  emailInput.value=''
  passwordlInput.value=''   
}
let regexName = /^([a-zA-Z ]){2,30}$/;
let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ; 





signupButton.addEventListener('click' , addUser);
signupName.addEventListener('keyup' , removeAlert1);
signupEmail.addEventListener('keyup' , removeAlert2);

