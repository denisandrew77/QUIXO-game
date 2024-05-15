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

function mousePressed() 
{
  outerloop: for (i = 1; i <= 5; i++) 
  {
    for (j = 1; j <= 5; j++) 
    {
      if ((i == 1 || i == 5 || j == 1 || j == 5) && mouseX >= matrice[i][j].coordonataX && mouseX <= matrice[i][j].coordonataX + dimensiuneBloc && mouseY >= matrice[i][j].coordonataY && mouseY <= matrice[i][j].coordonataY + dimensiuneBloc) 
      {
        //1,1
      if(mouseX>=matrice[1][1].coordonataX && mouseX<=matrice[1][1].coordonataX+dimensiuneBloc && mouseY>=matrice[1][1].coordonataY && mouseY<=matrice[1][1].coordonataY+dimensiuneBloc)
        {
          for(let u=2;u<=5;u++)
            {
              if(matrice[1][u].valoare==1)
                {
                  matrice[1][u].valoare=0;
                  matrice[1][1].valoare=2;
                  break outerloop;
                }
              else if(matrice[u][1].valoare==1)
                {
                  matrice[u][1].valoare=0;
                  matrice[1][1].valoare=2;
                  break outerloop;
                }
            }
        }
      ///5,1
      else if(mouseX>=matrice[5][1].coordonataX && mouseX<=matrice[5][1].coordonataX+dimensiuneBloc && mouseY>=matrice[5][1].coordonataY && mouseY<=matrice[5][1].coordonataY+dimensiuneBloc)
        {
         for(let u=1;u<=4;u++)
           {
             if(matrice[u][1].valoare==1)
               {
                 matrice[u][1].valoare=0;
                 matrice[5][1].valoare=2;
                 break outerloop;
               }
             else if(matrice[5][u+1].valoare==1)
               {
                 matrice[5][u+1].valoare=0;
                 matrice[5][1].valoare=2;
                 break outerloop;
               }
           }
        }
      ///1,5
      else if(mouseX>=matrice[1][5].coordonataX && mouseX<=matrice[1][5].coordonataX+dimensiuneBloc && mouseY>=matrice[1][5].coordonataY && mouseY<=matrice[1][5].coordonataY+dimensiuneBloc)
        {
          for(let u=1;u<=4;u++)
            {
              if(matrice[1][u].valoare==1)
                {
                  matrice[1][u].valoare=0;
                  matrice[1][5].valoare=2;
                  break outerloop;
                }
              else if(matrice[u+1][5].valoare==1)
                {
                  matrice[u+1][5].valoare=0;
                  matrice[1][5].valoare=2;
                  break outerloop;
                }
            }
        }
      ///5,5
      else if(mouseX>=matrice[5][5].coordonataX && mouseX<=matrice[5][5].coordonataX+dimensiuneBloc && mouseY>=matrice[5][5].coordonataY && mouseY<+matrice[5][5].coordonataY+dimensiuneBloc )
        {
          for(let u=1;u<=4;u++)
            {
              if(matrice[5][u].valoare==1)
                {
                  matrice[5][u].valoare=0;
                  matrice[5][5].valoare=2;
                  break outerloop;
                }
              else if(matrice[u][5].valoare==1)
                {
                  matrice[u][5].valoare=0;
                  matrice[5][5].valoare=2;
                  break outerloop;
                }
            }
        }
      ///i==1
      else if(mouseY>=matrice[1][2].coordonataY && mouseY<=matrice[2][2].coordonataY)
        {
          if(mouseX>=matrice[1][2].coordonataX && mouseX<=matrice[1][3].coordonataX && matrice[5][2].valoare==1)
            {
              matrice[5][2].valoare=0;
              matrice[1][2].valoare=2;
            }
          else if(mouseX>=matrice[1][3].coordonataX && mouseX<=matrice[1][4].coordonataX && matrice[5][3].valoare==1)
            {
              matrice[5][3].valoare=0;
              matrice[1][3].valoare=2;
            }
          else if(mouseX>=matrice[1][4].coordonataX && mouseX<=matrice[1][5].coordonataX && matrice[5][4].valoare==1)
            {
              matrice[5][4].valoare=0;
              matrice[1][4].valoare=2;
            }
        }
      ///i==5
      else if(mouseY>=matrice[5][1].coordonataY && mouseY<=matrice[5][1].coordonataY+dimensiuneBloc)
        {
          if(mouseX>=matrice[5][2].coordonataX && mouseX<=matrice[5][3].coordonataX && matrice[1][2].valoare==1)
            {
              matrice[1][2].valoare=0;
              matrice[5][2].valoare=2;
            }
          else if(mouseX>=matrice[5][3].coordonataX && mouseX<=matrice[5][4].coordonataX && matrice[1][3].valoare==1)
            {
              matrice[1][3].valoare=0;
              matrice[5][3].valoare=2;
            }
          else if(mouseX>=matrice[5][4].coordonataX && mouseX<=matrice[5][5].coordonataX && matrice[1][4].valoare==1)
            {
              matrice[1][4].valoare=0;
              matrice[5][4].valoare=2;
            }
        }
      ///j==1
      else if(mouseX>=matrice[2][1].coordonataX && mouseX<=matrice[2][2].coordonataX)
        {
          if(mouseY>=matrice[2][1].coordonataY && mouseY<=matrice[3][1].coordonataY && matrice[2][5].valoare==1)
            {
              matrice[2][5].valoare=0;
              matrice[2][1].valoare=2;
            }
          else if(mouseY>=matrice[3][1].coordonataY && mouseY<=matrice[4][1].coordonataY && matrice[3][5].valoare==1)
            {
              matrice[3][5].valoare=0;
              matrice[3][1].valoare=2;
            }
          else if(mouseY>=matrice[4][1].coordonataY && mouseY<=matrice[5][1].coordonataY && matrice[4][5].valoare==1)
            {
              matrice[4][5].valoare=0;
              matrice[4][1].valoare=2;
            }
        }
      ///j==5
      else if(mouseX>=matrice[2][5].coordonataX && mouseX<=matrice[2][5].coordonataX+dimensiuneBloc)
        {
          if(mouseY>=matrice[2][5].coordonataY && mouseY<=matrice[3][5].coordonataY && matrice[2][1].valoare==1)
            {
              matrice[2][1].valoare=0;
              matrice[2][5].valoare=2;
            }
          else if(mouseY>=matrice[3][5].coordonataY && mouseY<=matrice[4][5].coordonataY && matrice[3][1].valoare==1)
            {
              matrice[3][1].valoare=0;
              matrice[3][5].valoare=2;
            }
          else if(mouseY>=matrice[4][5].coordonataY && mouseY<=matrice[5][5].coordonataY && matrice[4][1].valoare==1)
            {
              matrice[4][1].valoare=0;
              matrice[4][5].valoare=2;
            }
        }
      /// untouched box
        let a=0;
        if(matrice[i][j].valoare==0)
          {
            for (k = 1; k <= 5; k++) 
            {
                for (m = 1; m <= 5; m++) 
                {
                  if(matrice[k][m].valoare==1)
                    {
                      a++;
                    }
                }
            }
            if(a==0)
              {
                matrice[i][j].valoare=1;
              }
          }
      }
    }
  }
}

