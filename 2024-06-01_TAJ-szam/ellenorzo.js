/*
   TAJ szám => input min és max 9 számjegy és kiírni
   9. számjegyet eltárolni egy másik változóban és kiírni
   Első 8 számjeggyel => páratlan helyen *3, páros helyen *7 majd összegezni a kapott szorzatokat és kiírni
   Az összeget 10el osztva meg kell kapni maradékul a 9. számjegyet és kiírni hogy helyes a taj szám vagy hibás
 */
var _a, _b;
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});
(_b = document.querySelector(".btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var inputValue = getTAJInputValue();
    var inputValidate = checkDigitsNumber(inputValue);
    if (inputValidate) {
        inputFieldToDefault();
        handleFunctionsIfInputValid(inputValue);
    }
});
function getTAJInputValue() {
    return document.querySelector("#taj-number").value;
}
function checkDigitsNumber(inputValue) {
    if (inputValue.length === 9) {
        return true;
    }
    return false;
}
function inputFieldToDefault() {
    document.querySelector("#taj-number").value = "";
}
function handleFunctionsIfInputValid(inputValue) {
    var allDigits = getTAJNumberLastDigit(inputValue);
    var sumOfMultipliedDigits = getSumOfMultiplies(allDigits[0]);
    var tajNumberValidity = checkTAJNumberValidity(sumOfMultipliedDigits, allDigits[1]);
    showTheResult(inputValue, allDigits[1], sumOfMultipliedDigits, tajNumberValidity);
}
function getTAJNumberLastDigit(inputValue) {
    var allDigits = [[], 0];
    for (var i = 0; i < inputValue.length; i++) {
        if (i < inputValue.length - 1) {
            allDigits[0].push({ index: i, value: Number(inputValue[i]) });
        }
        else {
            allDigits[1] = Number(inputValue[i]);
        }
    }
    return allDigits;
}
function getSumOfMultiplies(allDigits) {
    var multipliedDigits = getMultipliedDigits(allDigits);
    return getSumOfMultipliedDigits(multipliedDigits);
}
function getMultipliedDigits(allDigits) {
    allDigits.map(function (digits) {
        if (digits.index % 2 === 0) {
            digits.value *= 3;
        }
        else {
            digits.value *= 7;
        }
    });
    return allDigits;
}
function getSumOfMultipliedDigits(multipliedDigits) {
    var sumMultiplies = 0;
    multipliedDigits.map(function (digits) {
        sumMultiplies += digits.value;
    });
    return sumMultiplies;
}
function checkTAJNumberValidity(sumOfMultipliedDigits, lastDigit) {
    if (sumOfMultipliedDigits % 10 === lastDigit) {
        return "Helyes TAJ szám";
    }
    return "Hibás TAJ szám";
}
function showTheResult(inputValue, controlDigit, sumOfMultipliedDigits, tajNumberValidity) {
    showTheResultDivElement();
    var resultDiv = document.querySelector(".result");
    if (resultDiv) {
        resultDiv.innerHTML = "\n      <p>Megadott TAJ-sz\u00E1m: <i><u>".concat(inputValue, "</u></i></p>\n      <p>Az ellen\u0151rz\u0151sz\u00E1mjegy: <i><u>").concat(controlDigit, "</u></i></p>\n      <p>A szorzatok \u00F6sszege: <i><u>").concat(sumOfMultipliedDigits, "</u></i></p>\n      <p class=\"text-center\"><b>").concat(tajNumberValidity, "</b></p>\n   ");
    }
}
function showTheResultDivElement() {
    var _a;
    (_a = document.querySelector(".result")) === null || _a === void 0 ? void 0 : _a.removeAttribute("hidden");
}
