let a = 1;
let movreq = 0;
let m;
let n;

//issues
//fourth quadrant movement in bishop not working


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
    [105, 0, 104, 209, 0, 104, 0, 105],
    [101, 101, 101, 101, 101, 101, 101, 101],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [201, 201, 201, 201, 201, 201, 201, 201],
    [205, 0, 204, 109, 0, 204, 0, 205],
];

const rookMovementX = [];
const rookMovementY = [];
const bishopMovementX = [];
const bishopMovementY = [];


//rook movent array 
function whiteRookMovement(x , y)
{
    for(let i = x+1; i<8; i++)
    {
        rookMovementX.push(i);
        rookMovementY.push(y);
    }
    for(let i = 0; i<x; i++)
    {
        rookMovementX.push(i);
        rookMovementY.push(y);
    }
    for(let i = y+1; i<8; i++)
    {
        rookMovementX.push(x);
        rookMovementY.push(i);
    }
    for(let i = 0; i<y; i++)
    {
        rookMovementX.push(x);
        rookMovementY.push(i);
    }
}

//bishop movement array
function whiteBishopMovement(x, y)
{

    
    for(i = 1; i+x<8 && i+y<8; i++) //first cordinate
    {
        bishopMovementX.push(i+x);
        bishopMovementY.push(i+y);
    }
    
    for(i = 1; x+i<8 && y-i>=0; i++) //second cordinate
    {
        bishopMovementX.push(i+x);
        bishopMovementY.push(y-i);
    }
   for(i = 1;x-i>=0 && y-i>=0; i++) //third qudarant
   {
    bishopMovementX.push(x-i);
    bishopMovementY.push(y-i);
   }

   for(i = 1; x-i>=0 && y+i<8; i++) //fourth quadrant not working
    {
        bishopMovementX.push(x-i);
        bishopMovementY.push(y+i);
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
                document.getElementById(((x*8) + y +1).toString()).style.background = "blue";
            }
            else if(chess[x][y] == 201)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "brown";
            }
            else if(chess[x][y] == 105)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "orange";
            }
            else if(chess[x][y] == 205)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "purple";
            }
            else if(chess[x][y] == 204)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "teal";
            }
            else if(chess[x][y] == 104)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "pink";
            }
            else if(chess[x][y] == 109)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "violet";
            }
            else if(chess[x][y] == 209)
            {
                document.getElementById(((x*8) + y +1).toString()).style.background = "slateblue";
            }
            else
            {
                if(x%2 == 0 && y%2 == 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).style.background = "beige";
                }
                if(x%2 != 0 && y%2 == 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).style.background = "#333";
                }
                if(x%2 == 0 && y%2 != 0)
                {
                    document.getElementById(((x*8) + y +1).toString()).style.background = "#333";
                }
                if(x%2 != 0 && y%2 != 0)
                {
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
                //white
                if(chess[x][y] == 101)
                {
                    movreq = 101;
                    m = x+1;
                    n = y;
                    chess[x][y] = 0;
                }
                //black
                else if(chess[x][y] == 201)
                {
                    movreq = 201;
                    m = x-1;
                    n = y;
                    chess[x][y] = 0;
                }

                //selecting rook
                //white

                else if(chess[x][y] == 105)
                {
                    movreq = 105;
                    rookMovementX.length = 0;
                    rookMovementY.length = 0;
                    whiteRookMovement(x, y);
                    chess[x][y] = 0;

                }

                //black
                else if(chess[x][y] == 205)
                {
                    movreq = 205;
                    rookMovementX.length = 0;
                    rookMovementY.length = 0;
                    whiteRookMovement(x, y);
                    chess[x][y] = 0;

                }

                //selecting bishop
                //white
                else if(chess[x][y] == 104)
                {
                    movreq = 104;
                    bishopMovementX.length = 0;
                    bishopMovementY.length = 0;
                    whiteBishopMovement(x, y);
                    //document.getElementById("demo1").innerHTML = bishopMovementX;
                    //document.getElementById("demo2").innerHTML = bishopMovementY;
                    chess[x][y] = 0;

                }
                //black
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
                //black
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

            }
            //alert("x: " + x + " y: " + y);
            //a = 2;
        } else if (a == 2) {
            document.getElementById(item).style.background = "green";
            a = 1;
            alert("x: " + x + " y: " + y);
            chess[x][y] = 2;
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
            }
            else{
                alert("invalid");
            }
        }
    }
    colorr();
}
