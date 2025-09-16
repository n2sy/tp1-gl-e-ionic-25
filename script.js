let btnAjouter = document.getElementById("btn-add");
let inpIntitule = document.getElementById("intitule");
let inpMontant = document.getElementById("montant");
let categorie = document.getElementById("category");
let listeDepenses = document.getElementById("liste-dep");

const categoriesConfig = {
  alimentation: { emoji: "🍽️", label: "Alimentation", color: "success" },
  transport: { emoji: "🚗", label: "Transport", color: "primary" },
  loisirs: { emoji: "🎮", label: "Loisirs", color: "warning" },
  sante: { emoji: "⚕️", label: "Santé", color: "danger" },
  education: { emoji: "📚", label: "Éducation", color: "tertiary" },
  autres: { emoji: "📦", label: "Autres", color: "secondary" },
};

btnAjouter.addEventListener("click", () => {
  console.log(inpIntitule.value, inpMontant.value, categorie.value);

  let newBadge = document.createElement("ion-badge");
  newBadge.textContent = `${categoriesConfig[categorie.value]["emoji"]} ${
    categorie.value
  }`;
  newBadge.className = "category-badge";

  let newItem = document.createElement("ion-item");
  newItem.appendChild(newBadge);

  listeDepenses.appendChild(newItem);
});
