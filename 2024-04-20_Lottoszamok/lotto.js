$(document).ready(function () {
   const LottoNumberGenerator = (szamokMennyisege, maxKihuzhatoSzam) => {
      if (szamokMennyisege <= maxKihuzhatoSzam) {
         let lottoSzamok = [];
         while (lottoSzamok.length < szamokMennyisege) {
            let generaltSzam = Math.round(Math.random() * (maxKihuzhatoSzam - 1)) + 1;
            if (!lottoSzamok.includes(generaltSzam)) {
               lottoSzamok.push(generaltSzam);
            }
         }
         return lottoSzamok;
      } else {
         return "NEM megfelelő a függvény paraméterezése!";
      }
   };

   $("#btn-5-lotto").click(function () {
      $(".ball-container").html("");
      GenerateBalls($("#btn-5-lotto").val(), LottoNumberGenerator($("#btn-5-lotto").val(), 90));
   });
   $("#btn-6-lotto").click(function () {
      $(".ball-container").html("");
      GenerateBalls($("#btn-6-lotto").val(), LottoNumberGenerator($("#btn-6-lotto").val(), 45));
   });
   $("#btn-skandinav").click(function () {
      $(".ball-container").html("");
      GenerateBalls($("#btn-skandinav").val(), LottoNumberGenerator($("#btn-skandinav").val(), 35));
   });

   const GenerateBalls = (ballsNum, lottoNumbers) => {
      for (let i = 0; i < ballsNum; i++) {
         $(".ball-container").append(
            `<div class='show-ball row'><img src='img/blank_ball.png'><span id='ball-number-${i}'>${lottoNumbers[i]}</span></div>`
         );
      }
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
