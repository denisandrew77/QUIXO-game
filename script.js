let matrice = [];
let dimensiuneBloc = 98.8;
let coordonatePunctStart = 103;
let buton;

function setup() {
  createCanvas(900, 700);
  buton = createButton('Joc Nou');
  buton.position(750, 20);
  buton.mousePressed(resetareJoc);
  resetareJoc();
}

function resetareJoc() {
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
      if ((i == 1 || i == 5 || j == 1 || j == 5) && mouseX >= matrice[i][j].coordonataX && mouseX <= matrice[i][j].coordonataX + dimensiuneBloc && mouseY >= matrice[i][j].coordonataY && mouseY <= matrice[i][j].coordonataY + dimensiuneBloc) {
        matrice[i][j].valoare = 1;
      }
    }
  }
}

function draw() {
  butonJocNou();
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
  background("#795548");
  fill(72, 45, 3);
  ellipse(350, 350, 700, 700);
  rect(103, 103, 494, 494);
}

function butonJocNou() {
  buton.style('background-color', '#D6A797');
  buton.style('color', 'black');
  buton.style('font-size', '20px');
  buton.style('padding', '10px');
  buton.style('border', '5px');
  buton.style('text-align', 'center');
  buton.style('cursor', 'pointer');
}
