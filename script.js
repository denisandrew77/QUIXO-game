let matrice=[];
let dimensiuneBloc=98.8; 
let coordonatePunctStart=103;

function setup()
{
    createCanvas(700,700);
  for(i=1;i<=5;i++)
  {
    matrice[i]=[];
  for(j=1;j<=5;j++)
    {
      matrice[i][j]={
        valoare:0,
        coordonataX:coordonatePunctStart+(i-1)*dimensiuneBloc,
        coordonataY:coordonatePunctStart+(j-1)*dimensiuneBloc,
        dimensiuneBloc:98.8
      }
    }
  }
}
function draw()
{
    tablaDeJoc();
  for(i=1;i<=5;i++)
  {
  for(j=1;j<=5;j++)
    {
     let x=coordonatePunctStart+(i-1)*dimensiuneBloc;
      let y=coordonatePunctStart+(j-1)*dimensiuneBloc;
      rect(x,y,dimensiuneBloc,dimensiuneBloc);
    }
  }
} 
function tablaDeJoc()
{
    background("white");
    fill(72,45,3);
    ellipse(350,350,700,700);
    fill(232, 189, 124);
    rect(103,103,494,494);
}