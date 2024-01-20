// Event listener to clicking the submit button after choosing the lottery
document.getElementById("btn").addEventListener("click", () => {
   let lottery = document.getElementById("lot-num").value;
   randNumGen(lottery);
});

// Define which lottery and the min-max number on that lottery
function randNumGen(lottery) {
   let maxNum = 0;
   let lotNum = 0;
   if (lottery == 1) {
      lotNum = 5;
      maxNum = 90;
   } else if (lottery == 2) {
      lotNum = 6;
      maxNum = 45;
   } else {
      lotNum = 5;
      maxNum = 50;
   }
   // Call the random number generate function
   lotteryGenerate(lotNum, maxNum);
}

function lotteryGenerate(lotNum, maxNum) {
   let randNumsList = [];
   const minNum = 1;
   // Firstly generate the main numbers
   for (let i = 0; i < lotNum; i++) {
      let randNum = Math.floor(Math.random() * maxNum + minNum);
      if (!randNumsList.includes(randNum)) {
         randNumsList.push(randNum);
      } else {
         i--;
      }
   }
   // Secondly if it is the eurojackpot generate an additional 2 numbers
   if (maxNum == 50) {
      let secRandNumsList = [];
      let secondMax = 10;
      for (let i = 0; i < 2; i++) {
         let randNum = Math.floor(Math.random() * secondMax + minNum);
         if (!secRandNumsList.includes(randNum)) {
            secRandNumsList.push(randNum);
         } else {
            i--;
         }
      }
      // Lastly add the additional number list to the main number list
      randNumsList.push(secRandNumsList);
   }
   // Print out the result to the console
   console.log(randNumsList);
}
