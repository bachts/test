// let n = Math.ceil(Math.random()*100);
// let guess = prompt("zz");
// let cnt = 1;
// while(guess != n)
// {
//     cnt += 1;
//     if(guess < n)
//     {
//         guess = prompt("Lớn hơn chút");
//         continue;
//     }
//     else
//     guess = prompt("Nhỏ hơn chút");
// }
// console.log(n);
// console.log(cnt);

// let input = prompt("enter numbers");
// let res = input.split(",");
// let sum = 0;
// for(let i = 0; i < res.length; i++)
// {
//     sum = sum + Number(res[i]);
// }
// console.log(sum);
// console.log(sum/res.length);

let button = document.getElementById("btn");
button.addEventListener("click",function() {
let width = Number(document.getElementById("width").value);
let height = Number(document.getElementById("height").value);
let img = document.getElementById("img");
img.style.width = "${width}px";
img.style.height = "${height}px"; 
console.log(${width});
})