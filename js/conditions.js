import { prompt } from "../helper.js";

console.log(
  "''' ICI NOUS ALLONS FAIRE UN PROGRAMME COMPLET SELON MON GOUT '''"
);

const name = await prompt("Quel est votre nom ?");

console.log(`Bonjour ${name} !`);
