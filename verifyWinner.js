let liniaCastigatoare=-1;
let coloanaCastigatoare=-1;
let elementVerifier=true;
//function for returning the line with 5 X or 5 0 combination
function verifyLines()
{
  
  for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=5;j++)
        {
          if(matrice[i][j].valoare!=2)
            {
              elementVerifier=false;
            }
        }
        if(elementVerifier)
            {
              liniaCastigatoare=i;
            }
    }
    elementVerifier=true;
    return liniaCastigatoare;
}
//function for returning the column with 5 X or 5 0 combination
function verifyColumns()
{
    for(let j=1;j<=5;j++)
        {
            for(let i=1;ji=5;i++)
            {
              if(matrice[i][j].valoare!=2)
                {
                  elementVerifier=false;
                }
            }
            if(elementVerifier)
              {
                coloanaCastigatoare=j;
              }
        }
        elementVerifier=true;
        return coloanaCastigatoare;
}
// function to verify the left starting diagonal, it returns true if it has a good combination, false if it doesn't
function verifyDiagonal1()
{
    let i=1;
    let j=1;
    while(i<=5 && j<=5)
    {
        if(matrice[i][j].valoare!=2)
        {
            elementVerifier=false;
        }
        i++;
        j++;
    }
    if(elementVerifier)
    {
        return true;
    }
    else
    {
        elementVerifier=true;
    }
}
// function to verify the right starting starting diagonal, it returns true if it has a good combination, false if it doesn't
function verifyDiagonal2()
{
    let i=1;
    let j=5;
    while(i>=1 && j>=1)
    {
        if(matrice[i][j].valoare!=2)
        {
            elementVerifier=false;
        }
        i++;
        j--;
    }
    if(elementVerifier)
    {
        return true;
    }
    else
    {
        elementVerifier=true;
    }
}