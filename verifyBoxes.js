/// verify if we have a selected square in the right position for the corner squares 
function ifSquare11()
{
    for(let u=2;u<=5;u++)
        {
          if(matrice[1][u].valoare==1)
            {
              matrice[1][u].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[1][1].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[1][1].valoare=3;
                  }
                  alternare++;
            }
          else if(matrice[u][1].valoare==1)
            {
              matrice[u][1].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[1][1].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[1][1].valoare=3;
                  }
                  alternare++;
            }
            
        }
}
function ifSquare51()
{
    for(let u=1;u<=4;u++)
        {
          if(matrice[u][1].valoare==1)
            {
              matrice[u][1].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[5][1].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[5][1].valoare=3;
                  }
                  alternare++;
            }
          else if(matrice[5][u+1].valoare==1)
            {
              matrice[5][u+1].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[5][1].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[5][1].valoare=3;
                  }
                  alternare++;
            }
        }
}
function ifSquare15()
{
    for(let u=1;u<=4;u++)
        {
          if(matrice[1][u].valoare==1)
            {
              matrice[1][u].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[1][5].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[1][5].valoare=3;
                  }
                  alternare++;
            }
          else if(matrice[u+1][5].valoare==1)
            {
              matrice[u+1][5].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[1][5].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[1][5].valoare=3;
                  }
                  alternare++;
            }
            
        }
}
function ifSquare55()
{
    for(let u=1;u<=4;u++)
        {
          if(matrice[5][u].valoare==1)
            {
              matrice[5][u].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[5][5].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[5][5].valoare=3;
                  }
                  alternare++;
            }
          else if(matrice[u][5].valoare==1)
            {
              matrice[u][5].valoare=0;
              if (alternare%2 == 0)
                {
                  matrice[5][5].valoare=2;
                }
                else if (alternare%2 != 0)
                  {
                    matrice[5][5].valoare=3;
                  }
                  alternare++;
            }
            
        }
}
// verify if we have a selected square in the designated spot for rows and columns
function ifRow1()
{
  if(mouseX>=matrice[1][2].coordonataX && mouseX<=matrice[1][3].coordonataX && matrice[5][2].valoare==1)
    {
      matrice[5][2].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[1][2].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[1][2].valoare=3;
          }
          alternare++;
    }
  else if(mouseX>=matrice[1][3].coordonataX && mouseX<=matrice[1][4].coordonataX && matrice[5][3].valoare==1)
    {
      matrice[5][3].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[1][3].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[1][3].valoare=3;
          }
          alternare++;
    }
  else if(mouseX>=matrice[1][4].coordonataX && mouseX<=matrice[1][5].coordonataX && matrice[5][4].valoare==1)
    {
      matrice[5][4].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[1][4].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[1][4].valoare=3;
          }
          alternare++;
    }
}
function ifRow5()
{
  if(mouseX>=matrice[5][2].coordonataX && mouseX<=matrice[5][3].coordonataX && matrice[1][2].valoare==1)
    {
      matrice[1][2].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[5][2].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[5][2].valoare=3;
          }
          alternare++;
    }
  else if(mouseX>=matrice[5][3].coordonataX && mouseX<=matrice[5][4].coordonataX && matrice[1][3].valoare==1)
    {
      matrice[1][3].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[5][3].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[5][3].valoare=3;
          }
          alternare++;
    }
  else if(mouseX>=matrice[5][4].coordonataX && mouseX<=matrice[5][5].coordonataX && matrice[1][4].valoare==1)
    {
      matrice[1][4].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[5][4].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[5][4].valoare=3;
          }
          alternare++;
    }
}
function ifColumn1()
{
  if(mouseY>=matrice[2][1].coordonataY && mouseY<=matrice[3][1].coordonataY && matrice[2][5].valoare==1)
    {
      matrice[2][5].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[2][1].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[2][1].valoare=3;
          }
          alternare++;
    }
  else if(mouseY>=matrice[3][1].coordonataY && mouseY<=matrice[4][1].coordonataY && matrice[3][5].valoare==1)
    {
      matrice[3][5].valoare=0;
      if (alternare%2 == 0)
              {
                matrice[3][1].valoare=2;
              }
              else if (alternare%2 != 0)
                {
                  matrice[3][1].valoare=3;
                }
                alternare++;
    }
  else if(mouseY>=matrice[4][1].coordonataY && mouseY<=matrice[5][1].coordonataY && matrice[4][5].valoare==1)
    {
      matrice[4][5].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[4][1].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[4][1].valoare=3;
          }
          alternare++;
    }
}
function ifColumn5()
{
  if(mouseY>=matrice[2][5].coordonataY && mouseY<=matrice[3][5].coordonataY && matrice[2][1].valoare==1)
    {
      matrice[2][1].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[2][5].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[2][5].valoare=3;
          }
          alternare++;
    }
  else if(mouseY>=matrice[3][5].coordonataY && mouseY<=matrice[4][5].coordonataY && matrice[3][1].valoare==1)
    {
      matrice[3][1].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[3][5].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[3][5].valoare=3;
          }
          alternare++;
    }
  else if(mouseY>=matrice[4][5].coordonataY && mouseY<=matrice[5][5].coordonataY && matrice[4][1].valoare==1)
    {
      matrice[4][1].valoare=0;
      if (alternare%2 == 0)
        {
          matrice[4][5].valoare=2;
        }
        else if (alternare%2 != 0)
          {
            matrice[4][5].valoare=3;
          }
          alternare++;
    }
}
function untouchedBox()
{
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