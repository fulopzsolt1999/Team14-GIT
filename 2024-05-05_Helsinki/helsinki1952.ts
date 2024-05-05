interface Helsinki {
   rank: number;
   people: number;
   sport: string;
   event: string;
}

interface Medals {
   medal: string;
   count: number;
}

interface Sport {
   sport: string;
   medals: number;
}

interface Rankings {
   ranking: number;
   score: number;
}
var helsinki: string[] = [
   "1 1 atletika kalapacsvetes",
   "1 1 uszas 400m_gyorsuszas",
   "1 1 birkozas kotott_fogas_legsuly",
   "1 1 torna talajtorna",
   "1 1 torna felemas_korlat",
   "1 1 vivas kardvivas_egyeni",
   "1 1 okolvivas nagyvaltosuly",
   "1 1 uszas 200m_melluszas",
   "1 1 birkozas kotott_fogas_valtosuly",
   "1 1 uszas 100m_gyorsuszas",
   "1 1 sportloveszet onmukodo_sportpisztoly",
   "1 15 labdarugas ferfi_csapat",
   "1 3 ottusa ferfi_csapat",
   "1 6 vivas kardvivas_csapat",
   "1 5 uszas 4x100m_gyorsuszo_valto",
   "1 13 vizilabda ferfi_csapat",
   "2 1 ottusa ottusa_egyeni",
   "2 1 vivas torvivas_egyeni",
   "2 1 vivas kardvivas_egyeni",
   "2 1 sportloveszet onmukodo_sportpisztoly",
   "2 1 uszas 400m_gyorsuszas",
   "2 1 uszas 200m_melluszas",
   "2 1 kajakkenu kenu_egyes_10000m",
   "2 1 kajakkenu kajak_egyes_1000m",
   "2 1 birkozas kotott_fogas_pehelysuly",
   "2 8 torna noi_osszetett_csapat",
   "3 1 sportloveszet sportpisztoly",
   "3 1 vivas kardvivas_egyeni",
   "3 1 atletika tavolugras",
   "3 1 birkozas szabad_fogas_kozepsuly",
   "3 1 torna felemas_korlat",
   "3 1 torna osszetett_egyeni",
   "3 1 torna gerenda",
   "3 1 torna talajtorna",
   "3 1 atletika kalapacsvetes",
   "3 1 atletika 50km_gyaloglas",
   "3 1 ottusa ottusa_egyeni",
   "3 1 uszas 100m_gyorsuszas",
   "3 4 atletika 4x100m_valtofutas",
   "3 2 kajakkenu kenu_kettes_10000m",
   "3 8 torna keziszer_csapat",
   "3 6 vivas torvivas_csapat",
   "4 1 torna gerenda",
   "4 1 uszas 200m_mell",
   "4 1 birkozas kotottfogas_felnehezsuly",
   "4 1 torna talaj",
   "4 1 birkozas kotottfogas_kozepsuly",
   "4 1 birkozas kotottfogas_konnyusuly",
   "5 1 okolvivas pehelysuly",
   "5 1 okolvivas konnyusuly",
   "5 1 uszas 100m_gyors",
   "5 1 atletika diszkoszvetes",
   "5 1 vivas parbajtor_egyeni",
   "5 2 kajak-kenu kenu_kettes_1000m",
   "5 2 kerekparozas ketuleses_verseny",
   "5 4 uszas 4x200m_gyorsvalto",
   "5 5 vivas parbajtor_csapat",
   "6 1 birkozas kotottfogas_legsuly",
   "6 1 kajak-kenu kajak_egyes_500m",
   "6 1 torna osszetett_egyeni",
   "6 1 kerekparozas repuloverseny",
   "6 1 uszas 400m_gyors",
   "6 1 torna felemaskorlat",
   "6 8 torna osszetett_csapat",
];

function mainFunc(helsinki: string[]): void {
   var helsinkiInterface = arrayToInterface(helsinki);
   var thirdEx: number = helsinkiInterface.length;
   var fourthEx: Medals[] = getMedals(helsinkiInterface);
   var fifthEx: number = getOlympScoresSum(helsinkiInterface);
   var sixthEx: string = getMostMedalsInSport(helsinkiInterface);
   var seventhEx: string[][] = getHelsinki2(helsinki);
   var eighthEx: Helsinki[] = getMostSportMembers(helsinkiInterface);

   sendResultToConsole(thirdEx, fourthEx, fifthEx, sixthEx, eighthEx);
}

mainFunc(helsinki);

function arrayToInterface(helsinki: string[]): Helsinki[] {
   let helsinkiObj: Helsinki[] = [];
   for (let i = 0; i < helsinki.length; i++) {
      let newHelsinki = {
         rank: Number(helsinki[i].split(" ")[0]),
         people: Number(helsinki[i].split(" ")[1]),
         sport: helsinki[i].split(" ")[2],
         event: helsinki[i].split(" ")[3],
      };
      helsinkiObj.push(newHelsinki);
   }
   return helsinkiObj;
}

