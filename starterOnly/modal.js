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
  document.getElementById("email").value != "" && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(document.getElementById("email").value)) &&
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
    modalBody.className += " modalformsucces";
    modalBody.textContent="Félicitation "+formulaire.first+" "+formulaire.last+" pour votre inscription";
  }
  else{
    if(document.getElementById("first").value.length < 2){
      //document.getElementById("first").style.backgroundColor="red";
      document.getElementById("errorText-name").textContent="Prénom inférieur à 2 caractères";
      document.getElementById("errorText-name").style.display="block";
    }else{
      //document.getElementById("first").style.backgroundColor="white";
      document.getElementById("errorText-name").style.display="none";
    }

    if(document.getElementById("last").value < 2){
      //document.getElementById("last").style.backgroundColor="red";
      document.getElementById("errorText-lastname").textContent="Nom inférieur à 2 caractères";
      document.getElementById("errorText-lastname").style.display="block";
    }else{
      //document.getElementById("last").style.backgroundColor="white";
      document.getElementById("errorText-lastname").style.display="none";
    }

    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(document.getElementById("email").value))){
      //document.getElementById("email").style.backgroundColor="red";
      if(document.getElementById("email").value == ""){
        document.getElementById("errorText-email").textContent="Vous n'avez rien saisi";
        document.getElementById("errorText-email").style.display="block";
      }else{
        document.getElementById("errorText-email").textContent="L'adresse email est incorrect";
        document.getElementById("errorText-email").style.display="block";
      }
    }else{
      //document.getElementById("email").style.backgroundColor="white";
      document.getElementById("errorText-email").style.display="none";
    }

    if(document.getElementById("birthdate").value== ""){
      //document.getElementById("birthdate").style.backgroundColor="red";
      document.getElementById("errorText-birthdate").textContent="Vous n'avez rien saisi";
      document.getElementById("errorText-birthdate").style.display="block";
    }else{
      //document.getElementById("birthdate").style.backgroundColor="white";
      document.getElementById("errorText-birthdate").style.display="none";
    }

    if(isNaN(document.getElementById("quantity").valueAsNumber)){
      //document.getElementById("quantity").style.backgroundColor="red";
      document.getElementById("errorText-quantity").textContent="Vous n'avez pas saisi une valeur correcte";
      document.getElementById("errorText-quantity").style.display="block";

    }else{
      //document.getElementById("quantity").style.backgroundColor="white";
      document.getElementById("errorText-quantity").style.display="none";
    }

    if(document.querySelectorAll('[name=location]:checked')[0] == undefined || document.querySelectorAll('[name=location]:checked')[0].value == ""){
      for(let x=0;x<6;x++){
        //document.querySelectorAll('[class=checkbox-icon]')[x].style.backgroundColor="red";
      }
      document.getElementById("errorText-location").textContent="Vous n'avez rien saisi";
      document.getElementById("errorText-location").style.display="block";
    }else{
      for(let x=0;x<6;x++){
        //document.querySelectorAll('[class=checkbox-icon]')[x].style.backgroundColor="rgba(35,35,35)";
      }
      document.getElementById("errorText-location").style.display="none";
    }

    if(document.getElementById("checkbox1").checked == false ){
      //document.querySelectorAll('[class=checkbox-icon]')[6].style.backgroundColor="red";
      document.getElementById("errorText-conditionutilisation").textContent="Vous n'avez pas coché les conditions d'utilisation";
      document.getElementById("errorText-conditionutilisation").style.display="block";
    }else{
      //document.querySelectorAll('[class=checkbox-icon]')[6].style.backgroundColor="rgb(39, 158, 122)";
      document.getElementById("errorText-conditionutilisation").style.display="none";
    }

    //modalBody.textContent="Echec";
  }
  return false;
  
}


