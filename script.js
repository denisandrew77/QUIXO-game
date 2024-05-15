let matrice = [];
let dimensiuneBloc = 98.8;
let coordonatePunctStart = 103;
let buton;
let caseta1, caseta2;

function setup() {
  createCanvas(900, 700);
  buton = createButton('Joc Nou');
  buton.position(750, 20);
  buton.mousePressed(resetareJoc);

  caseta1 = createInput();
  caseta1.position(750, 80);
  caseta1.attribute('placeholder', 'Jucătorul 1');
  caseta1.size(120, 20);

  caseta2 = createInput();
  caseta2.position(750, 130);
  caseta2.attribute('placeholder', 'Jucătorul 2');
  caseta2.size(120, 20);

  resetareJoc();
}

function resetareJoc() {
  for (i = 1; i <= 5; i++) {
    matrice[i] = [];
    for (j = 1; j <= 5; j++) {
      matrice[i][j] = {
        valoare: 0,
        coordonataY: coordonatePunctStart + (i - 1) * dimensiuneBloc,
        coordonataX: coordonatePunctStart + (j - 1) * dimensiuneBloc,
        dimensiuneBloc: 98.8
      }
    }
  }
  caseta1.value('');
  caseta2.value('');
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
  casetaJucatorul1();
  casetaJucatorul2();
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

function casetaJucatorul1() {
  caseta1.style('background-color', '#D6A797');
  caseta1.style('font-size', '20px');
  caseta1.style('padding', '10px');
  caseta1.style('border', '5px');
  caseta1.style('text-align', 'left');
  caseta1.style('cursor', 'text');
}

function casetaJucatorul2() {
  caseta2.style('background-color', '#D6A797');
  caseta2.style('font-size', '20px');
  caseta2.style('padding', '10px');
  caseta2.style('border', '5px');
  caseta2.style('text-align', 'left');
  caseta2.style('cursor', 'text');
}