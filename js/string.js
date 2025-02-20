import { prompt } from "../helper.js";

let name = await prompt("Entrer un mot : ");

const firstCaracter = name[0];

const lastCaracter = name[name.length - 1];

console.log(firstCaracter + lastCaracter);

const lowaerCaseName = name.toLowerCase();

const upperCaseName = name.toUpperCase();

console.log(`
  Le mot en minuscule : ${lowaerCaseName} \n et en majuscule : ${upperCaseName}`);
