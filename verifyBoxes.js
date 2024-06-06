/// verify if we have a selected square in the right position for the corner squares 
function ifSquare11()
{
    for(let u=2;u<=5;u++)
        {
          if(matrice[1][u].valoare==1)
            {
              if (alternare%2 == 0)
                {
                  for(let coloana=u;coloana>=2;coloana--)
                    {
                      matrice[1][coloana].valoare=matrice[1][coloana-1].valoare;
                    }
                  matrice[1][1].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let coloana=u;coloana>=2;coloana--)
                      {
                        matrice[1][coloana].valoare=matrice[1][coloana-1].valoare;
                      }
                    matrice[1][1].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[1][u].valoare==4)
              {
                for(let coloana=u;coloana>=2;coloana--)
                  {
                    matrice[1][coloana].valoare=matrice[1][coloana-1].valoare;
                  }
                  matrice[1][1].valoare=2;
                  alternare++;
              }
              else if(matrice[1][u].valoare==5)
                {
                  for(let coloana=u;coloana>=2;coloana--)
                    {
                      matrice[1][coloana].valoare=matrice[1][coloana-1].valoare;
                    }
                    matrice[1][1].valoare=3;
                    alternare++;
                }
          else if(matrice[u][1].valoare==1)
            {
              if (alternare%2 == 0)
                {
                  for(let linia=u;linia>=2;linia--)
                    {
                      matrice[linia][1].valoare=matrice[linia-1][1].valoare;
                    }
                  matrice[1][1].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let linia=u;linia>=2;linia--)
                    {
                      matrice[linia][1].valoare=matrice[linia-1][1].valoare;
                    }
                    matrice[1][1].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[u][1].valoare==4)
              {
                for(let linia=u;linia>=2;linia--)
                  {
                    matrice[linia][1].valoare=matrice[linia-1][1].valoare;
                  }
                matrice[1][1].valoare=2;
                alternare++;
              }
              else if(matrice[u][1].valoare==5)
                {
                  for(let linia=u;linia>=2;linia--)
                    {
                      matrice[linia][1].valoare=matrice[linia-1][1].valoare;
                    }
                  matrice[1][1].valoare=3;
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
              if (alternare%2 == 0)
                {
                  for(let linia=u;linia<=4;linia++)
                    {
                      matrice[linia][1].valoare=matrice[linia+1][1].valoare;
                    }
                  matrice[5][1].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let linia=u;linia<=4;linia++)
                      {
                        matrice[linia][1].valoare=matrice[linia+1][1].valoare;
                      }
                    matrice[5][1].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[u][1].valoare==4)
              {
                for(let linia=u;linia<=4;linia++)
                  {
                    matrice[linia][1].valoare=matrice[linia+1][1].valoare;
                  }
                matrice[5][1].valoare=2;
                alternare++;
              }
              else if(matrice[u][1].valoare==5)
                {
                  for(let linia=u;linia<=4;linia++)
                    {
                      matrice[linia][1].valoare=matrice[linia+1][1].valoare;
                    }
                  matrice[5][1].valoare=3;
                  alternare++;
                }
          else if(matrice[5][u+1].valoare==1)
            {
              if (alternare%2 == 0)
                {
                  for(let coloana=u+1;coloana>=2;coloana--)
                    {
                      matrice[5][coloana].valoare=matrice[5][coloana-1].valoare;
                    }
                  matrice[5][1].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let coloana=u+1;coloana>=2;coloana--)
                      {
                        matrice[5][coloana].valoare=matrice[5][coloana-1].valoare;
                      }
                    matrice[5][1].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[5][u+1].valoare==4)
              {
                for(let coloana=u+1;coloana>=2;coloana--)
                  {
                    matrice[5][coloana].valoare=matrice[5][coloana-1].valoare;
                  }
                matrice[5][1].valoare=2;
                alternare++;
              }
              else if(matrice[5][u+1].valoare==5)
                {
                  for(let coloana=u+1;coloana>=2;coloana--)
                    {
                      matrice[5][coloana].valoare=matrice[5][coloana-1].valoare;
                    }
                  matrice[5][1].valoare=3;
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
              if (alternare%2 == 0)
                {
                  for(let coloana=u;coloana<=4;coloana++)
                    {
                      matrice[1][coloana].valoare=matrice[1][coloana+1].valoare;
                    }
                  matrice[1][5].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let coloana=u;coloana<=4;coloana++)
                      {
                        matrice[1][coloana].valoare=matrice[1][coloana+1].valoare;
                      }
                    matrice[1][5].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[1][u].valoare==4)
              {
                for(let coloana=u;coloana<=4;coloana++)
                  {
                    matrice[1][coloana].valoare=matrice[1][coloana+1].valoare;
                  }
                matrice[1][5].valoare=2;
                alternare++;
              }
              else if(matrice[1][u].valoare==5)
                {
                  for(let coloana=u;coloana<=4;coloana++)
                    {
                      matrice[1][coloana].valoare=matrice[1][coloana+1].valoare;
                    }
                  matrice[1][5].valoare=3;
                  alternare++;
                }
          else if(matrice[u+1][5].valoare==1)
            {
              if (alternare%2 == 0)
                {
                  for(let linia=u+1;linia>=2;linia--)
                    {
                      matrice[linia][5].valoare=matrice[linia-1][5].valoare;
                    }
                  matrice[1][5].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let linia=u+1;linia>=2;linia--)
                      {
                        matrice[linia][5].valoare=matrice[linia-1][5].valoare;
                      }
                    matrice[1][5].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[u+1][5].valoare==4)
              {
                for(let linia=u+1;linia>=2;linia--)
                  {
                    matrice[linia][5].valoare=matrice[linia-1][5].valoare;
                  }
                matrice[1][5].valoare=2;
                alternare++;
              }
              else if(matrice[u+1][5].valoare==5)
                {
                  for(let linia=u+1;linia>=2;linia--)
                    {
                      matrice[linia][5].valoare=matrice[linia-1][5].valoare;
                    }
                  matrice[1][5].valoare=3;
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
              if (alternare%2 == 0)
                {
                  for(let coloana=u;coloana<=4;coloana++)
                    {
                      matrice[5][coloana].valoare=matrice[5][coloana+1].valoare;
                    }
                  matrice[5][5].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let coloana=u;coloana<=4;coloana++)
                      {
                        matrice[5][coloana].valoare=matrice[5][coloana+1].valoare;
                      }
                    matrice[5][5].valoare=3;
                    alternare++;
                  }
            }
          else if(matrice[5][u].valoare==4)
            {
              for(let coloana=u;coloana<=4;coloana++)
                {
                  matrice[5][coloana].valoare=matrice[5][coloana+1].valoare;
                }
              matrice[5][5].valoare=2;
              alternare++;
            }
            else if(matrice[5][u].valoare==5)
              {
                for(let coloana=u;coloana<=4;coloana++)
                  {
                    matrice[5][coloana].valoare=matrice[5][coloana+1].valoare;
                  }
                matrice[5][5].valoare=3;
                alternare++;
              }  
          else if(matrice[u][5].valoare==1)
            {
              if (alternare%2 == 0)
                {
                  for(let linia=u;linia<=4;linia++)
                    {
                      matrice[linia][5].valoare=matrice[linia+1][5].valoare;
                    }
                  matrice[5][5].valoare=2;
                  alternare++;
                }
                else if (alternare%2 != 0)
                  {
                    for(let linia=u;linia<=4;linia++)
                      {
                        matrice[linia][5].valoare=matrice[linia+1][5].valoare;
                      }
                    matrice[5][5].valoare=3;
                    alternare++;
                  }
            }
            else if(matrice[u][5].valoare==4)
              {
                for(let linia=u;linia<=4;linia++)
                  {
                    matrice[linia][5].valoare=matrice[linia+1][5].valoare;
                  }
                matrice[5][5].valoare=2;
                alternare++;
              }
              else if(matrice[u][5].valoare==5)
                {
                  for(let linia=u;linia<=4;linia++)
                    {
                      matrice[linia][5].valoare=matrice[linia+1][5].valoare;
                    }
                  matrice[5][5].valoare=3;
                  alternare++;
                }
            }
}
// verify if we have a selected square in the designated spot for rows and columns
function ifRow1()
{
  if(mouseX>=matrice[1][2].coordonataX && mouseX<=matrice[1][3].coordonataX)
    {
      if(matrice[5][2].valoare==1)
      {
        if (alternare%2 == 0)
          {
            for(let linia=4;linia>=1;linia--)
              {
                matrice[linia+1][2].valoare=matrice[linia][2].valoare;
              }
            matrice[1][2].valoare=2;
            alternare++;
          }
          else if (alternare%2 != 0)
            {
              for(let linia=4;linia>=1;linia--)
                {
                  matrice[linia+1][2].valoare=matrice[linia][2].valoare;
                }
              matrice[1][2].valoare=3;
              alternare++;
            }
      }
      else if(matrice[5][2].valoare==4)
        {
          for(let linia=4;linia>=1;linia--)
            {
              matrice[linia+1][2].valoare=matrice[linia][2].valoare;
            }
          matrice[1][2].valoare=2;
          alternare++;
        }
        else if(matrice[5][2].valoare==5)
          {
            for(let linia=4;linia>=1;linia--)
              {
                matrice[linia+1][2].valoare=matrice[linia][2].valoare;
              }
            matrice[1][2].valoare=3;
            alternare++;
          }
    }
  else if(mouseX>=matrice[1][3].coordonataX && mouseX<=matrice[1][4].coordonataX)
    {
      if(matrice[5][3].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let linia=4;linia>=1;linia--)
                {
                  matrice[linia+1][3].valoare=matrice[linia][3].valoare;
                }
              matrice[1][3].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let linia=4;linia>=1;linia--)
                  {
                    matrice[linia+1][3].valoare=matrice[linia][3].valoare;
                  }
                matrice[1][3].valoare=3;
                alternare++;
              }
        }
        else if(matrice[5][3].valoare==4)
          {
            for(let linia=4;linia>=1;linia--)
              {
                matrice[linia+1][3].valoare=matrice[linia][3].valoare;
              }
            matrice[1][3].valoare=2;
            alternare++;
          }
          else if(matrice[5][3].valoare==5)
            {
              for(let linia=4;linia>=1;linia--)
                {
                  matrice[linia+1][3].valoare=matrice[linia][3].valoare;
                }
              matrice[1][3].valoare=3;
              alternare++;
            }
    }
  else if(mouseX>=matrice[1][4].coordonataX && mouseX<=matrice[1][5].coordonataX)
    {
      if(matrice[5][4].valoare==1)
      {
        if (alternare%2 == 0)
          {
            for(let linia=4;linia>=1;linia--)
              {
                matrice[linia+1][4].valoare=matrice[linia][4].valoare;
              }
            matrice[1][4].valoare=2;
            alternare++;
          }
          else if (alternare%2 != 0)
            {
              for(let linia=4;linia>=1;linia--)
                {
                  matrice[linia+1][4].valoare=matrice[linia][4].valoare;
                }
              matrice[1][4].valoare=3;
              alternare++;
            }
      }
      else if(matrice[5][4].valoare==4)
        {
          for(let linia=4;linia>=1;linia--)
            {
              matrice[linia+1][4].valoare=matrice[linia][4].valoare;
            }
          matrice[1][4].valoare=2;
          alternare++;
        }
        else if(matrice[5][4].valoare==5)
          {
            for(let linia=4;linia>=1;linia--)
              {
                matrice[linia+1][4].valoare=matrice[linia][4].valoare;
              }
            matrice[1][4].valoare=3;
            alternare++;
          }
    }
}
function ifRow5()
{
  if(mouseX>=matrice[5][2].coordonataX && mouseX<=matrice[5][3].coordonataX)
    {
      if(matrice[1][2].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let linia=1;linia<=4;linia++)
                {
                  matrice[linia][2].valoare=matrice[linia+1][2].valoare;
                }
              matrice[5][2].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let linia=1;linia<=4;linia++)
                  {
                    matrice[linia][2].valoare=matrice[linia+1][2].valoare;
                  }
                matrice[5][2].valoare=3;
                alternare++;
              }
        }
        else if(matrice[1][2].valoare==4)
          {
            for(let linia=1;linia<=4;linia++)
              {
                matrice[linia][2].valoare=matrice[linia+1][2].valoare;
              }
            matrice[5][2].valoare=2;
            alternare++;
          }
          else if(matrice[1][2].valoare==5)
            {
              for(let linia=1;linia<=4;linia++)
                {
                  matrice[linia][2].valoare=matrice[linia+1][2].valoare;
                }
              matrice[5][2].valoare=3;
              alternare++;
            }
    }
  else if(mouseX>=matrice[5][3].coordonataX && mouseX<=matrice[5][4].coordonataX)
    {
      if(matrice[1][3].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let linia=1;linia<=4;linia++)
                {
                  matrice[linia][3].valoare=matrice[linia+1][3].valoare;
                }
              matrice[5][3].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let linia=1;linia<=4;linia++)
                  {
                    matrice[linia][3].valoare=matrice[linia+1][3].valoare;
                  }
                matrice[5][3].valoare=3;
                alternare++;
              }
        }
        else if(matrice[1][3].valoare==4)
          {
            for(let linia=1;linia<=4;linia++)
              {
                matrice[linia][3].valoare=matrice[linia+1][3].valoare;
              }
            matrice[5][3].valoare=2;
            alternare++;
          }
          else if(matrice[1][3].valoare==5)
            {
              for(let linia=1;linia<=4;linia++)
                {
                  matrice[linia][3].valoare=matrice[linia+1][3].valoare;
                }
              matrice[5][3].valoare=3;
              alternare++;
            }
    }
  else if(mouseX>=matrice[5][4].coordonataX && mouseX<=matrice[5][5].coordonataX)
    {
      if(matrice[1][4].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let linia=1;linia<=4;linia++)
                {
                  matrice[linia][4].valoare=matrice[linia+1][4].valoare;
                }
              matrice[5][4].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let linia=1;linia<=4;linia++)
                  {
                    matrice[linia][4].valoare=matrice[linia+1][4].valoare;
                  }
                matrice[5][4].valoare=3;
                alternare++;
              }
        }
        else if(matrice[1][4].valoare==4)
          {
            for(let linia=1;linia<=4;linia++)
              {
                matrice[linia][4].valoare=matrice[linia+1][4].valoare;
              }
            matrice[5][4].valoare=2;
            alternare++;
          }
          else if(matrice[1][4].valoare==5)
            {
              for(let linia=1;linia<=4;linia++)
                {
                  matrice[linia][4].valoare=matrice[linia+1][4].valoare;
                }
              matrice[5][4].valoare=3;
              alternare++;
            }
    }
}
function ifColumn1()
{
  if(mouseY>=matrice[2][1].coordonataY && mouseY<=matrice[3][1].coordonataY)
    {
      if(matrice[2][5].valoare==1)
      {
        if (alternare%2 == 0)
          {
            for(let coloana=5;coloana>=2;coloana--)
              {
                matrice[2][coloana].valoare=matrice[2][coloana-1].valoare;
              }
            matrice[2][1].valoare=2;
            alternare++;
          }
          else if (alternare%2 != 0)
            {
              for(let coloana=5;coloana>=2;coloana--)
                {
                  matrice[2][coloana].valoare=matrice[2][coloana-1].valoare;
                }
              matrice[2][1].valoare=3;
              alternare++;
            }
      }
      else if(matrice[2][5].valoare==4)
        {
          for(let coloana=5;coloana>=2;coloana--)
            {
              matrice[2][coloana].valoare=matrice[2][coloana-1].valoare;
            }
          matrice[2][1].valoare=2;
          alternare++;
        }
        else if(matrice[2][5].valoare==5)
          {
            for(let coloana=5;coloana>=2;coloana--)
              {
                matrice[2][coloana].valoare=matrice[2][coloana-1].valoare;
              }
            matrice[2][1].valoare=3;
            alternare++;
          }
    }
  else if(mouseY>=matrice[3][1].coordonataY && mouseY<=matrice[4][1].coordonataY)
    {
      if(matrice[3][5].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let coloana=5;coloana>=2;coloana--)
                {
                  matrice[3][coloana].valoare=matrice[3][coloana-1].valoare;
                }
              matrice[3][1].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let coloana=5;coloana>=2;coloana--)
                  {
                    matrice[3][coloana].valoare=matrice[3][coloana-1].valoare;
                  }
                matrice[3][1].valoare=3;
                alternare++;
              }
        }
        else if(matrice[3][5].valoare==4)
          {
            for(let coloana=5;coloana>=2;coloana--)
              {
                matrice[3][coloana].valoare=matrice[3][coloana-1].valoare;
              }
            matrice[3][1].valoare=2;
            alternare++;
          }
          else if(matrice[3][5].valoare==5)
            {
              for(let coloana=5;coloana>=2;coloana--)
                {
                  matrice[3][coloana].valoare=matrice[3][coloana-1].valoare;
                }
              matrice[3][1].valoare=3;
              alternare++;
            }
    }
  else if(mouseY>=matrice[4][1].coordonataY && mouseY<=matrice[5][1].coordonataY)
    {
      if(matrice[4][5].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let coloana=5;coloana>=2;coloana--)
                {
                  matrice[4][coloana].valoare=matrice[4][coloana-1].valoare;
                }
              matrice[4][1].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let coloana=5;coloana>=2;coloana--)
                  {
                    matrice[4][coloana].valoare=matrice[4][coloana-1].valoare;
                  }
                matrice[4][1].valoare=3;
                alternare++;
              }
        }
        else if(matrice[4][5].valoare==4)
          {
            for(let coloana=5;coloana>=2;coloana--)
              {
                matrice[4][coloana].valoare=matrice[4][coloana-1].valoare;
              }
            matrice[4][1].valoare=2;
            alternare++;
          }
          else if(matrice[4][5].valoare==5)
            {
              for(let coloana=5;coloana>=2;coloana--)
                {
                  matrice[4][coloana].valoare=matrice[4][coloana-1].valoare;
                }
              matrice[4][1].valoare=3;
              alternare++;
            }
    }
}
function ifColumn5()  
{
  if(mouseY>=matrice[2][5].coordonataY && mouseY<=matrice[3][5].coordonataY)
    {
      if(matrice[2][1].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let coloana=1;coloana<=4;coloana++)
                {
                  matrice[2][coloana].valoare=matrice[2][coloana+1].valoare;
                }
              matrice[2][5].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let coloana=1;coloana<=4;coloana++)
                  {
                    matrice[2][coloana].valoare=matrice[2][coloana+1].valoare;
                  }
                matrice[2][5].valoare=3;
                alternare++;
              }
        }
        else if(matrice[2][1].valoare==4)
          {
            for(let coloana=1;coloana<=4;coloana++)
              {
                matrice[2][coloana].valoare=matrice[2][coloana+1].valoare;
              }
            matrice[2][5].valoare=2;
            alternare++;
          }
          else if(matrice[2][1].valoare==5)
            {
              for(let coloana=1;coloana<=4;coloana++)
                {
                  matrice[2][coloana].valoare=matrice[2][coloana+1].valoare;
                }
              matrice[2][5].valoare=3;
              alternare++;
            }
    }
  else if(mouseY>=matrice[3][5].coordonataY && mouseY<=matrice[4][5].coordonataY)
    {
      if(matrice[3][1].valoare==1)
        {
          if (alternare%2 == 0)
            {
              for(let coloana=1;coloana<=4;coloana++)
                {
                  matrice[3][coloana].valoare=matrice[3][coloana+1].valoare;
                }
              matrice[3][5].valoare=2;
              alternare++;
            }
            else if (alternare%2 != 0)
              {
                for(let coloana=1;coloana<=4;coloana++)
                  {
                    matrice[3][coloana].valoare=matrice[3][coloana+1].valoare;
                  }
                matrice[3][5].valoare=3;
                alternare++;
              }
        }
        else if(matrice[3][1].valoare==4)
          {
            for(let coloana=1;coloana<=4;coloana++)
              {
                matrice[3][coloana].valoare=matrice[3][coloana+1].valoare;
              }
            matrice[3][5].valoare=2;
            alternare++;
          }
          else if(matrice[3][1].valoare==5)
            {
              for(let coloana=1;coloana<=4;coloana++)
                {
                  matrice[3][coloana].valoare=matrice[3][coloana+1].valoare;
                }
              matrice[3][5].valoare=3;
              alternare++;
            }
    }
  else if(mouseY>=matrice[4][5].coordonataY && mouseY<=matrice[5][5].coordonataY)
    {
      if(matrice[4][1].valoare==1)
      {
        if (alternare%2 == 0)
          {
            for(let coloana=1;coloana<=4;coloana++)
              {
                matrice[4][coloana].valoare=matrice[4][coloana+1].valoare;
              }
            matrice[4][5].valoare=2;
            alternare++;
          }
          else if (alternare%2 != 0)
            {
              for(let coloana=1;coloana<=4;coloana++)
                {
                  matrice[4][coloana].valoare=matrice[4][coloana+1].valoare;
                }
              matrice[4][5].valoare=3;
              alternare++;
            }
      }
      else if(matrice[4][1].valoare==4)
        {
          for(let coloana=1;coloana<=4;coloana++)
            {
              matrice[4][coloana].valoare=matrice[4][coloana+1].valoare;
            }
          matrice[4][5].valoare=2;
          alternare++;
        }
        else if(matrice[4][1].valoare==5)
          {
            for(let coloana=1;coloana<=4;coloana++)
              {
                matrice[4][coloana].valoare=matrice[4][coloana+1].valoare;
              }
            matrice[4][5].valoare=3;
            alternare++;
          }
    }
}
function untouchedBox()
{
  let verificareSelectare=0;
  if(matrice[i][j].valoare==0 || matrice[i][j].valoare==2 || matrice[i][j].valoare==3) 
    {
      for (k = 1; k <= 5; k++) 
        {
          for (m = 1; m <= 5; m++) 
            {
              if(matrice[k][m].valoare==1 || matrice[k][m].valoare==4 || matrice[k][m].valoare==5)
                {
                  verificareSelectare++;
                }
            }
        }
        if(verificareSelectare==0)
          {
           if(matrice[i][j].valoare==0)
            {
              matrice[i][j].valoare=1;
            }
            else if(matrice[i][j].valoare==2 && alternare%2==0)
            {
              matrice[i][j].valoare=4;
            }
            else if(matrice[i][j].valoare==3 && alternare%2!=0)
            {
              matrice[i][j].valoare=5;
            }
          }
      }
      verificareSelectare=0;
}