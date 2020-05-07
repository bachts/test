// let p = document.getElementById("btn_test");
// p.addEventListener("click", function(){
//     let q = document.getElementById("quote");
//     q.style.color = "yellow";
//     q.style.fontSize = "30px";
//     q.textContent = "You are the source of my joy, the center of my world and the whole of my heart";
//     let r = document.getElementById("word");
//     let s = document.getElementById("input");
//     r.textContent = s.value;
//     q.style.color = s.value;
//     s.value = "";
// })
let url = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=DEMO_KEY"
async function testAPI(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
testAPI();