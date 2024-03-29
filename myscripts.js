let a = 1;
let movreq = 0;
let m;
let n;

let ischecked = 0;


//image objects

//let bpawn = document.createElement('img');
//bpawn.src ='IMG/101.png';


//issues
//pawn movment error


//white
//pawn = 101 == blue
//rook = 105 == orange
//knignt = 103
//bishop = 104
//queen = 109
// king = 120
//black
//pawn  = 201 == brown
//rook = 205 == purple
//knight = 203
// bishop = 204
//queen = 209
//king = 220


let chess = [
    [105, 103, 104, 109, 120, 104, 103, 105],
    [101, 101, 101, 101, 101, 101, 101, 101],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [201, 201, 201, 201, 201, 201, 201, 201],
    [205, 203, 204, 209, 220, 204, 203, 205],
];

const rookMovementX = [];
const rookMovementY = [];
const bishopMovementX = [];
const bishopMovementY = [];
const knightX = [];
const knightY = [];
const unsafeX = [];
const unsafeY = [];



//special case
//king unsafe array
//rook for king
function kRookMeovement(x, y)
{
    if (a == 2) 
    {
        for(let i = x+1; i<8; i++)
        {
            if(chess[i][y]> 199)
            {
                break;
            }
            
            unsafeX.push(i);
            unsafeY.push(y);
            if(chess[i][y] > 99 && chess[i][y]< 199)
            {
                break;
            }
        }
        for(let i = x-1; i>=0; i--)
        {
            if(chess[i][y]> 199)
            {
                break;
            }
            
            unsafeX.push(i);
            unsafeY.push(y);
            if(chess[i][y] > 99 && chess[i][y]< 199)
            {
                break;
            }
        }
        for(let i = y+1; i<8; i++)
        {
            if(chess[x][i]> 199)
            {
                break;
            }
            
            unsafeX.push(x);
            unsafeY.push(i);
            if(chess[x][i] > 99 && chess[x][i]< 199)
            {
                break;
            }
        }

        for(let i = y-1; i>=0; i--)
        {
            if(chess[x][i]> 199)
            {
                break;
            }
            unsafeX.push(x);
            unsafeY.push(i);
            
            if(chess[x][i] > 99 && chess[x][i]< 199)
            {
                break;
            }
        }    
    }
}



// bishop for king
function kbishopMovement(x, y)
{
    if( a == 2)
    {
        for(i = 1; i+x<8 && i+y<8; i++) //first cordinate
        {
            if(chess[i+x][i+y]> 199)
            {
                break;
            }
            
            unsafeX.push(i+x);
            unsafeY.push(i+y);
            if(chess[i+x][i+y] > 99 && chess[i+x][i+y]< 199)
            {
                break;
            }
        }
    
    
        for(i = 1; x+i<8 && y-i>=0; i++) //second cordinate
        {
            if(chess[i+x][y-i]> 199)
            {
                break;
            }
            unsafeX.push(i+x);
            unsafeY.push(y-i);
            if(chess[i+x][y-i] > 99 && chess[i+x][y-i]< 199)
            {
                break;
            }
            
        }
        for(i = 1;x-i>=0 && y-i>=0; i++) //third qudarant
        {
            if(chess[x-i][y-i]> 199)
            {
                    break;
            }
           
            unsafeX.push(x-i);
            unsafeY.push(y-i);
            if(chess[x-i][y-i] > 99 && chess[x-i][y-i]< 199)
            {
                    break;
            }   
            
        }
   

        for(i = 1; x-i>=0 && y+i<8; i++) //fourth quadrant 
        {
            
            if(chess[x-i][i+y]> 199)
            {
                break;
            }
            unsafeX.push(x-i);
            unsafeY.push(y+i);
            if(chess[x-i][i+y] > 99 && chess[x-i][i+y]< 199)
            {
                    break;
            }
            
        }

    }
}

