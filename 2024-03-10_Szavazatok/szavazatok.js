const szavazatok = [
   {korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-"},
   {korzet: 1, szavazat: 120, nev: "Alma Dalma", part: "GYEP"},
   {korzet: 7, szavazat: 162, nev: "Bab Zsuzsanna", part: "ZEP"},
   {korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP"},
   {korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP"},
   {korzet: 1, szavazat: 154, nev: "Bors Botond", part: "HEP"},
   {korzet: 5, szavazat: 188, nev: "Brokkoli Gyula", part: "ZEP"},
   {korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-"},
   {korzet: 4, szavazat: 143, nev: "Fasirt Ferenc", part: "HEP"},
   {korzet: 8, szavazat: 157, nev: "Gomba Gitta", part: "TISZ"},
   {korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-"},
   {korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-"},
   {korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP"},
   {korzet: 5, szavazat: 288, nev: "Joghurt Jakab", part: "TISZ"},
   {korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP"},
   {korzet: 2, szavazat: 187, nev: "Kapor Karola", part: "ZEP"},
   {korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP"},
   {korzet: 6, szavazat: 187, nev: "Kefir Ilona", part: "TISZ"},
   {korzet: 7, szavazat: 130, nev: "Kupa Huba", part: "-"},
   {korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-"},
   {korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-"},
   {korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-"},
   {korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP"},
   {korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-"},
   {korzet: 4, szavazat: 221, nev: "Monitor Tibor", part: "-"},
   {korzet: 8, szavazat: 288, nev: "Narancs Edmond", part: "GYEP"},
   {korzet: 2, szavazat: 220, nev: "Oldalas Olga", part: "HEP"},
   {korzet: 3, szavazat: 185, nev: "Pacal Kata", part: "HEP"},
   {korzet: 1, szavazat: 199, nev: "Petrezselyem Petra", part: "ZEP"},
   {korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-"},
   {korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP"},
   {korzet: 3, szavazat: 156, nev: "Retek Etelka", part: "ZEP"},
   {korzet: 7, szavazat: 129, nev: "Sajt Hajnalka", part: "TISZ"},
   {korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-"},
   {korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP"},
   {korzet: 3, szavazat: 187, nev: "Tejes Attila", part: "TISZ"},
   {korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ"},
   {korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP"},
   {korzet: 6, szavazat: 288, nev: "Vadas Marcell", part: "HEP"},
   {korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP"},
];

function getData(exerciseNumber) {
   const outputDiv = document.querySelector("#output");
   const paragraphElem = document.createElement("p");
   outputDiv.classList.add("border", "border-dark", "rounded-3");
   paragraphElem.classList.add("fw-bold", "fs-3", "m-5");
   clearOutputDiv(outputDiv);
   switch (exerciseNumber) {
      case 1:
         KepviselokSzama(szavazatok, outputDiv, paragraphElem);

         break;
      case 2:
         PartKepviselok(szavazatok, outputDiv, paragraphElem);
         break;
      case 3:
         KepviseloInfo(szavazatok, outputDiv, paragraphElem);
         break;
      case 4:
         SzavazatokAranya(szavazatok, outputDiv, paragraphElem);
         break;
      case 5:
         SzavazatokMennyisege(szavazatok, outputDiv, paragraphElem);
         break;
      case 6:
         LegtobbSzavazat(szavazatok, outputDiv, paragraphElem);
         break;
      case 7:
         Nyertesek(szavazatok, outputDiv, paragraphElem);
         break;
   }
}

function clearOutputDiv(oD) {
   oD.innerHTML = "";
}

function addChildElements(parent, child) {
   parent.appendChild(child);
}

function styleElements(obj) {}

function countSameElements(list) {
   const counts = {};
   list.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
   });
   return counts;
}

function KepviselokSzama(sz, oD, p) {
   p.innerHTML = `A helyhatósági választáson ${sz.length} képviselőjelölt indult.`;
   addChildElements(oD, p);
}

function PartKepviselok(sz, oD, p) {
   let partokList = [];
   let allVotes = [];
   const select = document.createElement("select");
   const option = document.createElement("option");
   option.innerHTML = "Válassz";
   option.value = "0";
   select.appendChild(option);
   sz.forEach((line) => {
      if (!partokList.includes(line.part)) {
         let option = document.createElement("option");
         option.value = line.part;
         option.innerHTML = line.part;
         partokList.push(line.part);
         select.appendChild(option);
      }
      allVotes.push(line.part);
   });
   const countParts = countSameElements(allVotes);
   select.addEventListener("change", () => {
      let selectedOpt = document.querySelector("select").value;
      if (selectedOpt !== "0") {
         p.innerHTML = `A kiválasztott (${selectedOpt}) párt ${countParts[selectedOpt]} képviselőt indított.`;
      }
   });
   addChildElements(oD, select);
   addChildElements(oD, p);
}

function KepviseloInfo(sz, oD, p) {}
function SzavazatokAranya(sz, oD, p) {}
function SzavazatokMennyisege(sz, oD, p) {}
function LegtobbSzavazat(sz, oD, p) {}
function Nyertesek(sz, oD, p) {}
