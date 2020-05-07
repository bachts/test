let button = document.getElementById("btn");
button.addEventListener("click",function() {
    let p = document.getElementById("paragraph");
    p.style.color = "red"
})
let i = document.getElementById("inp");
i.addEventListener("keyup", function(e) {
    console.log(e.code);
})