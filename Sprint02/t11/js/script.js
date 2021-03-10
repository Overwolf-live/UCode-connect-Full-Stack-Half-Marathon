
function deleteExtraSpaces(str = ' ', add = ' ') {
    return ((str + ' ' + add).trim()).split(/\s+/);
}
function removeDuplicates(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}
function addWords(obj, words) {
    if (obj) {
        let arr = deleteExtraSpaces(obj.words, words);

        obj.words = (removeDuplicates(arr)).join(' ');
    }
}
function removeWords(obj, words) {
    if (obj) {
        let arr = removeDuplicates(deleteExtraSpaces(obj.words));
        let arrOfWords = removeDuplicates(deleteExtraSpaces(words));

        arrOfWords.forEach(el => {
            (arr.indexOf(el) === -1) ? 0 : arr.splice(arr.indexOf(el), 1)
        });
        obj.words = arr.join(" ");
    }
}
function changeWords(obj, oldWords, newWords) {
    if (obj) {
        let arr = removeDuplicates(deleteExtraSpaces(obj.words));
        let arrOfOldWords = removeDuplicates(deleteExtraSpaces(oldWords));
        let arrOfNewWords = removeDuplicates(deleteExtraSpaces(newWords));

        arrOfOldWords.forEach( el => {
            (arr.indexOf(el) === -1) ? 0 : arr.splice(arr.indexOf(el), 1)
        });
        obj.words = arr.concat(arrOfNewWords).join(" ");
    }
}


