function arrayToObject() {
   const csapatAdat = [
      "Anglia;4;0;1662",
      "Argentína;10;0;1614",
      "Belgium;1;0;1752",
      "Brazília;3;-1;1719",
      "Chile;17;-3;1576",
      "Dánia;14;-1;1584",
      "Franciaország;2;1;1725",
      "Hollandia;13;3;1586",
      "Horvátország;8;-1;1625",
      "Kolumbia;9;-1;1622",
      "Mexikó;12;0;1603",
      "Németország;16;-1;1580",
      "Olaszország;15;1;1583",
      "Peru;19;0;1551",
      "Portugália;5;1;1643",
      "Spanyolország;7;2;1631",
      "Svájc;11;0;1604",
      "Svédország;18;0;1560",
      "Szenegál;20;0;1546",
      "Uruguay;6;-1;1639",
   ];
   const teamsDataArray = [];
   for (let i = 0; i < csapatAdat.length; i++) {
      let teamDataObj = {
         nev: csapatAdat[i].split(";")[0],
         helyezes: Number(csapatAdat[i].split(";")[1]),
         valtozas: Number(csapatAdat[i].split(";")[2]),
         pont: Number(csapatAdat[i].split(";")[3]),
      };
      teamsDataArray.push(teamDataObj);
   }
   return teamsDataArray;
}

function getData(userClick) {
   let teamsDataArray = arrayToObject();
   switch (userClick) {
      case "team-counter":
         outputTeamsNum(teamsDataArray);
         break;
      case "average":
         break;
      case "above-average":
         break;
      case "most-imp-team":
         break;
      case "search":
         break;
      case "statistics":
         break;

      default:
         break;
   }
}

function outputTeamsNum(tDA) {
   let resultContainer = document.querySelector(".result-container");
   resultContainer.innerHTML = `<p>Aktuálisan ${tDA.length} csapat szerepel a ranglistán.</p>`;
   let tbl = document.createElement("table");
   tbl.style.width = "100%";
   tbl.style.border = "4px solid white";
   let tbdy = document.createElement("tbody");
   for (let i = 0; i < tDA.length; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < tDA[i].length; j++) {
         if (i == 2 && j == 1) {
            break;
         } else {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(tDA[i]));
            i == 1 && j == 1 ? td.setAttribute("rowSpan", "2") : null;
            tr.appendChild(td);
         }
      }
      tbdy.appendChild(tr);
   }
   tbl.appendChild(tbdy);
   resultContainer.appendChild(tbl);
}