function getMedals(hI: Helsinki[]): Medals[] {
   var medalsObj: Medals[] = [
      {medal: "Arany", count: 0},
      {medal: "Ezüst", count: 0},
      {medal: "Bronz", count: 0},
   ];
   for (let i = 0; i < hI.length; i++) {
      if (hI[i].rank === 1) {
         medalsObj[0].count += 1;
      } else if (hI[i].rank === 2) {
         medalsObj[1].count += 1;
      } else if (hI[i].rank === 3) {
         medalsObj[2].count += 1;
      }
   }
   return medalsObj;
}

function getOlympScoresSum(hI: Helsinki[]): number {
   var scoresSum: number = 0;
   for (let i = 0; i < hI.length; i++) {
      switch (hI[i].rank) {
         case 1:
            scoresSum += 7;
            break;
         case 2:
            scoresSum += 5;
            break;
         case 3:
            scoresSum += 4;
            break;
         case 4:
            scoresSum += 3;
            break;
         case 5:
            scoresSum += 2;
            break;
         case 6:
            scoresSum += 1;
            break;

         default:
            break;
      }
   }
   return scoresSum;
}

function getMostMedalsInSport(hI: Helsinki[]): string {
   let sportsAndMedals: Sport[] = [];
   var sports: string[] = [];
   var result: string;

   for (let i = 0; i < hI.length; i++) {
      if (!sports.includes(hI[i].sport) && (hI[i].sport === "torna" || hI[i].sport === "uszas")) {
         sports.push(hI[i].sport);
         sportsAndMedals.push({sport: hI[i].sport, medals: 1});
      } else {
         for (let j = 0; j < sportsAndMedals.length; j++) {
            if (sportsAndMedals[j].sport === hI[i].sport) {
               sportsAndMedals[j].medals += 1;
            }
         }
      }
   }

   if (sportsAndMedals[0].medals > sportsAndMedals[1].medals) {
      result = `6. Feladat:\n${sportsAndMedals[0].sport
         .charAt(0)
         .toUpperCase()}${sportsAndMedals[0].sport.substring(1)} sportágban szereztek több érmet`;
   } else if (sportsAndMedals[0].medals < sportsAndMedals[1].medals) {
      result = `6. Feladat:\n${sportsAndMedals[1].sport
         .charAt(0)
         .toUpperCase()}${sportsAndMedals[1].sport.substring(1)} sportágban szereztek több érmet`;
   } else {
      result = "Egyenlő volt az érmek száma";
   }

   return result;
}

function getHelsinki2(h: string[]): string[][] {
   var helsinki2: string[][] = [];
   for (let i = 0; i < helsinki.length; i++) {
      let olympScore: string = "";
      switch (Number(helsinki[i].split(" ")[0])) {
         case 1:
            olympScore = "7";
            break;
         case 2:
            olympScore = "5";
            break;
         case 3:
            olympScore = "4";
            break;
         case 4:
            olympScore = "3";
            break;
         case 5:
            olympScore = "2";
            break;
         case 6:
            olympScore = "1";
            break;

         default:
            break;
      }
      let newHelsinki = [
         helsinki[i].split(" ")[0],
         helsinki[i].split(" ")[1],
         olympScore,
         helsinki[i].split(" ")[2],
         helsinki[i].split(" ")[3],
      ];
      if (newHelsinki[3] === "kajakkenu") {
         newHelsinki[3] = "kajak-kenu";
      }
      helsinki2.push(newHelsinki);
   }
   return helsinki2;
}

function getMostSportMembers(hI: Helsinki[]): Helsinki[] {
   let mostMembers: Helsinki[] = [hI[0]];
   let justMembers: number[] = [];
   for (let i = 0; i < hI.length; i++) {
      justMembers.push(hI[i].people);
   }
   for (let i = 0; i < hI.length; i++) {
      if (justMembers[i] > mostMembers[0].people) {
         mostMembers[0] = hI[i];
      }
   }
   return mostMembers;
}

function sendResultToConsole(
   thirdEx: number,
   fourthEx: Medals[],
   fifthEx: number,
   sixthEx: string,
   eighthEx: Helsinki[]
) {
   console.log(`3. Feladat:\nPontszerző helyezések száma: ${thirdEx}`);
   console.log("4. Feladat:");
   var allMedal: number = 0;
   for (let i = 0; i < fourthEx.length; i++) {
      allMedal += fourthEx[i].count;
      console.log(`${fourthEx[i].medal}: ${fourthEx[i].count}`);
   }
   console.log(`Összesen: ${allMedal}`);
   console.log(`5. Feladat:\nOlimpiai pontok száma: ${fifthEx}`);
   console.log(sixthEx);
   console.log(
      `8. Feladat:\nHelyezés: ${eighthEx[0].rank}\nSportág: ${eighthEx[0].sport}\nVersenyszám: ${eighthEx[0].event}\nSportolók száma: ${eighthEx[0].people}`
   );
}
