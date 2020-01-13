el// 2.1)
let titel = document.createElement("h1");
document.body.appendChild(titel);
titel.textContent = "Cinéma Le Dauphin";

let para = document.createElement("p");
document.body.appendChild(para);
para.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samehead
let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "Voir les films à l'affiche cette semaine";
btn.style.margin = "10px";


// 2.2) et 2.3)
let tab = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Khöler", "Allemagne", "2019", "2h", "VF"],
  ["UN VIOLENT DESIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "VF"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minvervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];
lecture(tab);

function lecture(tab) {
  let i = 0;
  let currentElement;

  let tbl = document.createElement("table");
  document.body.appendChild(tbl);
  let head = document.createElement("thead");
  tbl.appendChild(head);
  let headline = document.createElement("tr");
  head.appendChild(headline);
  let body = document.createElement("tbody");
  tbl.appendChild(body);

  let headerData = tab[0];

  while (i < headerData.length) {
    currentElement = headerData[i];
    let headcell = document.createElement("th");
    headline.appendChild(headcell);
    headcell.textContent = currentElement;
    i++;
  }

  let j = 1;
  while (j < tab.length) {
    currentElement1 = currentElement[j];
    let bodyline = document.createElement("tr");
    body.appendChild(bodyline);

    let k = 0;
    while (k < currentElement.length) {
      currentElement2 = currentElement[k];
      let bodycell = document.createElement("td");
      bodyline.appendChild(bodycell);
      bodycell.textContent = currentElement2;
      k++;
    }
    j++;
  }
} // ne fonctionne pas
