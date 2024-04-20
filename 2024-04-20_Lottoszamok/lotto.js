//Első verzió
//Probléma: nem szűröm az ismétlődést, akár egy szám többször is előfordulhat a "sorsolás" során...
function OtosLottoszamGeneratorV1() {
    let lottoSzamok = []
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 4) + 1;
        lottoSzamok.push(generaltSzam);
    }
    return lottoSzamok;
}


//Második verzió
//Probléma: Ha egy szám ismétlődik, akkor kevesebb kihúzott szám került a tömbbe, mert akkor is léptet, ha az adott szám már szerepelt...

function OtosLottoszamGeneratorV2() {
    let lottoSzamok = [];
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 4) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam)
        }
    }
    return lottoSzamok;
}


//Harmadik verzió
//TELJESEN JÓ - For ciklussal
function OtosLottoszamGeneratorV3() {
    let lottoSzamok = [];
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 4) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam)
        }
        else {
            i--;
        }
    }
    return lottoSzamok;
}
//TESZTRÉSZ:
console.log("BUGOS: Ismétlődés nincs szűrve:")
console.log(OtosLottoszamGeneratorV1());

console.log("BUGOS: Kevesebb szám van ha ismétlődik:")
console.log(OtosLottoszamGeneratorV2());


console.log("Megoldás: For cilkussal:")
console.log(OtosLottoszamGeneratorV3());



//Negyedik verzió
//TELJESEN JÓ - While ciklussal
function OtosLottoszamGeneratorV4() {
    let lottoSzamok = [];
    while (lottoSzamok.length < 5) {
        let generaltSzam = Math.round(Math.random() * 4) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam);
        }
    }
    return lottoSzamok;
}

console.log("Megoldás: While cilkussal:")
console.log(OtosLottoszamGeneratorV4());


//Ötödik verzió
//TELJESEN JÓ - While ciklussal és includdal
function OtosLottoszamGeneratorV5() {
    let lottoSzamok = [];
    while (lottoSzamok.length < 5) {
        let generaltSzam = Math.round(Math.random() * 4) + 1;
        if (!lottoSzamok.includes(generaltSzam)) {
            lottoSzamok.push(generaltSzam);
        }
    }
    return lottoSzamok;
}

console.log("Megoldás: While ciklussal és includdal")
console.log(OtosLottoszamGeneratorV4());

//Hatodik verzió
//TELJESEN JÓ - UNIVERZÁLIS LOTTÓSZÁM GENERÁTOR
function UniverzalisLottoszamGenerator(szamokMennyisege, maxKihuzhatoSzam) {
    if (szamokMennyisege <= maxKihuzhatoSzam) {
        let lottoSzamok = [];
        while (lottoSzamok.length < szamokMennyisege) {
            let generaltSzam = Math.round(Math.random() * (maxKihuzhatoSzam - 1)) + 1;
            if (!lottoSzamok.includes(generaltSzam)) {
                lottoSzamok.push(generaltSzam);
            }
        }
        return lottoSzamok;
    }
    else {
        return "NEM megfelelő a függvény paraméterezése!";
    }
}
console.log("rossz érték, nagyobb a szám mennyisége, mint az intervallum");
console.log(UniverzalisLottoszamGenerator(10, 4));


console.log("Pont annyi a számok mennyisége, mint az intervallum nagysága");
console.log(UniverzalisLottoszamGenerator(5, 5));

console.log("Ötös lottószám generátor");
console.log(UniverzalisLottoszamGenerator(5, 90));


console.log("Skandináv lottó generátor");
console.log(UniverzalisLottoszamGenerator(7, 35));


console.log("Hatos lottó generátor");
console.log(UniverzalisLottoszamGenerator(6, 45));


console.log("KENÓ generátor");
console.log(UniverzalisLottoszamGenerator(20, 80));

/*
- Aktuálisan kihúzott számokat vizulásan kiválasztani...("golyókkal megjeleníteni")
- Melyik számot hányszor húzták ki, valamilyen táblázatos vagy lista formában. Esetleg lottó típust is választani...
- Melyik volt a leggyakoribb és a legritkábban kihúzott szám
- Melyik volt a legkisebb és a legnagyobb kihúzott szám mind közül, és a terjedelem a számok között(legkisebb és a legnagyobb érték közötti különbség)
- Aktuálisan a legkisebb és a legnagyobb kihúzott szám, és a terjedelem a számok között(legkisebb és a legnagyobb érték közötti különbség)
- A táblázatos forma esetén, az aktuálisan "kihúzott számokat" más színnel jelölje meg...
- Találat számláló, a te számaid közül, mennyi szerepel és mennyi volt az eddig összes találatod(akár lebontva 1-5 találtra...)

*/