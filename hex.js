function drawHex(x, y, size, horizonal=true){
    var canvas = document.getElementById('canvas');
    side = 0;
    if(horizonal)
    {
        angleOffset = 0;
    }
    else 
    {
        angleOffset = Math.PI/2
    }
    if(canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x + size * Math.cos(0 + angleOffset), y + size * Math.sin(0 + angleOffset));
        for(side; side < 7; side++)
        {
            ctx.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6 + angleOffset), y + size * Math.sin(side * 2 * Math.PI / 6 + angleOffset));
        }
        ctx.stroke();
    }
}

function draw()
{
    hexSize = 10;
    for(j = 0; j < 10; j++)
    {
        for(i = 0; i < 10; i++)
        {
            drawHex(i * hexSize * 4 + j * hexSize * 2,j * hexSize, hexSize)
        }
    }
}