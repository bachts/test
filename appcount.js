let value = document.getElementById("number");
let up = document.getElementById("plus");
let down = document.getElementById("minus");
function add(a)
{
    a.addEventListener("click", function(){
        value.innerHTML++;
    })
}
function substract(a)
{
    a.addEventListener("click", function(){
        value.innerHTML--;
    })
}
add(up);
substract(down);