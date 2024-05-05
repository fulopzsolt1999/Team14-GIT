
function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Kiválasztott betűk mennyisége", "Szeretem a programozást,['e','a']", 5, KivalasztottBetuk("Szeretem a programozást", ["e", "a"]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kiválasztott betűk mennyisége", "Szeretem a programozást,['e','a']", 5);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Kiválasztott betűk mennyisége", "Sikerült a vizsga,['e','a','l']", 4, KivalasztottBetuk("Sikerült a vizsga", ["e", "a", "l"]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kiválasztott betűk mennyisége", "Sikerült a vizsga,['e','a','l']", 4);
    }
}


function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Kiválasztott betűk mennyisége", "A typescript programozási nyelv,['p','o','e']", 7, KivalasztottBetuk("A typescript programozási nyelv", ["p", "o", "e"]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Kiválasztott betűk mennyisége", "A typescript programozási nyelv,['p','o','e']", 7);
    }
}





function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Számtani sorozat-e?", "2, 4, 6", true, Szamtani(2, 4, 6));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani sorozat-e?", "2, 4, 6", true);
    }
}


function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Számtani sorozat-e?", "3, 5, 9", false, Szamtani(3, 5, 9));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani sorozat-e?", "3, 5, 9", false);
    }
}


function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Számtani sorozat-e?", "7, 11, 21", false, Szamtani(7, 11, 21));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani sorozat-e?", "7, 11, 21", false);
    }
}


function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Számtani sorozat-e?", "1, 11, 21", true, Szamtani(1, 11, 21));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Számtani sorozat-e?", "1, 11, 21", true);
    }
}




function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 40, "Elégtelen", VizsgaJegy(40));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 40, "Elégtelen");
    }
}

function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 55, "Elégséges", VizsgaJegy(55));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 55, "Elégséges");
    }
}


function Teszt10() {
    try {
        FuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 60, "Közepes", VizsgaJegy(60));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 60, "Közepes");
    }
}

function Teszt11() {
    try {
        FuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 75, "Jó", VizsgaJegy(75));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 75, "Jó");
    }
}

function Teszt12() {
    try {
        FuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 90, "Jeles", VizsgaJegy(90));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Vizsgapont szöveges értékelése", 90, "Jeles");
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
    Teszt10();
    Teszt11();
    Teszt12();
}
TesztFuttato();