let character = {
    name : "PA",
    skills : [
        {
            name : "dagger",
            rate : 1.0,
        },
        {
            name : "crit",
            rate : 0.15,
        }
    ]
}
let use_skill = prompt("choose skill");
let rng = character.skills.find(x => x.name === use_skill).rate;
var random = Math.random();
if(rng > random || rng == random)
console.log("HIT");
else console.log("MISS");