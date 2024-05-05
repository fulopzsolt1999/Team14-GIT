/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/
function KivalasztottBetuk(vizsgaltSzoveg: string, kivalasztottBetuk: string[]): number {
   let kivalasztottBetukSzama: number = 0;
   for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
      for (let j: number = 0; j < kivalasztottBetuk.length; j++) {
         if (vizsgaltSzoveg[i] == kivalasztottBetuk[j]) {
            kivalasztottBetukSzama++;
         }
      }
   }
   return kivalasztottBetukSzama;
}

function Szamtani(elsoErtek: number, masodikErtek: number, harmadikErtek: number): boolean {
   if (masodikErtek - elsoErtek === harmadikErtek - masodikErtek) {
      return true;
   }
   return false;
}

function VizsgaJegy(osszPont: number): string {
   if (osszPont >= 80) {
      return "Jeles";
   } else if (osszPont >= 70) {
      return "Jó";
   } else if (osszPont >= 60) {
      return "Közepes";
   } else if (osszPont >= 50) {
      return "Elégséges";
   } else {
      return "Elégtelen";
   }
}
