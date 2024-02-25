function ingredientsCalculator() {
   let people = document.querySelector("#people").value;
   let milk = document.querySelector("#milk");
   let egg = document.querySelector("#egg");
   let sugar = document.querySelector("#sugar");
   milk.innerHTML = `${0.2 * people} l tej`;
   egg.innerHTML = `${2 * people} db tojás`;
   sugar.innerHTML = `${1 * people} ek kristálycukor`;
}
