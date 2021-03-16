let guestList = new Set();
guestList.add("John").add("Mike").add("Julia").add("Carl").add("Monica");
console.log(guestList);
for (let item of guestList)
    console.log(item);
console.log(guestList.has("Karina"));
console.log(guestList.size); 
guestList.delete("Mike");
console.log(guestList);
guestList.clear(); 
console.log(guestList);
console.log("---------------");

let menu = new Map();
menu.set("rizotto", 3).set("pizza", 4).set("soup", 2.5).set("cake", 1.2).set("ice-cream", 0.7);
console.log(menu);
for (let [key, value] of menu)
    console.log(`${key}'s price is ${value}`);
menu.delete("pizza");
console.log(menu.has("pizza"));
console.log(menu.size);
menu.clear();
console.log(menu);
console.log("---------------");

let bankVault = new WeakMap();
let user = {};
let user2 = {};
bankVault.set(user, "content").set(user2, "content2");
console.log(bankVault);
console.log(bankVault.has(user));
console.log(bankVault.get(user));
bankVault.delete(user2);
console.log(bankVault);
console.log("---------------");


let coinCollection = new WeakSet();
let obj = {
    "coin": "content"
}
let obj1 = {
    "coin1": "content"
}
let obj2 = {
    "coin2": "content"
}
coinCollection.add(obj).add(obj1).add(obj2);
console.log(coinCollection);
console.log(coinCollection.has(obj1));
coinCollection.delete(obj2);
console.log(coinCollection);



