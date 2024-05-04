dataArraytoInterface();
function dataArraytoInterface() {
    var csapatAdat = [
        "Anglia;4;0;1662",
        "Argentína;10;0;1614",
        "Belgium;1;0;1752",
        "Brazília;3;-1;1719",
        "Chile;17;-3;1576",
        "Dánia;14;-1;1584",
        "Franciaország;2;1;1725",
        "Hollandia;13;3;1586",
        "Horvátország;8;-1;1625",
        "Kolumbia;9;-1;1622",
        "Mexikó;12;0;1603",
        "Németország;16;-1;1580",
        "Olaszország;15;1;1583",
        "Peru;19;0;1551",
        "Portugália;5;1;1643",
        "Spanyolország;7;2;1631",
        "Svájc;11;0;1604",
        "Svédország;18;0;1560",
        "Szenegál;20;0;1546",
        "Uruguay;6;-1;1639",
    ];
    var teamsDataArray = [];
    for (var i = 0; i < csapatAdat.length; i++) {
        var newTeam = {
            nev: csapatAdat[i].split(";")[0],
            helyezes: Number(csapatAdat[i].split(";")[1]),
            valtozas: Number(csapatAdat[i].split(";")[2]),
            pont: Number(csapatAdat[i].split(";")[3]),
        };
        teamsDataArray.push(newTeam);
    }
    mainFunction(teamsDataArray);
}
function mainFunction(tDA) {
    outputTeamsNum(tDA);
    var avgPoint = avgTeamPoint(tDA);
    getTeamsAboveAvgPoint(tDA, avgPoint);
    getMostImprovedTeam(tDA);
    var getTeamInp = getTeamPrompt();
    checkTeamInList(tDA, getTeamInp);
    pointChangeStatistics(tDA);
}
function outputTeamsNum(tDA) {
    console.log("Aktu\u00E1lisan ".concat(tDA.length, " csapat szerepel a ranglist\u00E1n."));
}
function avgTeamPoint(tDA) {
    var allPoints = 0;
    for (var i = 0; i < tDA.length; i++) {
        allPoints += tDA[i].pont;
    }
    console.log("A r\u00E9sztvev\u0151 csapatok \u00E1tlagpontsz\u00E1ma: ".concat(allPoints / tDA.length));
    return allPoints / tDA.length;
}
function getTeamsAboveAvgPoint(tDA, aP) {
    var outputArray = [];
    for (var i = 0; i < tDA.length; i++) {
        if (tDA[i].pont > aP) {
            outputArray.push(tDA[i]);
        }
    }
    console.table(outputArray);
}
function getMostImprovedTeam(tDA) {
    var checkNum = 0;
    var getIndex = 0;
    for (var i = 0; i < tDA.length; i++) {
        if (tDA[i].valtozas > checkNum) {
            checkNum = tDA[i].valtozas;
            getIndex = i;
        }
    }
    console.log("A legt\u00F6bbet jav\u00EDt\u00F3 csapat adatai:\n      Csapat n\u00E9v: ".concat(tDA[getIndex].nev, ",\n      Helyez\u00E9s: ").concat(tDA[getIndex].helyezes, ",\n      Pontsz\u00E1m: ").concat(tDA[getIndex].pont));
}
function getTeamPrompt() {
    return prompt("Adjon meg egy tetszőleges országot");
}
function checkTeamInList(tDA, gTI) {
    var found = false;
    for (var i = 0; i < tDA.length; i++) {
        if (tDA[i].nev == gTI) {
            found = true;
        }
    }
    if (found) {
        console.log("".concat(gTI, " csapata rajta van az aktu\u00E1lis ranglist\u00E1n."));
    }
    else {
        console.log("".concat(gTI, " csapata nincs rajta az aktu\u00E1lis ranglist\u00E1n."));
    }
}
function pointChangeStatistics(tDA) {
    var allPointChanges = [];
    var pointChangesObj = new Map();
    for (var i = 0; i < tDA.length; i++) {
        allPointChanges.push(tDA[i].valtozas);
    }
    allPointChanges.forEach(function (change) {
        pointChangesObj.set(change, (pointChangesObj.get(change) || 0) + 1);
    });
    console.table(pointChangesObj);
}
