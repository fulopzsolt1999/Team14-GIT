$(document).ready(function () {
   var allLotto5Numbers = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      25: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
      32: 0,
      33: 0,
      34: 0,
      35: 0,
      36: 0,
      37: 0,
      38: 0,
      39: 0,
      40: 0,
      41: 0,
      42: 0,
      43: 0,
      44: 0,
      45: 0,
      46: 0,
      47: 0,
      48: 0,
      49: 0,
      50: 0,
      51: 0,
      52: 0,
      53: 0,
      54: 0,
      55: 0,
      56: 0,
      57: 0,
      58: 0,
      59: 0,
      60: 0,
      61: 0,
      62: 0,
      63: 0,
      64: 0,
      65: 0,
      66: 0,
      67: 0,
      68: 0,
      69: 0,
      70: 0,
      71: 0,
      72: 0,
      73: 0,
      74: 0,
      75: 0,
      76: 0,
      77: 0,
      78: 0,
      79: 0,
      80: 0,
      81: 0,
      82: 0,
      83: 0,
      84: 0,
      85: 0,
      86: 0,
      87: 0,
      88: 0,
      89: 0,
      90: 0,
   };
   var allLotto6Numbers = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      25: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
      32: 0,
      33: 0,
      34: 0,
      35: 0,
      36: 0,
      37: 0,
      38: 0,
      39: 0,
      40: 0,
      41: 0,
      42: 0,
      43: 0,
      44: 0,
      45: 0,
   };
   var allSkandinavNumbers = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      25: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
      32: 0,
      33: 0,
      34: 0,
      35: 0,
   };
   const LottoNumberGenerator = (lottoType, lottoMaxNumber) => {
      if (lottoType <= lottoMaxNumber) {
         let lottoNumbers = [];
         while (lottoNumbers.length < lottoType) {
            let genNumber = Math.round(Math.random() * (lottoMaxNumber - 1)) + 1;
            if (!lottoNumbers.includes(genNumber)) {
               switch (Number(lottoType)) {
                  case 5:
                     const allLotto5NumbersKeys = Object.keys(allLotto5Numbers);
                     for (let i = 0; i < allLotto5NumbersKeys.length; i++) {
                        if (genNumber === Number(allLotto5NumbersKeys[i])) {
                           allLotto5Numbers[allLotto5NumbersKeys[i]]++;
                        }
                     }
                     break;
                  case 6:
                     const allLotto6NumbersKeys = Object.keys(allLotto6Numbers);
                     for (let i = 0; i < allLotto6NumbersKeys.length; i++) {
                        if (genNumber === Number(allLotto6NumbersKeys[i])) {
                           allLotto6Numbers[allLotto6NumbersKeys[i]]++;
                        }
                     }
                     break;
                  case 7:
                     const allSkandinavKeys = Object.keys(allSkandinavNumbers);
                     for (let i = 0; i < allSkandinavKeys.length; i++) {
                        if (genNumber === Number(allSkandinavKeys[i])) {
                           allSkandinavNumbers[allSkandinavKeys[i]]++;
                        }
                     }
                     break;

                  default:
                     break;
               }
               lottoNumbers.push(genNumber);
            }
         }
         lottoNumbers.sort((a, b) => {
            return a - b;
         });
         return lottoNumbers;
      } else {
         return "NEM megfelelő a függvény paraméterezése!";
      }
   };

   $("#btn-5-lotto").click(function () {
      const lotto5Numbers = LottoNumberGenerator($("#btn-5-lotto").val(), 90);
      const lottoType = $("#btn-5-lotto").val();
      $(".ball-container").html("");
      GenerateNumberChoosingBox(90);
      GenerateBalls(lottoType, lotto5Numbers);
      GenerateTable(lottoType);
      AppendTableWithData(allLotto5Numbers, lotto5Numbers);
   });

   $("#btn-6-lotto").click(function () {
      const lotto6Numbers = LottoNumberGenerator($("#btn-6-lotto").val(), 45);
      const lottoType = $("#btn-6-lotto").val();
      $(".ball-container").html("");
      GenerateBalls(lottoType, lotto6Numbers);
      GenerateTable(lottoType);
      AppendTableWithData(allLotto6Numbers, lotto6Numbers);
   });

   $("#btn-skandinav").click(function () {
      const lottoSkandinavNumbers = LottoNumberGenerator($("#btn-skandinav").val(), 35);
      const lottoType = $("#btn-skandinav").val();
      $(".ball-container").html("");
      GenerateBalls(lottoType, lottoSkandinavNumbers);
      GenerateTable(lottoType);
      AppendTableWithData(allSkandinavNumbers, lottoSkandinavNumbers);
   });

   const GenerateNumberChoosingBox = (numbers) => {
      for (let i = 0; i < numbers; i++) {
         $("#my-lotto-5-numbers").append(`<li><button value="${i}">${i}</button></li>`);
      }
   };

   const GenerateBalls = (ballsNum, lottoNumbers) => {
      for (let i = 0; i < ballsNum; i++) {
         $(".ball-container").append(
            `<div class='show-ball row'><img src='img/blank_ball.png'><span id='ball-number-${i}'>${lottoNumbers[i]}</span></div>`
         );
      }
   };

   const GenerateTable = (lottoType) => {
      $(".table-container").html("");
      if (lottoType == 7) {
         lottoType = "Skandinav";
      }
      $(".table-container").append(
         `<table class="table table-hover table-striped table-dark">
            <tr>
               <th>Vizsgálat</th>
               <th>${lottoType} Lottó Adatok</th>
            </tr>
            <tr>
               <th>Szám előfordulás</th>
               <td id="lotto-num-cell">
                  <div class="row" id="lotto-num-stat"></div>
               </td>
            </tr>
            <tr>
               <th>Legritkábban kihúzott szám</th>
               <td id="least-drawed-num"></td>
            </tr>
            <tr>
               <th>Leggyakrabban kihúzott szám</th>
               <td id="most-drawed-num"></td>
            </tr>
            <tr>
               <th>Legkisebb kihúzott szám összesítve</th>
               <td id="lowest-drawed-num"></td>
            </tr>
            <tr>
               <th>Legnagyobb kihúzott szám összesítve</th>
               <td id="biggest-drawed-num"></td>
            </tr>
            <tr>
               <th>Legnagyobb és Legkisebb kihúzott szám különbsége összesítve</th>
               <td id="diff-drawed-num"></td>
            </tr>
            <tr>
               <th>Legkisebb kihúzott szám aktuális</th>
               <td id="act-lowest-drawed-num"></td>
            </tr>
            <tr>
               <th>Legnagyobb kihúzott szám aktuális</th>
               <td id="act-biggest-drawed-num"></td>
            </tr>
            <tr>
               <th>Legnagyobb és Legkisebb kihúzott szám különbsége aktuális</th>
               <td id="act-diff-drawed-num"></td>
            </tr>
         </table>`
      );
   };

   const AppendTableWithData = (lottoNumbersObj, actLottoNums) => {
      const objValues = Object.values(lottoNumbersObj);
      const objKeys = Object.keys(lottoNumbersObj);
      let mostDrawedNum = Math.max(...objValues.map((item) => item));
      let leastDrawedNum = Math.min(...objValues.map((item) => item));
      let biggestDrawedNum = 0;
      let lowestDrawedNum = objKeys.length;

      objKeys.forEach((key) => {
         if (actLottoNums.includes(Number(key))) {
            $("#lotto-num-stat").append(
               `<div class="col-1 p-0 m-2 text-dark bg-light" id="num"><${key} - ${lottoNumbersObj[key]}> </div>`
            );
         } else {
            $("#lotto-num-stat").append(
               `<div class="col-1 p-0 m-2" id="num"><${key} - ${lottoNumbersObj[key]}> </div>`
            );
         }
         if (lottoNumbersObj[key] === mostDrawedNum) {
            $("#most-drawed-num").append(`<${key}> `);
         } else if (lottoNumbersObj[key] === leastDrawedNum) {
            $("#least-drawed-num").append(`<${key}> `);
         }
         if (lottoNumbersObj[key] > 0) {
            biggestDrawedNum = key;
         }
      });
      for (let i = 0; i < objKeys.length; i++) {
         if (objValues[i] > 0 && objKeys[i] < lowestDrawedNum) {
            lowestDrawedNum = objKeys[i];
            break;
         }
      }

      $("#biggest-drawed-num").html(biggestDrawedNum);
      $("#lowest-drawed-num").html(lowestDrawedNum);
      $("#diff-drawed-num").html(biggestDrawedNum - lowestDrawedNum);

      $("#act-biggest-drawed-num").html(actLottoNums[actLottoNums.length - 1]);
      $("#act-lowest-drawed-num").html(actLottoNums[0]);
      $("#act-diff-drawed-num").html(actLottoNums[actLottoNums.length - 1] - actLottoNums[0]);
   };
});

/*
- Aktuálisan kihúzott számokat vizulásan kiválasztani...("golyókkal megjeleníteni")
- Melyik számot hányszor húzták ki, valamilyen táblázatos vagy lista formában. Esetleg lottó típust is választani...
- Melyik volt a leggyakoribb és a legritkábban kihúzott szám
- Melyik volt a legkisebb és a legnagyobb kihúzott szám mind közül, és a terjedelem a számok között(legkisebb és a legnagyobb érték közötti különbség)
- Aktuálisan a legkisebb és a legnagyobb kihúzott szám, és a terjedelem a számok között(legkisebb és a legnagyobb érték közötti különbség)
- A táblázatos forma esetén, az aktuálisan "kihúzott számokat" más színnel jelölje meg...
- Találat számláló, a te számaid közül, mennyi szerepel és mennyi volt az eddig összes találatod(akár lebontva 1-5 találtra...)

*/
