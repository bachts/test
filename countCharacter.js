var char, count;
var cnt = {}; 
let a =  prompt("wha")
for(var i = 0; i < a.length; i++)
{
    char = a.charAt(i);
    if(cnt[char] == undefined)
    {
        count = 0;
        cnt[char] = count;
    }
    else count = cnt[char];
    cnt[char] = count + 1;
}
for(char in cnt)
console.log(char, cnt[char]);
console.log(cnt);