// knight for king
function kKnightMovement(x, y)
{
    if (a == 2||a == 1) 
    {
        
        if(x+2 >= 0 && y+1 >= 0 && x+2 < 8 && y+1 < 8 && chess[x+2][y+1]<200)
        {
            unsafeX.push(x+2);
            unsafeY.push(y+1);
        }
        if(x+2 >= 0 && y-1 >= 0 && x+2 < 8 && y-1 < 8 && chess[x+2][y-1] < 200)
        {
            unsafeX.push(x+2);
            unsafeY.push(y-1);
        }
        
        if(x-2 >= 0 && y+1 >= 0 && x-2 < 8 && y+1 < 8 && chess[x-2][y+1] < 200)
        {
            unsafeX.push(x-2);
            unsafeY.push(y+1);
        }
    
        if (x-2 >= 0 && y-1 >= 0 && x-2 < 8 && y-1 < 8 && chess[x-2][y-1] < 200) 
        {
            unsafeX.push(x-2);
            unsafeY.push(y-1);
        }
        
        if (x-1 >= 0 && y-2 >= 0 && x-1 < 8 && y-2 < 8 && chess[x-1][y-2] < 200) 
        {
            unsafeX.push(x-1);
            unsafeY.push(y-2);
        }
        
        if (x+1 >= 0 && y+2 >= 0 && x+1 < 8 && y+2 < 8 && chess[x+1][y+2] < 200) 
        {
            unsafeX.push(x+1);
            unsafeY.push(y+2);
        }
        
        if (x-1 >= 0 && y+2 >= 0 && x-1 < 8 && y+2 < 8 && chess[x-1][y+2]<200) 
        {
            unsafeX.push(x-1);
            unsafeY.push(y+2);
        }
        
        if(x+1 >= 0 && y-2 >= 0 && x+1 < 8 && y-2 < 8 && chess[x+1][y-2] < 200)
        {
            unsafeX.push(x+1);
            unsafeY.push(y-2);
        } 
    }
}










//back to normal movement


//rook movent array 
function whiteRookMovement(x , y)
{
    if(a == 2)
    {
        
        for(let i = x+1; i<8; i++)
        {
            if(chess[i][y] > 99 && chess[i][y]< 199)
            {
                break;
            }
            rookMovementX.push(i);
            rookMovementY.push(y);
            if(chess[i][y]> 199)
            {
                break;
            }
        }
        for(let i = x-1; i>=0; i--)
        {
            if(chess[i][y] > 99 && chess[i][y]< 199)
            {
                break;
            }
            rookMovementX.push(i);
            rookMovementY.push(y);
            if(chess[i][y]> 199)
            {
                break;
            }
        }
        for(let i = y+1; i<8; i++)
        {
            if(chess[x][i] > 99 && chess[x][i]< 199)
            {
                break;
            }
            rookMovementX.push(x);
            rookMovementY.push(i);
            if(chess[x][i]> 199)
            {
                break;
            }
        }
        for(let i = y-1; i>=0; i--)
        {
            if(chess[x][i] > 99 && chess[x][i]< 199)
            {
                break;
            }
            rookMovementX.push(x);
            rookMovementY.push(i);
            if(chess[x][i]> 199)
            {
                break;
            }
        }
    }
    else if(a == 1)
    {
        for(let i = x+1; i<8; i++)
        {
            if(chess[i][y]> 199)
            {
                break;
            }
            rookMovementX.push(i);
            rookMovementY.push(y);
            if(chess[i][y] > 99 && chess[i][y]< 199)
            {
                break;
            }
            
        }
        for(let i = x-1; i>=0; i--)
        {
            if(chess[i][y]> 199)
            {
                break;
            }
            
            rookMovementX.push(i);
            rookMovementY.push(y);
            if(chess[i][y] > 99 && chess[i][y]< 199)
            {
                break;
            }
        }
        for(let i = y+1; i<8; i++)
        {
            if(chess[x][i]> 199)
            {
                break;
            }
            rookMovementX.push(x);
            rookMovementY.push(i);
            
            if(chess[x][i] > 99 && chess[x][i]< 199)
            {
                break;
            }
        }
        for(let i = y-1; i>=0; i--)
        {
            if(chess[x][i]> 199)
            {
                break;
            }
            
            rookMovementX.push(x);
            rookMovementY.push(i);
            if(chess[x][i] > 99 && chess[x][i]< 199)
            {
                break;
            }
        }
    }
    
}

