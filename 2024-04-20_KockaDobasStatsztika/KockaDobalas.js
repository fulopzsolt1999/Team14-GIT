$(document).ready(() => {
   var rolledNumbers = [];

   $("#kockaEldobasa").click(() => {
      ShowDice();
      const allRolledNumbers = ShowRolledNumbers();
      const rollsSum = SumAllRolledNumbers(allRolledNumbers);
      ShowTwoFourSixPercents(allRolledNumbers, rollsSum);
      DifferentNumbers(rolledNumbers);
      LeastRolled(allRolledNumbers);
      MostRolled(allRolledNumbers);
      OnlyOddRolls();
      SequenceRolls();
   });

   const RollDices = (rollNumber) => {
      let rolls = [];
      for (let i = 0; i < rollNumber; i++) {
         rolls.push(Math.round(Math.random() * 5) + 1);
      }
      return rolls;
   };

   const ShowDice = () => {
      rolledNumbers = RollDices(3);
      $("#kockaKep01").css("backgroundImage", `url(img/${rolledNumbers[0]}.png)`);
      $("#kockaKep02").css("backgroundImage", `url(img/${rolledNumbers[1]}.png)`);
      $("#kockaKep03").css("backgroundImage", `url(img/${rolledNumbers[2]}.png)`);
   };

   const ShowRolledNumbers = () => {
      let diceNumbers = [
         Number($("#ones").html()),
         Number($("#twos").html()),
         Number($("#threes").html()),
         Number($("#fours").html()),
         Number($("#fives").html()),
         Number($("#sixs").html()),
      ];

      for (let i = 0; i < rolledNumbers.length; i++) {
         switch (rolledNumbers[i]) {
            case 1:
               diceNumbers[0]++;
               $("#ones").html(diceNumbers[0]);
               break;
            case 2:
               diceNumbers[1]++;
               $("#twos").html(diceNumbers[1]);
               break;
            case 3:
               diceNumbers[2]++;
               $("#threes").html(diceNumbers[2]);
               break;
            case 4:
               diceNumbers[3]++;
               $("#fours").html(diceNumbers[3]);
               break;
            case 5:
               diceNumbers[4]++;
               $("#fives").html(diceNumbers[4]);
               break;
            case 6:
               diceNumbers[5]++;
               $("#sixs").html(diceNumbers[5]);
               break;
            default:
               break;
         }
      }

      return diceNumbers;
   };

   const SumAllRolledNumbers = (aRN) => {
      let rollsSum = 0;
      for (let i = 0; i < aRN.length; i++) {
         rollsSum += aRN[i];
      }
      $("#rolls-sum").html(rollsSum);
      return rollsSum;
   };

   const DifferentNumbers = (rolledNumbers) => {
      if (
         rolledNumbers[0] != rolledNumbers[1] &&
         rolledNumbers[1] != rolledNumbers[2] &&
         rolledNumbers[2] != rolledNumbers[0]
      ) {
         let prevValue = $("#all-diff-nums").html();
         prevValue++;
         $("#all-diff-nums").html(prevValue);
      }
   };

   const ShowTwoFourSixPercents = (aRN, rS) => {
      $("#two-percent").html(`${Math.round((Number(aRN[1]) / rS) * 100).toFixed(2)}%`);
      $("#four-percent").html(`${Math.round((Number(aRN[3]) / rS) * 100).toFixed(2)}%`);
      $("#six-percent").html(`${Math.round((Number(aRN[5]) / rS) * 100).toFixed(2)}%`);
   };

   const MostRolled = (aRN) => {
      let maxValueIndexes = [];
      let result = [];

      for (let i = 0; i < aRN.length; i++) {
         if (aRN[i] === aRN[aRN.indexOf(Math.max(...aRN))]) {
            maxValueIndexes.push(i);
         }
      }

      for (let i = 0; i < maxValueIndexes.length; i++) {
         switch (maxValueIndexes[i]) {
            case 0:
               result.push("1");
               break;
            case 1:
               result.push("2");
               break;
            case 2:
               result.push("3");
               break;
            case 3:
               result.push("4");
               break;
            case 4:
               result.push("5");
               break;
            case 5:
               result.push("6");
               break;

            default:
               break;
         }
      }
      $("#most-rolled").html(result.join(", "));
   };

   const LeastRolled = (aRN) => {
      let minValueIndexes = [];
      let result = [];

      for (let i = 0; i < aRN.length; i++) {
         if (aRN[i] === aRN[aRN.indexOf(Math.min(...aRN))]) {
            minValueIndexes.push(i);
         }
      }

      for (let i = 0; i < minValueIndexes.length; i++) {
         switch (minValueIndexes[i]) {
            case 0:
               result.push("1");
               break;
            case 1:
               result.push("2");
               break;
            case 2:
               result.push("3");
               break;
            case 3:
               result.push("4");
               break;
            case 4:
               result.push("5");
               break;
            case 5:
               result.push("6");
               break;

            default:
               break;
         }
      }
      $("#least-rolled").html(result.join(", "));
   };

   const OnlyOddRolls = () => {
      let onlyOddRolls = Number($("#only-odd").html());
      let oddCheck = true;
      for (let i = 0; i < rolledNumbers.length; i++) {
         if (rolledNumbers[i] % 2 === 0) {
            oddCheck = false;
            break;
         }
      }
      if (oddCheck) {
         onlyOddRolls++;
         $("#only-odd").html(onlyOddRolls);
      } else {
         $("#least-rolled").html(onlyOddRolls);
      }
   };

   const SequenceRolls = () => {
      let temp = rolledNumbers[0];
      let checkSequence = 0;
      let prevSeqRolls = $("#sequence").html();

      for (let i = 1; i < rolledNumbers.length; i++) {
         if (temp + 1 === rolledNumbers[i]) {
            temp = rolledNumbers[i];
            checkSequence++;
         }
      }

      temp = rolledNumbers[0];
      let checkSequenceReverse = 0;

      for (let i = 1; i < rolledNumbers.length; i++) {
         console.log(temp - 1, rolledNumbers[i]);
         if (temp - 1 === rolledNumbers[i]) {
            temp = rolledNumbers[i];
            checkSequenceReverse++;
         }
      }
      if (checkSequence === 2 || checkSequenceReverse === 2) {
         prevSeqRolls++;
         $("#sequence").html(prevSeqRolls);
      }
   };
});
