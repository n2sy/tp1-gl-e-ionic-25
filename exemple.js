function Etudiant(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;
}

let e1 = new Etudiant("Mootez", "Aouinti");
e1.age = 23;
let e2 = new Etudiant("Zeineb", "ben ayed");
delete e2.nom;

console.log(e1, e2);
