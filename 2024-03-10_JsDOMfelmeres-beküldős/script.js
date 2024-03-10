// #### Exercise 01 ####
function showInputLength() {
   let inputValue01 = document.querySelector("#inp01").value;
   document.querySelector("#karaterszam").innerHTML = inputValue01.length;
}

// #### Exercise 02 ####
document.querySelector("#kirajzol-gomb").addEventListener("click", () => {
   const negyzetElem = document.querySelector("#rajzolt-negyzet");
   const x = document.querySelector("#x-beviteli-mezo").value;
   const y = document.querySelector("#y-beviteli-mezo").value;

   // Előző négyzet eltüntetése
   negyzetElem.style.display = "none";

   // Új négyzet megjelenítése a megadott koordinátákon
   negyzetElem.style.left = x + "px";
   negyzetElem.style.top = y + "px";
   negyzetElem.style.display = "block";
});

// #### Exercise 03 ####

document.querySelector("#show-hide").addEventListener("click", () => {
   // Animation handling
   if (catImg.style.opacity == 0) {
      showCat();
   } else {
      hideCat();
   }

   const catImg = document.querySelector("#cat");

   function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function hideCat() {
      catImg.style.transition = "opacity 5s linear";
      catImg.style.opacity = 0;
   }

   // Show animation
   function showCat() {
      catImg.style.display = "block";
      catImg.style.opacity = 0;
      catImg.style.transition = "opacity 5s linear";
      catImg.style.opacity = 1;

      // Random x coordinate generating
      const x = getRandomInt(0, window.innerWidth);

      // Random y coordinate generating
      const y = getRandomInt(0, window.innerHeight);

      catImg.style.left = x + "px";
      catImg.style.top = y + "px";
   }
});

document.querySelector("#email-check").addEventListener("click", () => {
   const email = document.querySelector("#email");
   const emailAgain = document.querySelector("#email-again");
   const errorMessages = document.querySelector(".error-messages");
   let checkErrors = false;
   errorMessages.innerHTML = "";

   if (!email.value && !emailAgain.value) {
      errorMessages.innerHTML += "<li>Nincs kitöltve egyik mező sem!</li>";
      email.style.border = "1px solid red";
      emailAgain.style.border = "1px solid red";
      checkErrors = true;
   }
   if (!email.value && emailAgain.value) {
      errorMessages.innerHTML += "<li>Nincs kitöltve az email mező!</li>";
      email.style.border = "1px solid red";
      checkErrors = true;
   } else if (email.value && !emailAgain.value) {
      errorMessages.innerHTML += "<li>Nincs kitöltve az email megerősítése mező!</li>";
      emailAgain.style.border = "1px solid red";
      checkErrors = true;
   }
   if (!validEmail(email.value)) {
      errorMessages.innerHTML += "<li>Nem megfelelő az e-mail cím formátuma!</li>";
      email.style.border = "1px solid red";
      checkErrors = true;
   }
   if (email.value !== emailAgain.value) {
      errorMessages.innerHTML += "<li>A két mező tartalma nem egyezik!</li>";
      email.style.border = "1px solid red";
      emailAgain.style.border = "1px solid red";
      checkErrors = true;
   }
   if (!checkErrors) {
      errorMessages.innerHTML += "<li>Adatok rögzítése sikeres!</li>";
      email.style.border = "1px solid green";
      emailAgain.style.border = "1px solid green";
      errorMessages.style.color = "green";
   } else {
      errorMessages.style.color = "red";
   }

   function validEmail(vizsgalandoEmail) {
      let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
      if (minta.test(vizsgalandoEmail)) {
         //==true val
         return true;
      } else {
         return false;
      }
   }
});
