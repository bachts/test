let weight = [];
var collected = 0;
var profit = 0;
for(var i = 0; i < 10; i++)
weight[i] = Math.ceil(100*Math.random());
console.log(weight);

//kich thuoc sau 3 thang
// for(var i = 0; i < 10; i++)
// weight[i] = weight[i] * 1.2 * 1.2 * 1.2;
// console.log(weight);

//kich thuoc sau moi thang trong vong 5 thang
// for(var i = 0; i < 5; i++)
// {
//     for(var j = 0; j < 10; j++)
//     {
//         weight[j] = Math.round(weight[j] * 1.2*100)/100;
//         if(weight[j] > 100)
//         {
//             collected += weight[j] - 50;
//             weight[j] = 50;
//         }
//     }
//     console.log(weight);
// }

//luong long trong nha kho sau 6 thang
// for(var i = 0; i < 6; i++)
// {
//     for(var j = 0; j < 10; j++)
//     {
//         weight[j] = Math.round(weight[j] * 1.2*100)/100;
//         if(weight[j] > 100)
//         {
//             collected += weight[j] - 50;
//             weight[j] = 50;
//         }
//     }
// }
// console.log(collected);

for(var i = 0; i < 12; i++)
{
    for(var j = 0; j < 10; j++)
    {
        weight[j] = Math.round(weight[j] * 1.2*100)/100;
        if(weight[j] > 100)
        {
            collected += weight[j] - 50;
            weight[j] = 50;
        }
    }
}
profit = collected * 100000 - 10 * 12 * 100000;
console.log(profit);