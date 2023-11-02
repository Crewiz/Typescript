"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function logTypeAndValue(value) {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}
logTypeAndValue("hello"); // Output bör vara "Type: string, Value: hello"
// 2. Ge ett exempel på en funktion med två generiska typer.
function pairValues(value1, value2) {
    return [value1, value2];
}
const pair = pairValues("hello", 42); // Output bör vara: ["hello", 42]
console.log(pair);
class IntArrayHolder {
    constructor(data) {
        this.data = data;
    }
}
const intArrayHolder = new IntArrayHolder([1, 2, 3]);
console.log(intArrayHolder.data); // Output: [1, 2, 3]
