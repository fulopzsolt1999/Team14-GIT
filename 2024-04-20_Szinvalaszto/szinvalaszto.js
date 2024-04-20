redSet.addEventListener("input", redValueChange);
function redValueChange() {
    let newValue = document.querySelector("#redSet").value;
    document.querySelector("#redValue").innerHTML = newValue;
    let aktSzin = SzinKinyero();
    Szinkevero(aktSzin);
    SzinkodRGB(aktSzin);
    LathatoBetuszin(aktSzin);
}


greenSet.addEventListener("input", greenValueChange);
function greenValueChange() {
    let newValue = document.querySelector("#greenSet").value;
    document.querySelector("#greenValue").innerHTML = newValue;
    let aktSzin = SzinKinyero();
    Szinkevero(aktSzin);
    SzinkodRGB(aktSzin);
    LathatoBetuszin(aktSzin);
}


blueSet.addEventListener("input", blueValueChange);
function blueValueChange() {
    let newValue = document.querySelector("#blueSet").value;
    document.querySelector("#blueValue").innerHTML = newValue;
    let aktSzin = SzinKinyero();
    Szinkevero(aktSzin);
    SzinkodRGB(aktSzin);
    LathatoBetuszin(aktSzin);
}

function SzinKinyero() {
    let r = document.querySelector("#redValue").innerHTML;
    let g = document.querySelector("#greenValue").innerHTML;
    let b = document.querySelector("#blueValue").innerHTML;
    let kinyertSzin = { red: r, green: g, blue: b };
    return kinyertSzin
}

function Szinkevero(szin) {
    let setColor = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
    document.body.style.backgroundColor = setColor;
}

function SzinkodRGB(szin) {
    document.querySelector("#RGBkodMegjelenito").innerHTML = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
}

function LathatoBetuszin(szin) {
    if (szin.red > 125 || szin.green > 125 || szin.blue > 125) {
        document.body.style.color = "black";
        document.querySelector("#keveroFelulet").style.borderColor = "black";
    }
    else {
        document.body.style.color = "white";
        document.querySelector("#keveroFelulet").style.borderColor = "white";
    }
}

//Szorgalmi:

//Gombokhoz rendelt event függvényeket próbáljátok meg paraméteresen elkészíteni
//HEXA kód megjelenítése RGB alatt
//MAZOISTÁKNAK: szöveges kifejezés megjelenítése szintén...