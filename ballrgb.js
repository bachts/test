
var score = 0;
var R,G,B;
let result = document.getElementById("score");
let balls = document.getElementsByClassName("ball");
function setup(){
    R = Math.floor(Math.random()*255);
    G = Math.floor(Math.random()*255);
    B = Math.floor(Math.random()*255);
    var choose = Math.floor(Math.random()*3);
    let givenRGB = `(${R},${G},${B})`;
    let header = document.getElementById("hhh");
    header.innerHTML = givenRGB;
    for(var i = 0; i < 3; i++)
    {
        if(i == choose)
        {
            balls[i].style.backgroundColor = `rgb(${R},${G},${B})`;
        }
        else
        {
            var wrongR = Math.ceil(Math.random()*255);
            var wrongG = Math.ceil(Math.random()*255);
            var wrongB = Math.ceil(Math.random()*255);
            if(wrongR == R && wrongG == G && wrongB == B)
            while(wrongR == R && wrongG == G && wrongB == B)
            {
                var wrongR = Math.ceil(Math.random()*255);
                var wrongG = Math.ceil(Math.random()*255);
                var wrongB = Math.ceil(Math.random()*255);
            }
            balls[i].style.backgroundColor = `rgb(${wrongR},${wrongG},${wrongB})`;
        }
    }
}
setup();
function add_click(object)
{
    object.addEventListener("click",function(){
        console.log(R,G,B);
        if(object.style.backgroundColor == `rgb(${R}, ${G}, ${B})`)
        score += 1;
        else 
        score -= 1;
        result.innerHTML = `score = ${score}`;
        setup();
    })
}
for(var i = 0; i < 3; i++)
{
    add_click(balls[i]);
}