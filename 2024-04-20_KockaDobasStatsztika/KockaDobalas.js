$(document).ready(() => {
   const RollDices = (rollNumber) => {
      let rolls = [];
      for (let i = 0; i < rollNumber; i++) {
         rolls.push(Math.round(Math.random() * 5) + 1);
      }
      return rolls;
   };

   var rolledNumbers = [];

   $("#kockaEldobasa").click(() => {
      ShowDice();
      const allRolledNumbers = ShowRolledNumbers();
      ShowTwoFourSixPercents(allRolledNumbers);
   });

   const ShowDice = () => {
      rolledNumbers = RollDices(3);
      $("#kockaKep01").css("backgroundImage", `url(img/${rolledNumbers[0]}.png)`);
      $("#kockaKep02").css("backgroundImage", `url(img/${rolledNumbers[1]}.png)`);
      $("#kockaKep03").css("backgroundImage", `url(img/${rolledNumbers[2]}.png)`);

      //TRIPLA DOBÁS FELADATOK:
      MaxRoll(rolledNumbers);
      SixRoll(rolledNumbers);
      SameNumbers(rolledNumbers);
   };

   const ShowRolledNumbers = () => {
      let diceNumbers = {
         one: $("#ones").html(),
         two: $("#twos").html(),
         three: $("#threes").html(),
         four: $("#fours").html(),
         five: $("#fives").html(),
         six: $("#sixs").html(),
         rollsSum: () => {
            return (
               Number(diceNumbers.one) +
               Number(diceNumbers.two) +
               Number(diceNumbers.three) +
               Number(diceNumbers.four) +
               Number(diceNumbers.five) +
               Number(diceNumbers.six)
            );
         },
      };

      for (let i = 0; i < rolledNumbers.length; i++) {
         switch (rolledNumbers[i]) {
            case 1:
               diceNumbers.one++;
               $("#ones").html(diceNumbers.one);
               break;
            case 2:
               diceNumbers.two++;
               $("#twos").html(diceNumbers.two);
               break;
            case 3:
               diceNumbers.three++;
               $("#threes").html(diceNumbers.three);
               break;
            case 4:
               diceNumbers.four++;
               $("#fours").html(diceNumbers.four);
               break;
            case 5:
               diceNumbers.five++;
               $("#fives").html(diceNumbers.five);
               break;
            case 6:
               diceNumbers.six++;
               $("#sixs").html(diceNumbers.six);
               break;
            default:
               break;
         }
      }
      $("#rolls-sum").html(diceNumbers.rollsSum);
      return diceNumbers;
   };

   const ShowTwoFourSixPercents = (aRN) => {
      $("#two-percent").html(`${Math.round((Number(aRN.two) / aRN.rollsSum()) * 100).toFixed(2)}%`);
      $("#four-percent").html(
         `${Math.round((Number(aRN.four) / aRN.rollsSum()) * 100).toFixed(2)}%`
      );
      $("#six-percent").html(`${Math.round((Number(aRN.six) / aRN.rollsSum()) * 100).toFixed(2)}%`);
   };

   const MaxRoll = (rolledNumbers) => {
      let rolledNumbersSum = rolledNumbers[0] + rolledNumbers[1] + rolledNumbers[2];
      let biggestSum = $("#legnagyobb").html();
      if (rolledNumbersSum > biggestSum) {
         $("#legnagyobb").html(rolledNumbersSum);
      }
   };

   const SixRoll = (rolledNumbers) => {
      for (let i = 0; i < rolledNumbers.length; i++) {
         if (rolledNumbers[i] == 6) {
            let prevValue = $("#hatosok").html(); //Kiolvasom
            prevValue++; //Növelem
            $("#hatosok").html(prevValue); //Visszaírom
         }
      }
   };
   const SameNumbers = (rolledNumbers) => {
      if (rolledNumbers[0] == rolledNumbers[1] && rolledNumbers[1] == rolledNumbers[2]) {
         let prevValue = $("#egyformak").html(); //Kiolvasom
         prevValue++; //Növelem
         $("#egyformak").html(prevValue); //Visszaírom
      }
   };
});
