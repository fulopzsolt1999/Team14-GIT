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
   outputTeamsNum(teamsDataArray);
   let avgPoint = avgTeamPoint(teamsDataArray);
   getTeamsAboveAvgPoint(teamsDataArray, avgPoint);
   getMostImprovedTeam(teamsDataArray);
   let getTeamInp = getTeamPrompt();
   checkTeamInList(teamsDataArray, getTeamInp);
}

function outputTeamsNum(tDA) {
   console.log(`Aktuálisan ${tDA.length} csapat szerepel a ranglistán.`);
}

function avgTeamPoint(tDA) {
   let allPoints = 0;
   for (let i = 0; i < tDA.length; i++) {
      allPoints += tDA[i].pont;
   }
   console.log(`A résztvevő csapatok átlagpontszáma: ${allPoints / tDA.length}`);
   return allPoints / tDA.length;
}

function getTeamsAboveAvgPoint(tDA, aP) {
   let outputArray = [];
   for (let i = 0; i < tDA.length; i++) {
      if (tDA[i].pont > aP) {
         outputArray.push(tDA[i]);
      }
   }
   console.table(outputArray);
}

function getMostImprovedTeam(tDA) {
   let checkNum = 0;
   let getIndex = 0;
   for (let i = 0; i < tDA.length; i++) {
      if (tDA[i].valtozas > checkNum) {
         checkNum = tDA[i].valtozas;
         getIndex = i;
      }
   }
   console.log(
      `A legtöbbet javító csapat adatai:
      Csapat név: ${tDA[getIndex].nev},
      Helyezés: ${tDA[getIndex].helyezes},
      Pontszám: ${tDA[getIndex].pont}`
   );
}

function getTeamPrompt() {
   return prompt("Adjon meg egy tetszőleges országot");
}

function checkTeamInList(tDA, gTI) {
   let found = false;
   for (let i = 0; i < tDA.length; i++) {
      if (tDA[i].nev == gTI) {
         found = true;
      }
   }
   if (found) {
      console.log(`${gTI} csapata rajta van az aktuális ranglistán.`);
   } else {
      console.log(`${gTI} csapata nincs rajta az aktuális ranglistán.`);
   }
}

arrayToObject(csapatAdat);
