let fishList = [
  ["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus Saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"],
];

lecture(fishList);

function lecture(fishList) {
  let i = 0;
  let currentElement;

  let tbl = document.createElement("table");
  document.body.appendChild(tbl);
  let head = document.createElement("thead");
  tbl.appendChild(head);
  let headLine = document.createElement("tr");
  head.appendChild(headLine);
  let body = document.createElement("tbody");
  tbl.appendChild(body);

  let headData = fishList[0];

  while (i < headData.length) {
    currentElement = headData[i];
    let headCell = document.createElement("th");
    headLine.appendChild(headCell);
    headCell.textContent = currentElement;
    headCell.style.color = "red";

    let j = 1;
    while (j < fishList.length) {
      let currentElement1 = currentElement[j];
      let bodyLine = document.createElement("tr");
      body.appendChild(bodyLine);

      let k = 1;
      while (k < currentElement1.length) {
        let currentElement2 = currentElement[k];
        let bodyCell = document.createElement("td");
        bodyLine.appendChild(bodyCell);
        bodyCell.textContent = currentElement2;
        k++;
      }
      j++;
    }
    i++;
  }
} // ne fonctionne pas
