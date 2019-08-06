let PI = 3.14;
let sum = function (elements) {
    let total = 0;
    for (i=0;i<elements.length;i++) total+=elements[i];
    return total;
}

let findMax = function (elements) {
    let max = elements[0];
    for (i=1;i<elements.length;i++) if (max<elements[i]) max = elements[i];
    return max;
}

let findMin = function (elements) {
    let min = elements[0];
    for (i=1;i<elements.length;i++) if (min>elements[i]) min = elements[i];
    return min;
}
module.exports.pi = PI;
module.exports.sum = sum;
module.exports.findMax = findMax;
module.exports.findMin = findMin;