function draw() {
  casetaJucatorul1();
  casetaJucatorul2();
  butonJocNou();
  tablaDeJoc();
  let a=0;
  for (i = 1; i <= 5; i++) 
  {
    for (j = 1; j <= 5; j++) 
    {
      if (matrice[i][j].valoare == 1) 
      {
        fill("red");
        rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
      }
      else if(matrice[i][j].valoare==2 && a%2==0)
        {
          fill("rgb(177,54,54)"); 
          rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
          strokeWeight(5);
          circle(matrice[i][j].coordonataX+dimensiuneBloc/2,matrice[i][j].coordonataY+dimensiuneBloc/2,60);
          strokeWeight(1);
        }
      else if(matrice[i][j].valoare==2 && a%2!=0)
              {
              fill("rgb(177,54,54)");
              strokeWeight(1);
              rect(matrice[i][j].coordonataX,matrice[i][j].coordonataY,dimensiuneBloc,dimensiuneBloc);
              strokeWeight(5);
              line(matrice[i][j].coordonataX+20,matrice[i][j].coordonataY+20,matrice[i][j].coordonataX+dimensiuneBloc-20,matrice[i][j].coordonataY+dimensiuneBloc-20);
  line(matrice[i][j].coordonataX+20,matrice[i][j].coordonataY+dimensiuneBloc-20,matrice[i][j].coordonataX+dimensiuneBloc-20,matrice[i][j].coordonataY+20);
                strokeWeight(1);

              }
      else {
        fill(232, 189, 124);
        rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
      }
      a++;
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