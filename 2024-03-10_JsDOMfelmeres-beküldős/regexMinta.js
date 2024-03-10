function validEmail(vizsgalandoEmail) {
   let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
   if (minta.test(vizsgalandoEmail)) {
      //==true val
      return true;
   } else {
      return false;
   }
}
