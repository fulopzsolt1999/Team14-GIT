function getData(exerciseNumber) {
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
   const jogosultakSzama = 12345;
   const outputDiv = document.querySelector("#output");
   const paragraphElem = document.createElement("p");
   clearInnerHtml(outputDiv);
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
         SzavazatokAranya(szavazatok, jogosultakSzama, outputDiv, paragraphElem);
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
   outputDiv.classList.add("border", "border-dark", "rounded-3");
   paragraphElem.classList.add("fw-bold", "fs-3", "m-5");
}

function clearInnerHtml(elem) {
   elem.innerHTML = "";
}

function styleElements(obj) {}

function countSameElements(data) {
   const counts = {};
   data.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
   });
   return counts;
}

function KepviselokSzama(sz, oD, p) {
   p.innerHTML = `A helyhatósági választáson ${sz.length} képviselőjelölt indult.`;
   oD.appendChild(p);
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
   oD.appendChild(select);
   oD.appendChild(p);
   select.classList.add("form-select", "m-4");
   select.style.maxWidth = "12vw";
   select.style.minWidth = "100px";
}

function KepviseloInfo(sz, oD, p) {
   const formDiv = document.createElement("div");
   const inputSpan = document.createElement("span");
   const input = document.createElement("input");
   inputSpan.innerHTML = "Vezetéknév és Keresztnév";
   input.setAttribute("type", "text");

   formDiv.appendChild(inputSpan);
   formDiv.appendChild(input);
   oD.appendChild(formDiv);

   formDiv.classList.add("input-group");
   inputSpan.classList.add("input-group-text");
   input.classList.add("form-control");

   input.addEventListener("change", () => {
      let kepviselok = [];
      sz.forEach((kepviselo) => {
         kepviselok.push(kepviselo.nev);
      });

      if (kepviselok.includes(input.value)) {
         p.innerHTML = `"${input.value}" nevű képviselő jelölt szerepel a nyilvántartásban.`;
      } else {
         p.innerHTML = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
      }
      input.value = "";
      oD.appendChild(p);
   });
}

function SzavazatokAranya(sz, jSz, oD, p) {
   let votesSum = 0;
   sz.forEach((line) => {
      votesSum += line.szavazat;
   });
   p.innerHTML = `A választáson ${votesSum} állampolgár, a jogosultak ${(
      (votesSum / jSz) *
      100
   ).toFixed(2)}%-a vett részt.`;
   oD.appendChild(p);
}
function SzavazatokMennyisege(sz, oD, p) {
   let partokList = [];
   let votesToParts = [];
   sz.forEach((line) => {
      if (!partokList.includes(line.part)) {
         partokList.push(line.part);
      }
   });
   for (let i = 0; i < partokList.length; i++) {
      let voteCounter = 0;
      votesToParts.push({part_nev: partokList[i], all_votes: voteCounter});
      sz.forEach((line) => {
         if (votesToParts[i].part_nev == line.part) {
            voteCounter += line.szavazat;
            votesToParts[i].all_votes = voteCounter;
         }
      });
   }
   p.innerHTML = "Pártonként összesített szavazatok száma: ";
   oD.appendChild(p);
   createTable(oD, votesToParts, ["Pártok", "Összesített szavazatok"]);
}

function createTable(oD, data, tableHeaders) {
   // --- Create a table with thead and tbody ---
   const table = document.createElement("table");
   const thead = document.createElement("thead");
   const tbody = document.createElement("tbody");
   const tr = document.createElement("tr");

   // --- Adding the head elements ---
   for (let i = 0; i < tableHeaders.length; i++) {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(`${tableHeaders[i]}`));
      tr.appendChild(th);
      thead.appendChild(tr);
   }

   // --- Add elements to the table ---
   for (let i = 0; i < data.length; i++) {
      const tr = document.createElement("tr");
      let rows = [];

      // --- Adding the body elements ---
      if (data.length > 5) {
         rows.push(data[i].korzet, data[i].nev, data[i].part, data[i].szavazat);
      } else {
         rows.push(data[i].part_nev, data[i].all_votes);
      }

      rows.forEach((row) => {
         const td = document.createElement("td");
         td.appendChild(document.createTextNode(`${row}`));
         tr.appendChild(td);
         tbody.appendChild(tr);
      });
      table.appendChild(thead);
      table.appendChild(tbody);
   }
   oD.appendChild(table);
   table.setAttribute(
      "class",
      "table table-striped table-dark table-hover table-sm m-auto mt-4 mb-4 align-middle"
   );
   table.style.width = "80%";
}

function LegtobbSzavazat(sz, oD, p) {
   let mostVoteNumber = 0;
   sz.forEach((line) => {
      if (line.szavazat > mostVoteNumber) {
         mostVoteNumber = line.szavazat;
      }
   });
   p.innerHTML = `A választáson elért legtöbb szavazat: ${mostVoteNumber}`;
   sz.forEach((line) => {
      if (line.szavazat == mostVoteNumber) {
         p.innerHTML += `<br>${line.nev} - ${line.part} `;
      }
   });
   oD.appendChild(p);
}
function Nyertesek(sz, oD, p) {
   let votePlaces = [];
   let winners = [];
   sz.forEach((line) => {
      if (!votePlaces.includes(line.korzet)) {
         votePlaces.push(line.korzet);
      }
   });
   votePlaces.sort(function (a, b) {
      return a - b;
   });
   for (let i = 0; i < votePlaces.length; i++) {
      sz.forEach((line) => {
         if (votePlaces[i] == line.korzet) {
            if (winners.length == 0 || winners[i] == undefined) {
               winners.push({
                  korzet: line.korzet,
                  nev: line.nev,
                  part: line.part,
                  szavazat: line.szavazat,
               });
            } else if (winners[i].szavazat < line.szavazat) {
               winners[i].nev = line.nev;
               winners[i].part = line.part;
               winners[i].szavazat = line.szavazat;
            }
         }
      });
   }
   p.innerHTML = "A választáson körzetenkénti győztesek táblázata:";
   oD.appendChild(p);
   createTable(oD, winners, ["Körzet", "Képviselő neve", "Párt neve", "Szavazatok száma"]);
}