//bishop movement array
function whiteBishopMovement(x, y)
{

    if(a == 1)
    {
        for(i = 1; i+x<8 && i+y<8; i++) //first cordinate
        {
            if(chess[i+x][i+y]> 199)
            {
                break;
            }
            bishopMovementX.push(i+x);
            bishopMovementY.push(i+y);
            if(chess[i+x][i+y] > 99 && chess[i+x][i+y]< 199)
            {
                break;
            }
        }
    
    
        for(i = 1; x+i<8 && y-i>=0; i++) //second cordinate
        {
            if(chess[i+x][y-i]> 199)
            {
                break;
            }
            bishopMovementX.push(i+x);
            bishopMovementY.push(y-i);
            if(chess[i+x][y-i] > 99 && chess[i+x][y-i]< 199)
            {
                break;
            }
        }
        for(i = 1;x-i>=0 && y-i>=0; i++) //third qudarant
        {
                if(chess[x-i][y-i]> 199)
                {
                        break;
                }
                bishopMovementX.push(x-i);
                bishopMovementY.push(y-i);
                if(chess[x-i][y-i] > 99 && chess[x-i][y-i]< 199)
                {
                        break;
                }
        }
    

        for(i = 1; x-i>=0 && y+i<8; i++) //fourth quadrant
        {
            if(chess[x-i][i+y]> 199)
            {
                break;
            }
            bishopMovementX.push(x-i);
            bishopMovementY.push(y+i);
            if(chess[x-i][i+y] > 99 && chess[x-i][i+y]< 199)
            {
                    break;
            }
        }
    }
    else if( a == 2)
    {
        for(i = 1; i+x<8 && i+y<8; i++) //first cordinate
        {
            if(chess[i+x][i+y] > 99 && chess[i+x][i+y]< 199)
            {
                break;
            }
            bishopMovementX.push(i+x);
            bishopMovementY.push(i+y);
            if(chess[i+x][i+y]> 199)
            {
                break;
            }
        }
    
    
        for(i = 1; x+i<8 && y-i>=0; i++) //second cordinate
        {
            if(chess[i+x][y-i] > 99 && chess[i+x][y-i]< 199)
            {
                break;
            }
            bishopMovementX.push(i+x);
            bishopMovementY.push(y-i);
            
            if(chess[i+x][y-i]> 199)
            {
                break;
            }
        }
        for(i = 1;x-i>=0 && y-i>=0; i++) //third qudarant
        {
            if(chess[x-i][y-i] > 99 && chess[x-i][y-i]< 199)
            {
                    break;
            }
            bishopMovementX.push(x-i);
            bishopMovementY.push(y-i);
                
            if(chess[x-i][y-i]> 199)
            {
                    break;
            }
        }
   

        for(i = 1; x-i>=0 && y+i<8; i++) //fourth quadrant 
        {
            if(chess[x-i][i+y] > 99 && chess[x-i][i+y]< 199)
            {
                    break;
            }
            bishopMovementX.push(x-i);
            bishopMovementY.push(y+i);
            
            if(chess[x-i][i+y]> 199)
            {
                break;
            }
        }

    }
    
    
}

