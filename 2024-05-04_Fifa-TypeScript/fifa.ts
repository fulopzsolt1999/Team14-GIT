interface FifaData {
   nev: string;
   helyezes: number;
   valtozas: number;
   pont: number;
}

dataArraytoInterface();

function dataArraytoInterface(): void {
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

   var teamsDataArray: FifaData[] = [];
   for (let i = 0; i < csapatAdat.length; i++) {
      let newTeam = {
         nev: csapatAdat[i].split(";")[0],
         helyezes: Number(csapatAdat[i].split(";")[1]),
         valtozas: Number(csapatAdat[i].split(";")[2]),
         pont: Number(csapatAdat[i].split(";")[3]),
      };
      teamsDataArray.push(newTeam);
   }
   mainFunction(teamsDataArray);
}

function mainFunction(tDA: any): void {
   outputTeamsNum(tDA);
   let avgPoint: number = avgTeamPoint(tDA);
   getTeamsAboveAvgPoint(tDA, avgPoint);
   getMostImprovedTeam(tDA);
   let getTeamInp: string | null = getTeamPrompt();
   checkTeamInList(tDA, getTeamInp);
   pointChangeStatistics(tDA);
}

function outputTeamsNum(tDA: any) {
   console.log(`Aktuálisan ${tDA.length} csapat szerepel a ranglistán.`);
}

function avgTeamPoint(tDA: any): number {
   let allPoints: number = 0;
   for (let i: number = 0; i < tDA.length; i++) {
      allPoints += tDA[i].pont;
   }
   console.log(`A résztvevő csapatok átlagpontszáma: ${allPoints / tDA.length}`);
   return allPoints / tDA.length;
}

function getTeamsAboveAvgPoint(tDA: any, aP: any) {
   let outputArray: FifaData[] = [];
   for (let i: number = 0; i < tDA.length; i++) {
      if (tDA[i].pont > aP) {
         outputArray.push(tDA[i]);
      }
   }
   console.table(outputArray);
}

function getMostImprovedTeam(tDA: any) {
   let checkNum: number = 0;
   let getIndex: number = 0;
   for (let i: number = 0; i < tDA.length; i++) {
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

function checkTeamInList(tDA: any, gTI: any) {
   let found: boolean = false;
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

function pointChangeStatistics(tDA: any) {
   let allPointChanges: number[] = [];
   let pointChangesObj: Map<number, number> = new Map();
   for (let i = 0; i < tDA.length; i++) {
      allPointChanges.push(tDA[i].valtozas);
   }
   allPointChanges.forEach((change) => {
      pointChangesObj.set(change, (pointChangesObj.get(change) || 0) + 1);
   });
   console.table(pointChangesObj);
}
