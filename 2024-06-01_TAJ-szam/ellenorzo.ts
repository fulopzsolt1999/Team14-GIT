/*
   TAJ szám => input min és max 9 számjegy és kiírni
   9. számjegyet eltárolni egy másik változóban és kiírni
   Első 8 számjeggyel => páratlan helyen *3, páros helyen *7 majd összegezni a kapott szorzatokat és kiírni
   Az összeget 10el osztva meg kell kapni maradékul a 9. számjegyet és kiírni hogy helyes a taj szám vagy hibás
 */

interface Digits {
   index: number;
   value: number;
}

document.querySelector("form")?.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
      event.preventDefault();
   }
});

document.querySelector(".btn")?.addEventListener("click", () => {
   let inputValue: string = getTAJInputValue();
   let inputValidate: boolean = checkDigitsNumber(inputValue);
   if (inputValidate) {
      handleFunctionsIfInputValid(inputValue);
   }
});

function getTAJInputValue(): string {
   let tajInput: any = document.querySelector("#taj-number");
   return tajInput.value;
}

function checkDigitsNumber(inputValue: string): boolean {
   if (inputValue.length === 9) {
      return true;
   }
   return false;
}

function handleFunctionsIfInputValid(inputValue: string): void {
   let allDigits: [Digits[], number] = getTAJNumberLastDigit(inputValue);
   let sumOfMultipliedDigits: number = getSumOfMultiplies(allDigits[0]);
   let tajNumberValidity: string = checkTAJNumberValidity(sumOfMultipliedDigits, allDigits[1]);
   showTheResult(inputValue, allDigits[1], sumOfMultipliedDigits, tajNumberValidity);
}

function getTAJNumberLastDigit(inputValue: string): [Digits[], number] {
   let allDigits: [Digits[], number] = [[], 0];
   for (let i = 0; i < inputValue.length; i++) {
      if (i < inputValue.length - 1) {
         allDigits[0].push({index: i, value: Number(inputValue[i])});
      } else {
         allDigits[1] = Number(inputValue[i]);
      }
   }
   return allDigits;
}

function getSumOfMultiplies(allDigits: Digits[]): number {
   let multipliedDigits: Digits[] = getMultipliedDigits(allDigits);
   return getSumOfMultipliedDigits(multipliedDigits);
}

function getMultipliedDigits(allDigits: Digits[]): Digits[] {
   allDigits.map((digits) => {
      if (digits.index % 2 === 0) {
         digits.value *= 3;
      } else {
         digits.value *= 7;
      }
   });
   return allDigits;
}

function getSumOfMultipliedDigits(multipliedDigits: Digits[]): number {
   let sumMultiplies: number = 0;
   multipliedDigits.map((digits) => {
      sumMultiplies += digits.value;
   });
   return sumMultiplies;
}

function checkTAJNumberValidity(sumOfMultipliedDigits: number, lastDigit: number): string {
   if (sumOfMultipliedDigits % 10 === lastDigit) {
      return "Helyes TAJ szám";
   }
   return "Hibás TAJ szám";
}
function showTheResult(
   inputValue: string,
   controlDigit: number,
   sumOfMultipliedDigits: number,
   tajNumberValidity: string
) {
   let resultDiv: any = document.querySelector(".result");
   resultDiv.innerHTML = `
      <p>Megadott TAJ-szám: ${inputValue}</p>
      <p>Az ellenőrzőszámjegy: ${controlDigit}</p>
      <p>A szorzatok összege: ${sumOfMultipliedDigits}</p>
      <p>${tajNumberValidity}</p>
   `;
}
