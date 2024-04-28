$(document).ready(async () => {
   const text = await fetch("colornames.txt").then(($) => $.text());
   const lines = text.split("\n");
   var colorsData = [];
   for (let i = 0; i < lines.length; i++) {
      colorsData.push([lines[i].split(",")[0], lines[i].split(",")[1]]);
   }

   function RgbToHex(r, g, b) {
      return ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
   }

   $(".input-class").on("input", (e) => {
      const colorFirstLetter = e.target.id[0];
      let newValue = $(e.target).val();
      switch (colorFirstLetter) {
         case "r":
            $("#red-value").html(newValue);
            break;
         case "g":
            $("#green-value").html(newValue);
            break;
         case "b":
            $("#blue-value").html(newValue);
            break;

         default:
            break;
      }
   });

   $("#search").click(() => {
      const getUserRGB = GetColorFromInput();
      const getUserHEX = RgbToHex(getUserRGB.red, getUserRGB.green, getUserRGB.blue);
      $("#color-HEX").html(`#${getUserHEX}`);
      GetColorHexCodeAndName(getUserHEX);
      ChangeBackgroundColor(getUserRGB);
      RGBcolorCode(getUserRGB);
      ChangeFontColor(getUserRGB);
   });

   const GetColorHexCodeAndName = (HEX) => {
      $("#color-name").html("");
      for (let i = 0; i < colorsData.length; i++) {
         if (HEX === colorsData[i][0]) {
            $("#color-name").html(colorsData[i][1]);
         }
      }
   };

   function GetColorFromInput() {
      const r = $("#red-value").html();
      const g = $("#green-value").html();
      const b = $("#blue-value").html();
      let color = {
         red: r,
         green: g,
         blue: b,
      };
      return color;
   }

   function ChangeBackgroundColor(color) {
      let setColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
      document.body.style.backgroundColor = setColor;
   }

   function RGBcolorCode(color) {
      $("#color-RGB").html(`rgb(${color.red}, ${color.green}, ${color.blue})`);
   }

   function ChangeFontColor(color) {
      if (color.red > 125 || color.green > 125 || color.blue > 125) {
         document.body.style.color = "black";
         document.querySelector("#color-mix-platform").style.borderColor = "black";
      } else {
         document.body.style.color = "white";
         document.querySelector("#color-mix-platform").style.borderColor = "white";
      }
   }

   //Szorgalmi:

   //Gombokhoz rendelt event függvényeket próbáljátok meg paraméteresen elkészíteni
   //HEXA kód megjelenítése RGB alatt
   //MAZOISTÁKNAK: szöveges kifejezés megjelenítése szintén...
});
