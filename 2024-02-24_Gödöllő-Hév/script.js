document.querySelector("#btn").addEventListener("click", () => {
   let departureStations = document.querySelector("#departure");
   let selectedDepartureStation = departureStations.options[departureStations.selectedIndex].value;
   let destinationStations = document.querySelector("#destination");
   let selectedDestinationStation =
      destinationStations.options[destinationStations.selectedIndex].value;
   if (selectedDepartureStation != selectedDestinationStation) {
      window.alert(
         `Menetidő: ${Math.abs(selectedDestinationStation - selectedDepartureStation)} perc!`
      );
   } else {
      window.alert("Hiba: Azonos megállókat választott ki!");
   }
});
