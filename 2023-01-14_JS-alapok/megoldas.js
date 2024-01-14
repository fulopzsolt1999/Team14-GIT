function first_exercise(resultOutput) {
   /* 
      1)feladat
      Készíts egy olyan kódot mely kiírja az adott file készítőjének
      •Nevét
      •Csoportjának azonosítóját (melyik #Teamtagja)
      •3.-4. és 5. sorpedig az legyen, mennyire érti a HTML, CSS és jelenlegi JavaScript tananyagokat 1-100-ig (pl.: html:90)
   */
   resultOutput.innerHTML = "1.feladat<br>Fülöp Zsolt, Team#14, html:90, css:80, javascript:60";
}

function second_exercise(resultOutput) {
   /* 
      2)feladat
      Készíts egy olyan programot, mely bekér egy számot és a hatványozás mértékét, és kiírja annak hatványát.pl.: 2 és 3,azazkettő a harmadikon,azaz az eredmény 8 lesz!
   */
   let baseNum = Number(prompt("Adj meg egy tetszőleges számot: "));
   let powerNum = Number(prompt("Add meg hanyadikra szeretnéd emelni ezt a számot: "));
   resultOutput.innerHTML = `A ${baseNum} számnak a ${powerNum}. hatványa a(z) ${Math.pow(
      baseNum,
      powerNum
   )}`;
}
function third_exercise(resultOutput) {
   /* 
      3)feladat
      Készíts egy programot, ami egy adott intervallumban generál ki páros számot, és írja ki az értékét, a határétéket te magad állíthatod be,bekérés,alapján.
   */

   let minNum = Number(prompt("Add meg a minimum számot: "));
   let maxNum = Number(prompt("Add meg a maximum számot: "));
   while (true) {
      let result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      if (result % 2 == 0) {
         resultOutput.innerHTML = `A véletlenszám ebben a tartományban: ${result}`;
         break;
      }
   }
}
function fourth_exercise(resultOutput) {
   /* 
      4)feladat
      Készíts egy programot, ami bekér egy életkort 1-120 között és ennek függvényében megjeleníti az illető besorolását. 120 kor felettvagy 0 alatt, pedig hibát kapjunk!
      •Kisgyermekkor:0-6 év
      •Gyermekkor: 6-12 év
      •Serdülőkor: 12-16 év
      •Ifjúkor: 16-20 év
      •Fiatal felnőttkor: 20-30 év
      •Felnőttkor: 30-60
      •Aggkor: 60-tól
   */

   let age = Number(prompt("Adja meg az életkorát (0-120): "));

   if (age <= 0 && age < 6) {
      resultOutput.innerHTML = "Kisgyermekkor: 0-6 év";
   } else if (age < 12) {
      resultOutput.innerHTML = "Gyermekkor: 6-12 év";
   } else if (age < 16) {
      resultOutput.innerHTML = "Serdülőkor: 12-16 év";
   } else if (age < 20) {
      resultOutput.innerHTML = "Ifjúkor: 16-20 év";
   } else if (age < 30) {
      resultOutput.innerHTML = "Fiatal felnőttkor: 20-30 év";
   } else if (age < 60) {
      resultOutput.innerHTML = "Felnőttkor: 30-60 év";
   } else if (age <= 120) {
      resultOutput.innerHTML = "Aggkor: 60 évtől";
   } else {
      resultOutput.innerHTML = "Csak 0-120 tartományban elfogadottak a számok.";
   }
}
function fifth_exercise(resultOutput) {
   /*
      5)feladat
      Készíts egy olyan kódot, mely paraméterként bekér egy számot és egy osztót és kiírjaszövegesen, hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla.
   */

   let num = Number(prompt("Adjon meg egy tesztőleges számot: "));
   let oszto = Number(prompt("Adjon meg egy számot, ami az osztó lesz: "));

   if (num % oszto == 0) {
      resultOutput.innerHTML = "A megadott osztó osztója a számnak.";
   } else {
      resultOutput.innerHTML = "A megadott osztó nem osztója a számnak.";
   }
}
function sixth_exercise(resultOutput) {
   /*
      6)feladat
      Készíts egy programot, ami kiírja az első 10 négyzetszámot!
   */

   for (let i = 1; i <= 10; i++) {
      resultOutput.innerHTML += `${i}<sup>${2}</sup> = ${i * i}<br>`;
   }
}

document.getElementById("btn").addEventListener("click", function () {
   let exerciseNum = Number(document.getElementById("num").value);
   let resultOutput = document.getElementById("result-output");
   switch (exerciseNum) {
      case 1:
         first_exercise(resultOutput);
         break;
      case 2:
         second_exercise(resultOutput);
         break;
      case 3:
         third_exercise(resultOutput);
         break;
      case 4:
         fourth_exercise(resultOutput);
         break;
      case 5:
         fifth_exercise(resultOutput);
         break;
      case 6:
         sixth_exercise(resultOutput);
         break;

      default:
         document.write("1-6ig elfogadottak a számok!");
         break;
   }
});
