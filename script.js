let matrice = [];
let dimensiuneBloc = 98.8;
let coordonatePunctStart = 103;

function setup() {
  createCanvas(700, 700);
  for (i = 1; i <= 5; i++) {
    matrice[i] = [];
    for (j = 1; j <= 5; j++) {
      matrice[i][j] = {
        valoare: 0,
        coordonataX: coordonatePunctStart + (i - 1) * dimensiuneBloc,
        coordonataY: coordonatePunctStart + (j - 1) * dimensiuneBloc,
        dimensiuneBloc: 98.8
      }
    }
  }
}
function mousePressed() {
  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
      if ((i == 1 || i == 5 || j == 1 || j == 5) && mouseX >= matrice[i][j].coordonataX && mouseX <= matrice[i][j].coordonataX + dimensiuneBloc
        && mouseY >= matrice[i][j].coordonataY && mouseY <= matrice[i][j].coordonataY + dimensiuneBloc) {
        matrice[i][j].valoare = 1;
      }
    }
  }


}
function draw() {
  tablaDeJoc();
  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
      if (matrice[i][j].valoare == 1) {
        fill("red");
      }
      else {
        fill(232, 189, 124);
      }

      rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
    }
  }
}
function tablaDeJoc() {
  background("white");
  fill(72, 45, 3);
  ellipse(350, 350, 700, 700);
  fill(232, 189, 124);
  rect(103, 103, 494, 494);
}