function knight(x, y)
{
    if (a == 1) 
    {
        if(x+2 >= 0 && y+1 >= 0 && x+2 < 8 && y+1 < 8 && chess[x+2][y+1]<200)
        {
            
            knightX.push(x+2);
            knightY.push(y+1);
        }
        if(x+2 >= 0 && y-1 >= 0 && x+2 < 8 && y-1 < 8 && chess[x+2][y-1] < 200)
        {
            knightX.push(x+2);
            knightY.push(y-1);
        }
        
        if(x-2 >= 0 && y+1 >= 0 && x-2 < 8 && y+1 < 8 && chess[x-2][y+1] < 200)
        {
            knightX.push(x-2);
            knightY.push(y+1);
        }
    
        if (x-2 >= 0 && y-1 >= 0 && x-2 < 8 && y-1 < 8 && chess[x-2][y-1] < 200) 
        {
            knightX.push(x-2);
            knightY.push(y-1);
        }
        
        if (x-1 >= 0 && y-2 >= 0 && x-1 < 8 && y-2 < 8 && chess[x-1][y-2] < 200) 
        {
            knightX.push(x-1);
            knightY.push(y-2);
        }
        
        if (x+1 >= 0 && y+2 >= 0 && x+1 < 8 && y+2 < 8 && chess[x+1][y+2] < 200) 
        {
            knightX.push(x+1);
            knightY.push(y+2);
        }
        
        if (x-1 >= 0 && y+2 >= 0 && x-1 < 8 && y+2 < 8 && chess[x-1][y+2]<200) 
        {
            knightX.push(x-1);
            knightY.push(y+2);
        }
        
        if(x+1 >= 0 && y-2 >= 0 && x+1 < 8 && y-2 < 8 && chess[x+1][y-2] < 200)
        {
            knightX.push(x+1);
            knightY.push(y-2);
        } 
    }
    else if (a == 2)
    {
        if(x+2 >= 0 && y+1 >= 0 && x+2 < 8 && y+1 < 8 && (chess[x+2][y+1] < 100 || chess[x+2][y+1] > 200))
        {
            
            knightX.push(x+2);
            knightY.push(y+1);
        }
        if(x+2 >= 0 && y-1 >= 0 && x+2 < 8 && y-1 < 8 && (chess[x+2][y-1] < 100 || chess[x+2][y-1] > 200))
        {
            knightX.push(x+2);
            knightY.push(y-1);
        }
        
        if(x-2 >= 0 && y+1 >= 0 && x-2 < 8 && y+1 < 8 && (chess[x-2][y+1] < 100 || chess[x-2][y+1] > 200))
        {
            knightX.push(x-2);
            knightY.push(y+1);
        }
    
        if (x-2 >= 0 && y-1 >= 0 && x-2 < 8 && y-1 < 8 && (chess[x-2][y-1] < 100 || chess[x-2][y-1] > 200)) 
        {
            knightX.push(x-2);
            knightY.push(y-1);
        }
        
        if (x-1 >= 0 && y-2 >= 0 && x-1 < 8 && y-2 < 8 && (chess[x-1][y-2] < 100 || chess[x-1][y-2] > 200)) 
        {
            knightX.push(x-1);
            knightY.push(y-2);
        }
        
        if (x+1 >= 0 && y+2 >= 0 && x+1 < 8 && y+2 < 8 && (chess[x+1][y+2] < 100 || chess[x+1][y+2] > 200)) 
        {
            knightX.push(x+1);
            knightY.push(y+2);
        }
        
        if (x-1 >= 0 && y+2 >= 0 && x-1 < 8 && y+2 < 8 && (chess[x-1][y+2] < 100 || chess[x-1][y+2] > 200)) 
        {
            knightX.push(x-1);
            knightY.push(y+2);
        }
        
        if(x+1 >= 0 && y-2 >= 0 && x+1 < 8 && y-2 < 8 && (chess[x+1][y-2] < 100 || chess[x+1][y-2] > 200))
        {
            knightX.push(x+1);
            knightY.push(y-2);
        }  
    }
    
    
}


// check for check to king

