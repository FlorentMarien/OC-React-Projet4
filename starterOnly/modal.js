function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal
function closeModal() {
  modalbg.style.display = "none";
}
// Verif formulaire
function validate() {
  if(document.getElementById("first").value.length >= 2 &&
  document.getElementById("last").value.length >= 2 &&
  document.getElementById("email").value != "" &&
  document.getElementById("birthdate").value != "" &&
  isNaN(document.getElementById("quantity").valueAsNumber) == false &&
  document.querySelectorAll('[name=location]:checked')[0]  != undefined &&
  document.getElementById("checkbox1").checked != false
  ){
    const formulaire =  {
      first : document.getElementById("first").value,
      last : document.getElementById("last").value,
      email : document.getElementById("email").value,
      birthdate : document.getElementById("birthdate").value,
      quantity : document.getElementById("quantity").valueAsNumber,
      location : document.querySelectorAll('[name=location]:checked')[0].value,
    };
    modalBody.textContent="Félicitation";
  }
  else{
    if(document.getElementById("first").value.length < 2){
      document.getElementById("first").style.backgroundColor="red";
    }else{
      document.getElementById("first").style.backgroundColor="white";
    }
    if(document.getElementById("last").value < 2){
      document.getElementById("last").style.backgroundColor="red";
    }else{
      document.getElementById("last").style.backgroundColor="white";
    }
    if(document.getElementById("email").value== ""){
      document.getElementById("email").style.backgroundColor="red";
    }else{
      document.getElementById("email").style.backgroundColor="white";
    }
    if(document.getElementById("birthdate").value== ""){
      document.getElementById("birthdate").style.backgroundColor="red";
    }else{
      document.getElementById("birthdate").style.backgroundColor="white";
    }
    if(isNaN(document.getElementById("quantity").valueAsNumber)){
      document.getElementById("quantity").style.backgroundColor="red";
    }else{
      document.getElementById("quantity").style.backgroundColor="white";
    }
    if(document.querySelectorAll('[name=location]:checked')[0] == undefined || document.querySelectorAll('[name=location]:checked')[0].value == ""){
      for(let x=0;x<6;x++){
        document.querySelectorAll('[class=checkbox-icon]')[x].style.backgroundColor="red";
      }
    }else{
      for(let x=0;x<6;x++){
        document.querySelectorAll('[class=checkbox-icon]')[x].style.backgroundColor="rgba(35,35,35)";
      }
    }
    if(document.getElementById("checkbox1").checked == false ){
      document.querySelectorAll('[class=checkbox-icon]')[6].style.backgroundColor="red";
    }else{
      document.querySelectorAll('[class=checkbox-icon]')[6].style.backgroundColor="rgb(39, 158, 122)";
    }
    //modalBody.textContent="Echec";
  }
  return false;
  
}


