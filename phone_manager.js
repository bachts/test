let phones = [
    {
       name : "IP6S",
       brand: "Apple",
       price: 6000000,
       number:  5,
    },
    {
        name : "SSGS7",
        brand: "Samsung",
        price: 5000000,
        number:   6,
     },
     {
        name : "MM2",
        brand: "Xiaomi",
        price: 10000000,
        number:   7,
     }

]

// let new_name = prompt("name");
// let new_brand = prompt("brand");
// let new_price = prompt("price");
// var new_number = prompt("number");
// phones.push({name: new_name, brand: new_brand, price: new_price, number: new_number});


function findPhoneIndex(a)
{
    var id = -1;
    for(var i = 0; i < phones.length; i++)
    {
        if(phones[i].name == a)
        id = i;
    }
    return id;
}
let findPhone = prompt("findPhone");
let buyAmount = prompt("buyAmount");
let index = findPhoneIndex(findPhone);
if(index == -1 || buyAmount > phones[index].number)
console.log("BUG");
else
console.log(phones[index].price);
phones[index].number -= buyAmount;


var value = 0;
let value_name = "";
for(var i = 0; i < phones.length; i++)
{
    var new_value = phones[i].number * phones[i].price;
    value = Math.max(value, new_value);
    if(value == new_value)
    value_name = phones[i].name;
}
console.log(value_name);


for(var i = 0; i < phones.length; i++)
{
    console.log(phones[i].name, ":", phones[i].price);
}