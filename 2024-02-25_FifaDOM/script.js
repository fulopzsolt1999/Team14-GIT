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

function arrayToObject(csA) {
   const teamsDataArray = [];
   for (let i = 0; i < csA.length; i++) {
      let teamDataObj = {
         nev: csA[i].split(";")[0],
         helyezes: Number(csA[i].split(";")[1]),
         valtozas: Number(csA[i].split(";")[2]),
         pont: Number(csA[i].split(";")[3]),
      };
      teamsDataArray.push(teamDataObj);
   }
   return teamsDataArray;
}

function getData(userClick) {
   // --- Get the array and make an object from it ---
   let teamsDataArray = arrayToObject(csapatAdat);

   // --- Get the container element to display output ---
   let resultContainer = document.querySelector(".result-container");

   // --- Clear the container to avoid multiple output ---
   clearContainer(resultContainer);

   // --- Decide what was clicked and display the correct result ---
   switch (userClick) {
      case "team-counter":
         outputTeamsNum(teamsDataArray, resultContainer);
         break;
      case "average":
         outputTeamsAboveAverageScore(
            teamsDataArray,
            resultContainer,
            outputAverageScore(teamsDataArray, resultContainer)
         );
         break;
      case "most-imp-team":
         outputMostImprovingTeam(teamsDataArray, resultContainer);
         break;
      case "search":
         createSearchField(teamsDataArray, resultContainer);
         break;
      case "statistics":
         outputStatistics(teamsDataArray, resultContainer);
         break;
   }
}

function outputTeamsNum(tDA, rC) {
   // --- Make a p element and add it to the container's first child ---
   let p = document.createElement("p");
   rC.appendChild(p).innerHTML = `Aktuálisan ${tDA.length} csapat szerepel a ranglistán.`;

   // --- Create table ---
   rC.appendChild(createTable(tDA));

   // --- Styling ---
   styleContainerAndParagraph(rC, p);
}

function outputAverageScore(tDA, rC) {
   let p = document.createElement("p");
   let scoreSum = 0;

   // --- Sum all scores
   tDA.forEach((team) => {
      scoreSum += team.pont;
   });
   let avgScore = scoreSum / tDA.length;

   // --- Show the avg score ---
   rC.appendChild(p).innerHTML = `Az átlag pontszám: ${avgScore}.`;

   // --- Styling ---
   styleContainerAndParagraph(rC, p);
   return avgScore;
}

function outputTeamsAboveAverageScore(tDA, rC, avgS) {
   let p = document.createElement("p");
   rC.appendChild(p).innerHTML = `Az átlag pontszámnál több ponttal rendelkező csapatok:`;
   let resultTeams = [];

   // --- Check if the current team has more points than the avg score
   tDA.forEach((team) => {
      if (team.pont > avgS) {
         resultTeams.push(team);
      }
   });

   // --- Styling ---
   styleContainerAndParagraph(rC, p);

   // --- Show the result ---
   rC.appendChild(createTable(resultTeams));
}

function outputMostImprovingTeam(tDA, rC) {
   let p = document.createElement("p");
   let checkNum = 0;
   let getIndex = 0;

   // --- Search for the biggest improve change ---
   for (let i = 0; i < tDA.length; i++) {
      if (tDA[i].valtozas > checkNum) {
         checkNum = tDA[i].valtozas;
         getIndex = i;
      }
   }

   // --- Show the result ---
   rC.appendChild(p).innerHTML = `A legtöbbet javító csapat: ${tDA[getIndex].nev}`;

   // --- Styling ---
   styleContainerAndParagraph(rC, p);
}

