var dobasok = [];

function KockaDobas() {
   return Math.round(Math.random() * 5) + 1; //1 és 6 közötti dobás érték
}

function TobbKockaDobas(dobasokMennyisege) {
   let tobbDobas = [];
   for (let i = 0; i < dobasokMennyisege; i++) {
      tobbDobas.push(KockaDobas());
   }
   return tobbDobas;
}

kockaEldobasa.addEventListener("click", () => {
   KockaMegjelenites(3);
});

function KockaMegjelenites(dobasokMennyisege) {
   let megtortentDobasok = TobbKockaDobas(dobasokMennyisege);
   for (let i = 0; i < megtortentDobasok.length; i++) {
      dobasok.push(megtortentDobasok[i]);
   }
   document.querySelector("#kockaKep01").style.backgroundImage =
      "url(img/" + megtortentDobasok[0] + ".png)";

   document.querySelector("#kockaKep02").style.backgroundImage =
      "url(img/" + megtortentDobasok[1] + ".png)";

   document.querySelector("#kockaKep03").style.backgroundImage =
      "url(img/" + megtortentDobasok[2] + ".png)";

   //TRIPLA DOBÁS FELADATOK:
   MaxDobas(megtortentDobasok);
   HatosDobas(megtortentDobasok);
   TriplaHatos(megtortentDobasok);
   Egyformak(megtortentDobasok);
}
function DobasokSzama() {
   let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
   for (let i = 0; i < dobasok.length; i++) {
      dobasMennyiseg[dobasok[i]]++; //Ha találok egy adott dobást, annak indexét növelem eggyel...
      dobasMennyiseg[0] += dobasok[i];
   }
   return dobasMennyiseg;
}

function AtlagSzamitas(eredmenyek) {
   return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
   document.querySelector("#egyes").innerHTML = eredmenyek[1];
   document.querySelector("#kettes").innerHTML = eredmenyek[2];
   document.querySelector("#harmas").innerHTML = eredmenyek[3];
   document.querySelector("#negyes").innerHTML = eredmenyek[4];
   document.querySelector("#otos").innerHTML = eredmenyek[5];
   document.querySelector("#hatos").innerHTML = eredmenyek[6];
   document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
   document.querySelector("#osszesen").innerHTML = eredmenyek[0];
   document.querySelector("#atlag").innerHTML = AtlagSzamitas(eredmenyek).toFixed(2);
}

kockaEldobasa.addEventListener("click", () => {
   StatisztikaKiir(DobasokSzama());
});

//FELADATOK TRIPLA DOBÁSRA:
function MaxDobas(aktDobasok) {
   let aktDobasOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
   let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
   if (aktDobasOsszege > eddigiLegnagyobb) {
      document.querySelector("#legnagyobb").innerHTML = aktDobasOsszege;
   }
}

function HatosDobas(aktDobasok) {
   for (let i = 0; i < aktDobasok.length; i++) {
      if (aktDobasok[i] == 6) {
         let aktMennyiseg = document.querySelector("#hatosok").innerHTML; //Kiolvasom
         aktMennyiseg++; //Növelem
         document.querySelector("#hatosok").innerHTML = aktMennyiseg; //Visszaírom
      }
   }
}

function TriplaHatos(aktDobasok) {
   if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
      document.querySelector("#triplaHat").innerHTML = "Volt";
   }
}

function Egyformak(aktDobasok) {
   if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
      let aktMennyiseg = document.querySelector("#egyformak").innerHTML; //Kiolvasom
      aktMennyiseg++; //Növelem
      document.querySelector("#egyformak").innerHTML = aktMennyiseg; //Visszaírom
   }
}
