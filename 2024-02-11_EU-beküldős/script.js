function euData() {
   const EuropaiUnio = [
      {
         orszag: "Ausztria",
         csatlakozas: "1995.01.01",
      },
      {
         orszag: "Belgium",
         csatlakozas: "1958.01.01",
      },
      {
         orszag: "Bulgária",
         csatlakozas: "2007.01.01",
      },
      {
         orszag: "Ciprus",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Csehország",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Dánia",
         csatlakozas: "1973.01.01",
      },
      {
         orszag: "Egyesült Királyság",
         csatlakozas: "1973.01.01",
      },
      {
         orszag: "Észtország",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Finnország",
         csatlakozas: "1995.01.01",
      },
      {
         orszag: "Franciaország",
         csatlakozas: "1958.01.01",
      },
      {
         orszag: "Görögország",
         csatlakozas: "1981.01.01",
      },
      {
         orszag: "Hollandia",
         csatlakozas: "1958.01.01",
      },
      {
         orszag: "Horvátország",
         csatlakozas: "2013.07.01",
      },
      {
         orszag: "Írország",
         csatlakozas: "1973.01.01",
      },
      {
         orszag: "Lengyelország",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Lettország",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Litvánia",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Luxemburg",
         csatlakozas: "1958.01.01",
      },
      {
         orszag: "Magyarország",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Málta",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Németország",
         csatlakozas: "1958.01.01",
      },
      {
         orszag: "Olaszország",
         csatlakozas: "1958.01.01",
      },
      {
         orszag: "Portugália",
         csatlakozas: "1986.01.01",
      },
      {
         orszag: "Románia",
         csatlakozas: "2007.01.01",
      },
      {
         orszag: "Spanyolország",
         csatlakozas: "1986.01.01",
      },
      {
         orszag: "Svédország",
         csatlakozas: "1995.01.01",
      },
      {
         orszag: "Szlovákia",
         csatlakozas: "2004.05.01",
      },
      {
         orszag: "Szlovénia",
         csatlakozas: "2004.05.01",
      },
   ];
   return EuropaiUnio;
}

function euMembers(euObj) {
   console.log(`${euObj.length} tagja van az EU-nak.`);
}

function members2007Join(euObj) {
   console.log(`########## 2007-ben csatlakozott országok: ##########`);
   for (let i = 0; i < euObj.length; i++) {
      if (Number(euObj[i].csatlakozas.slice(0, 4)) == 2007) {
         console.log(euObj[i].orszag);
      }
   }
}

function checkHungaryMembership(euObj) {
   for (let i = 0; i < euObj.length; i++) {
      if (euObj[i].orszag == "Magyarország") {
         console.log("Magyarország tagja az EU-nak.");
      }
   }
}

function checkJoinMay(euObj) {
   let count = 0;
   for (let i = 0; i < euObj.length; i++) {
      if (Number(euObj[i].csatlakozas.slice(5, 7)) == 5) {
         count++;
      }
   }
   console.log(`Igen, májusban ${count} ország csatlakozott.`);
}

function lastJoin(euObj) {
   let joinDate = Date.parse(euObj[0].csatlakozas);
   let currentCheck = 0;
   if (joinDate < 0) {
      joinDate *= -1;
   }
   let lastJoinIndex = 0;

   for (let i = 0; i < euObj.length; i++) {
      currentCheck = Date.parse(euObj[i].csatlakozas);
      if (currentCheck < 0) {
         currentCheck *= -1;
      }
      if (currentCheck > joinDate) {
         lastJoinIndex = i;
         joinDate = currentCheck;
      }
   }
   console.log(
      `Utoljára csatlakozott ország: ${euObj[lastJoinIndex].orszag}, ${euObj[lastJoinIndex].csatlakozas} évben.`
   );
}

function joinStatictics(euObj) {
   let joinDates = [];
   let joinDatesObj = {};
   for (let i = 0; i < euObj.length; i++) {
      joinDates.push(Number(euObj[i].csatlakozas.slice(0, 4)));
   }
   let uniqueArray = [...new Set(joinDates)].sort();
   for (let i = 0; i < uniqueArray.length; i++) {
      let count = 0;
      joinDates.forEach((element) => {
         if (uniqueArray[i] == element) {
            count += 1;
         }
         return count;
      });
      joinDatesObj[uniqueArray[i]] = count;
   }
   console.log(joinDatesObj);
}

let euObj = euData();
euMembers(euObj);
members2007Join(euObj);
checkHungaryMembership(euObj);
checkJoinMay(euObj);
lastJoin(euObj);
joinStatictics(euObj);