function checkk()
{
    
        unsafeX.length= 0;
        unsafeY.length =0;

        for(let i = 0; i<8; i++)
        {//203, 204, 205, 209
            for(let j = 0; j<8; j++)
            {
                if(chess[i][j] == 203)
                {
                    kKnightMovement(i, j);
                }
                else if(chess[i][j] == 204)
                {
                    kbishopMovement(i, j);
                }
                else if(chess[i][j] == 205)
                {
                    kRookMeovement(i,j);
                }
                else if(chess[i][j] == 209)
                {
                    kbishopMovement(i, j);
                    kRookMeovement(i,j);
                }
                
            }
        }
        let flag = 0;
        document.getElementById("demo1").innerHTML = unsafeX;
        document.getElementById("demo2").innerHTML = unsafeY;
        //205
        for(i = 0; i< unsafeX.length; i++)
        {
            if(flag == 1)
            {
                break;
            }
            if(chess[unsafeX[i]][unsafeY[i]]==120)
            {
                flag = 1;
                break;
            }
        }
        if(flag == 1)
        {
            ischecked = 1;
        }
        else
        {
            ischecked = 0;
        }
    
}
//color
function colorr()
{

    for(let x = 0; x<8; x++)
    {
        for(let y = 0; y<8; y++)
        {
            if(chess[x][y] == 101)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/101.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 201)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/201.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 105)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/105.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 205)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/205.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 204)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/204.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 104)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/104.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 109)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/109.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 209)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/209.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 103)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/103.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 203)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/203.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else if(chess[x][y] == 120)
            {
                document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                const img = document.createElement('img');
                img.src = 'IMG/120.png';
                document.getElementById(((x*8) + y +1).toString()).appendChild(img);
            }
            else
            {
                if(x%2 == 0 && y%2 == 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                    document.getElementById(((x*8) + y +1).toString()).style.background = "beige";
                }
                if(x%2 != 0 && y%2 == 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                    document.getElementById(((x*8) + y +1).toString()).style.background = "#333";
                }
                if(x%2 == 0 && y%2 != 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                    document.getElementById(((x*8) + y +1).toString()).style.background = "#333";
                }
                if(x%2 != 0 && y%2 != 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).innerHTML ='';
                    document.getElementById(((x*8) + y +1).toString()).style.background = "beige";
                }
            }
        }
    }
}

