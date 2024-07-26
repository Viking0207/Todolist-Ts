let array:any[]=["rahmat", 123, true];
array[0]="fushiguro rahmat";
array.push("Itadori fajar");
console.log(array);

let w:unknown= 1;
w = "string";
w ={
       runNonExixtsMethod: () =>{
            console.log("runNonExixtsMethod contoh 2");
              
       }
}as{runNonExixtsMethod: () => void};
if (typeof w === "object" && w !== null) {
       (w as {runNonExixtsMethod: () => void }).runNonExixtsMethod();
}

function throwError(errorMag: string): never{
       throw new Error(errorMag);
}
// throwError("Santai bang, jangan ngamuk dulu!");

function assertNever(x: never): never {
       throw new Error("Santai bang, jangan ngamuk dulu!"+x);
}

function printAnimal(animal: "cat"|"dog"|"bird"): void {
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

let namaPemain: string;
let angkaPemain: number;

console.log(namaPemain = "Ronaldo", angkaPemain = 10);
