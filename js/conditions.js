import { prompt } from "../helper.js";

console.log(
  "''' \nICI NOUS ALLONS FAIRE UN PROGRAMME COMPLET SELON MON GOUT '''"
);

const name = await prompt("Quel est votre nom ?");

console.log(`\nBonjour ${name} !`);

console.log(
  "\nChoisissez un opérateur :\n1. Addition\n2. Soustraction\n3. Multiplication\n4. Division\n"
);

const operator = Number(await prompt("\nEntrez l'opérateur : "));

const firstNumber = Number(await prompt("\nEntrer le premier Nombre : "));
const secondNumber = Number(await prompt("\nEntrer le deuxieme Nombre : "));

switch (operator) {
  case 1:
    console.log("\nVous avez donc choisit l'Addition.");
    console.log(
      "\nLe resultat de l'Addition est :",
      firstNumber + secondNumber
    );
    break;
  case 2:
    console.log("\nVous avez donc choisit la Soustraction.");
    console.log(
      "\nLe resultat de la Soustraction est :",
      firstNumber - secondNumber
    );
    break;
  case 3:
    console.log("\nVous avez donc choisit la Multiplication.");
    console.log(
      "\nLe resultat de la Multiplication est :",
      firstNumber * secondNumber
    );
    break;
  case 4:
    console.log("\nVous avez donc choisit la Division.");
    if (secondNumber === 0) {
      console.error("Nombre indivisible par O");
      process.exit(1);
    }
    console.log(
      "\nLe resultat de la division est :",
      firstNumber / secondNumber
    );
    break;

  default:
    process.exit(1);
    break;
}

console.log(`\n\n ''' MERCI POUR VOTRE CONFIANCE ${name.toUpperCase()}'''`);
