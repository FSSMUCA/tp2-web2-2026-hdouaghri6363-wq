let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

nom = nom.trim();
if (nom === "") {
  nom = "Inconnu";
}

age = parseInt(age);
if (Number.isNaN(age) || age <= 0) {
  age = "valeur invalide";
}

let emailValide = false;

if (email.includes("@") && email.indexOf(".", email.indexOf("@")) !== -1) {
  emailValide = true;
}

scoreJeu = parseInt(scoreJeu);
if (Number.isNaN(scoreJeu)) {
  scoreJeu = 0;
}

if (estAdmin === "true") {
  estAdmin = true;
} else {
  estAdmin = false;
}

derniereConnexion = derniereConnexion ?? "Jamais connecté";

nombreConnexions = Number(nombreConnexions);

let messageConnexion;

if (nombreConnexions === 0) {
  messageConnexion = "Aucune connexion";
} else {
  messageConnexion = nombreConnexions;
}

console.log("Nom:", nom);
console.log("Age:", age);
console.log("Email valide:", emailValide);
console.log("Score:", scoreJeu);
console.log("Admin:", estAdmin);
console.log("Dernière connexion:", derniereConnexion);
console.log("Connexions:", messageConnexion);