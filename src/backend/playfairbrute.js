let playfair = require('./playfair')
let data = require("./util/data.json")
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

/**
 * 
 * @param {String} a 
 * @param {String} gen
 * @returns {Array} 
 */
let alphabetGen = (a, gen) => {
    let out = [];
    if (a.length == 1) {
        out = [gen+a.charAt(0)];
        return out;
    }
    for (let i = 0; i < a.length; i++) {
        let aX = a.substr(0, i) + a.substr(i+1, a.length); 
        out = out.concat(alphabetGen(aX, gen+a.charAt(i)));
    }
    return out;
}

// console.log(alphabetGen(alphabet, ""));
let listOfKey = alphabetGen(alphabet, "");

for (key in listOfKey) {
    let plain = playfair.decrypt(data.str, key);
    var count = (plain.match(/the/g) || []).length;
    console.log(key, " with count= ", count)
}