colorr();
//player move
function move(item) {
    let x;
    if(Number(item) % 8 == 0)
    {
        x = Math.floor(Number(item) / 8) -1;
    }
    else{
        x = Math.floor(Number(item) / 8)
    }


    let y;
    if(Number(item) % 8 == 0)
    {
        y = 7;
    }
    else{
        y = Number(item) % 8-1;  
    }
    if(x < 0)
    {
        x = 0;
    }
    if(y<0)
    {
        y = 0;
    }

    if(movreq==0)
    {
        if (a == 1) {
            if(chess[x][y] != 0)
            {

                //selecting  pawn
                if(chess[x][y] == 201)
                {
                    movreq = 201;
                    m = x-1;
                    n = y;
                    chess[x][y] = 0;
                }
                //6,4,3,2,5,6,7,3,2,1,0,6,6

                //4,4,4,4,4,4,4,4,4,4,4,7,7
                //rook
                else if(chess[x][y] == 205)
                {
                    movreq = 205;
                    rookMovementX.length = 0;
                    rookMovementY.length = 0;
                    whiteRookMovement(x, y);
                    chess[x][y] = 0;

                }

                //selecting bishop
                else if(chess[x][y] == 204)
                {      
                    movreq = 204;   
                    bishopMovementX.length = 0;
                    bishopMovementY.length = 0;
                    whiteBishopMovement(x, y);
                    chess[x][y] = 0;

                }

                //selecting queen
                //white
                else if(chess[x][y] == 209)
                {
                    movreq = 209;
                    bishopMovementX.length = 0;
                    bishopMovementY.length = 0;
                    whiteBishopMovement(x, y);
                    rookMovementX.length = 0;
                    rookMovementY.length = 0;
                    whiteRookMovement(x, y);
                    chess[x][y] = 0;

                }

                //selecting knight
                //white

                else if(chess[x][y] == 203)
                {
                    movreq = 203;
                    knightX.length = 0;
                    knightY.length = 0;
                    knight(x, y);
                    chess[x][y] = 0;

                }

                //black

            }
            //alert("x: " + x + " y: " + y);
            //a = 2;
        } 
        else if (a == 2) 
        {
            if(chess[x][y] == 101)
            {
                    movreq = 101;
                    m = x+1;
                    n = y;
                    chess[x][y] = 0;
            }

            else if(chess[x][y] == 105)
            {
                    movreq = 105;
                    rookMovementX.length = 0;
                    rookMovementY.length = 0;
                    whiteRookMovement(x, y);
                    document.getElementById("demo1").innerHTML = rookMovementX;
                    document.getElementById("demo2").innerHTML = rookMovementY;
                    chess[x][y] = 0;

            }

            else if(chess[x][y] == 109)
            {
                    movreq = 109;
                    bishopMovementX.length = 0;
                    bishopMovementY.length = 0;
                    whiteBishopMovement(x, y);
                    rookMovementX.length = 0;
                    rookMovementY.length = 0;
                    whiteRookMovement(x, y);
                    chess[x][y] = 0;

            }

            else if(chess[x][y] == 104)
                {
                    movreq = 104;
                    bishopMovementX.length = 0;
                    bishopMovementY.length = 0;
                    whiteBishopMovement(x, y);
                    
                    chess[x][y] = 0;

                }

                else if(chess[x][y] == 103)
                {
                    movreq = 103;
                    knightX.length = 0;
                    knightY.length = 0;
                    knight(x, y);
                    document.getElementById("demo1").innerHTML = knightX;
                    document.getElementById("demo2").innerHTML = knightY;
                    chess[x][y] = 0;

                }
        }
    }
    else{

        //pawn movement
        //white
        if(movreq == 101)
        {
            if((x == m && y == n) || (x == m+1 && y == n))
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 1;
                
            }
            else{
                alert("invalid");
            }
        }
        //black
        else if(movreq == 201)
        {
            if((x == m && y == n) || (x == m-1 && y == n))
            {
                chess[x][y] = movreq;
                movreq = 0;
                a = 2; 
                
            }
            else{
                alert("invalid");
            }
        }

        //rook movement
        //white
        else if(movreq == 105)
        {
            let flag = 1;
            for(i = 0; i< rookMovementX.length; i++)
            {
                if(rookMovementX[i] == x && rookMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 1;
            }
            else{
                alert("invalid");
            }
        }
        //black
        else if(movreq == 205)
        {
            let flag = 1;
            for(i = 0; i< rookMovementX.length; i++)
            {
                if(rookMovementX[i] == x && rookMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 2;
            }
            else{
                alert("invalid");
            }
        }

        //bishop movement
        //white
        else if(movreq == 104)
        {
            let flag = 1;
            for(i = 0; i< bishopMovementX.length; i++)
            {
                if(bishopMovementX[i] == x && bishopMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 1;
            }
            else{
                alert("invalid");
            }
        }
        //black
        else if(movreq == 204)
        {
            let flag = 1;
            for(i = 0; i< bishopMovementX.length; i++)
            {
                if(bishopMovementX[i] == x && bishopMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 2; 
            }
            else{
                alert("invalid");
            }
        }

        //queen movement
        //white
        else if(movreq == 109)
        {
            let flag = 1;
            for(i = 0; i< bishopMovementX.length; i++)
            {
                if(bishopMovementX[i] == x && bishopMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            for(i = 0; i< rookMovementX.length; i++)
            {
                if(rookMovementX[i] == x && rookMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 1;
            }
            else{
                alert("invalid");
            }
        }

        //black
        else if(movreq == 209)
        {
            let flag = 1;
            for(i = 0; i< bishopMovementX.length; i++)
            {
                if(bishopMovementX[i] == x && bishopMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            for(i = 0; i< rookMovementX.length; i++)
            {
                if(rookMovementX[i] == x && rookMovementY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 2; 
            }
            else{
                alert("invalid");
            }
        }

        //knight movement
        //white

        else if(movreq == 103)
        {
            let flag = 1;
            for(i = 0; i< knightX.length; i++)
            {
                if(knightX[i] == x && knightY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 1;
            }
            else{
                alert("invalid");
            }
        }

        //black
        else if(movreq == 203)
        {
            let flag = 1;
            for(i = 0; i< knightX.length; i++)
            {
                if(knightX[i] == x && knightY[i] == y)
                {
                    flag = 0;
                }
            }
            if(flag == 0)
            {
                chess[x][y] = movreq;
                movreq = 0; 
                a = 2; 
            }
            else{
                alert("invalid");
            }
        }
    }
    colorr();
    checkk();
    if(ischecked == 1)
    {
        alert("checked");
    }
}
