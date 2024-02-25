function ingredientsCalculator() {
   let people = document.querySelector("#people").value;
   let milk = document.querySelector("#milk");
   let egg = document.querySelector("#egg");
   let sugar = document.querySelector("#sugar");
   milk.innerHTML = `${people / 5} l tej`;
   egg.innerHTML = `${2 * people} db tojás`;
   sugar.innerHTML = `${1 * people} ek kristálycukor`;
}
