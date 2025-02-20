import { prompt } from "../helper.js";

let age = Number(await prompt("Quel est ton age ? : "));

const ages = await prompt("Donne moi ton age : ");

//Variable modifiable

age = age - 1;

// Variable non modifiable

console.log(ages);

console.log(` Votre age est ${age} et votre age est ${ages}`);
