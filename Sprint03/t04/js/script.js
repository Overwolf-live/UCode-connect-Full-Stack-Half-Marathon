"use strict"
let mixin = {
    wordReplace(from, to) {
        if (from && to) {
            this.description = this.description.replace(from, to);
        }
    },
    wordInsertAfter(word, toInsert) {
        this.description = this.description.replace(word, (word + ' ' + toInsert));
    },
    wordDelete(str) {
        this.description = this.description.replace(str, "");
    },
    wordEncrypt() {
        this.description = this.description.replace(/[a-z]/gi, c =>
            String.fromCharCode(c.charCodeAt() + 13 - 26 * /[n-z]/i.test(c)));
    },
    wordDecrypt() {
        this.description = this.description.replace(/[a-z]/gi, c =>
            String.fromCharCode(c.charCodeAt() - 13 + 26 * /[a-m]/i.test(c)));
    }
}

const house = new HouseBuilder('88 Crescent Avenue','Spacious town house with wood flooring, 2-car garage, and a back patio.','J. Smith', 110, 5);
Object.assign(house, mixin);
console.log(house.description);
house.wordReplace("wood", "tile");
console.log(house.description);
house.wordDelete("town ");
console.log(house.description);
house.wordInsertAfter("with", "marble");
console.log(house.description);
house.wordEncrypt();
console.log(house.description);
house.wordDecrypt();
console.log(house.description);