function createSearchField(tDA, rC) {
   // --- Create the form field and the paragraph
   let searchForm = document.createElement("form");
   let searchInput = document.createElement("input");
   let searchButton = document.createElement("button");
   let p = document.createElement("p");

   // --- Adding attributes to the input field and the button
   searchInput.type = "search";
   searchInput.placeholder = "Enter the country";
   searchButton.type = "submit";
   searchButton.textContent = "Search";

   // --- Show the form field and the paragraph
   searchForm.appendChild(searchInput);
   searchForm.appendChild(searchButton);
   rC.appendChild(searchForm);
   rC.appendChild(p);

   searchForm.addEventListener("submit", (event) => {
      // --- User can not press Enter just click on the button ---
      event.preventDefault();

      // --- Check if the input matches any team name inside the array
      let found = false;
      tDA.forEach((team) => {
         if (team.nev === searchInput.value) {
            found = true;
         }
      });

      // --- Handle if the team if found or not ---
      if (found) {
         document.querySelector(
            ".result-container p"
         ).innerHTML = `${searchInput.value} csapata rajta van a top 20 listán.`;
      } else {
         document.querySelector(
            ".result-container p"
         ).innerHTML = `${searchInput.value} csapata nincs rajta a top 20 listán.`;
      }

      // --- Clear input field ---
      searchInput.value = "";
   });

   // --- Styling ---
   styleContainerAndParagraph(rC, p);
}

function outputStatistics(tDA, rC) {
   let allPointChanges = [];
   let pointChangesObj = {};
   tDA.forEach((team) => {
      allPointChanges.push(team.valtozas);
   });
   allPointChanges.forEach(function (i) {
      pointChangesObj[i] = (pointChangesObj[i] || 0) + 1;
   });

   // --- Create a table and tbody ---
   let table = document.createElement("table");
   let thead = document.createElement("thead");
   let tbody = document.createElement("tbody");
   let tr = document.createElement("tr");
   let p = document.createElement("p");

   // --- Create header elements to make easier the read of the table
   for (let i = 0; i < 2; i++) {
      if (i == 0) {
         let th = document.createElement("th");
         th.appendChild(document.createTextNode("Változás"));
         tr.appendChild(th);
         thead.appendChild(tr);
      } else {
         let th = document.createElement("th");
         th.appendChild(document.createTextNode("Hányszor fordult elő ekkora változás"));
         tr.appendChild(th);
         thead.appendChild(tr);
      }
   }

   // --- Loop through the key value pairs
   for (const key in pointChangesObj) {
      let tr = document.createElement("tr");
      let rows = [key, pointChangesObj[key]];
      rows.forEach((row) => {
         let td = document.createElement("td");
         td.appendChild(document.createTextNode(`${row}`));
         tr.appendChild(td);
         tbody.appendChild(tr);
         tr.style.borderBottom = "1px solid white";
      });
   }

   // --- Show the results ---
   p.innerHTML = "Csapat statisztika változások alapján.";
   table.appendChild(thead);
   table.appendChild(tbody);
   rC.appendChild(p);
   rC.appendChild(table);

   // --- Styling ---
   styleTable(table, thead, tbody);
   styleContainerAndParagraph(rC, p);
}

function createTable(data) {
   // --- Create a table with thead and tbody ---
   let table = document.createElement("table");
   let thead = document.createElement("thead");
   let tbody = document.createElement("tbody");

   // --- Add elements to the table ---
   for (let i = 0; i < data.length; i++) {
      let tr = document.createElement("tr");
      let rows = [];

      // --- Adding the head elements ---
      if (i == 0) {
         let keysFromObj = Object.keys(data[0]);
         keysFromObj.forEach((key) => {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(`${key}`));
            tr.appendChild(th);
            thead.appendChild(tr);
         });
         table.appendChild(thead);

         // --- Adding the body elements ---
      } else {
         rows.push(data[i].nev, data[i].helyezes, data[i].valtozas, data[i].pont);
         rows.forEach((row) => {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(`${row}`));
            tr.appendChild(td);
            tbody.appendChild(tr);
            tr.style.borderBottom = "1px solid white";
         });
         table.appendChild(tbody);
      }
   }

   // --- Styling ---
   styleTable(table, thead, tbody);

   return table;
}

function styleContainerAndParagraph(rC, p) {
   rC.style.border = "2px solid white";
   p.style.fontSize = "24px";
   p.style.fontWeight = "bold";
   p.style.textDecoration = "underline";
}

function styleTable(t, tH, tB) {
   t.style.width = "600px";
   t.style.borderTop = "4px solid white";
   tH.style.textTransform = "uppercase";
   tH.style.fontSize = "20px";
   tH.style.borderBottom = "1px solid white";
   tB.style.fontSize = "18px";
}

function clearContainer(rC) {
   rC.innerHTML = "";
}
