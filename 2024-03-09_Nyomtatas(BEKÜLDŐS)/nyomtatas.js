function kalkulal() {
   //Űrlapadatok
   const szelesseg = document.querySelector("#szelesseg").value;
   const magassag = document.querySelector("#magassag").value;
   const papir = document.querySelector("#papirtipus").value;
   //Számítások
   let terulet = Math.round((szelesseg * magassag) / 10000);
   let koltseg = terulet * papir;
   //Megjelenítés
   document.querySelector(".valasz").style.visibility = "visible";
   document.querySelector("#terulet").innerHTML = terulet;
   document.querySelector("#papir").innerHTML = papir;
   document.querySelector("#koltseg").innerHTML = koltseg;
}
