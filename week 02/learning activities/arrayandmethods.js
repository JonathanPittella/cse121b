let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana'];
names.push('Sally');

let theName = names[2];
let nameScore = names.length;

let lastIndex = names.length -1;
let nameIndex = names[lastIndex];
let indexScore = lastIndex;

console.log(theName);
console.log(nameIndex);
console.log(namePush);

document.getElementById("console").innerHTML = "The name: " + theName;
document.getElementById("nameScore").innerHTML = "Name score: " + nameScore;
document.getElementById("indexScore").innerHTML = "Index last item: " + indexScore;
document.getElementById("namePush").innerHTML = "Push Sally: " + names;