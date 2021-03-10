"use strict"

function copyObj(obj) {
    const copy = {};
    Object.keys(obj).forEach((key) => {
        copy[key] = obj[key];
    });
    return copy;
}
