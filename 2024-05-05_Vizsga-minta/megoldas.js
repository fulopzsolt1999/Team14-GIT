/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/
function KivalasztottBetuk(vizsgaltSzoveg, kivalasztottBetuk) {
    var kivalasztottBetukSzama = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < kivalasztottBetuk.length; j++) {
            if (vizsgaltSzoveg[i] == kivalasztottBetuk[j]) {
                kivalasztottBetukSzama++;
            }
        }
    }
    return kivalasztottBetukSzama;
}
function Szamtani(elsoErtek, masodikErtek, harmadikErtek) {
    if (masodikErtek - elsoErtek === harmadikErtek - masodikErtek) {
        return true;
    }
    return false;
}
function VizsgaJegy(osszPont) {
    if (osszPont >= 80) {
        return "Jeles";
    }
    else if (osszPont >= 70) {
        return "Jó";
    }
    else if (osszPont >= 60) {
        return "Közepes";
    }
    else if (osszPont >= 50) {
        return "Elégséges";
    }
    else {
        return "Elégtelen";
    }
}
