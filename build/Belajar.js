"use strict";
let array = ["rahmat", 123, true];
array[0] = "fushiguro rahmat";
array.push("Itadori fajar");
console.log(array);
let w = 1;
w = "string";
w = {
    runNonExixtsMethod: () => {
        console.log("runNonExixtsMethod contoh 2");
    }
};
if (typeof w === "object" && w !== null) {
    w.runNonExixtsMethod();
}
function throwError(errorMag) {
    throw new Error(errorMag);
}
// throwError("Santai bang, jangan ngamuk dulu!");
function assertNever(x) {
    throw new Error("Santai bang, jangan ngamuk dulu!" + x);
}
function printAnimal(animal) {
    switch (animal) {
        case "cat":
            console.log("mao");
            break;
        case "dog":
            console.log("guguk");
            break;
        case "bird":
            console.log("kikik");
            break;
        default:
            assertNever(animal);
    }
}
printAnimal("cat");
printAnimal("dog");
printAnimal("bird");
