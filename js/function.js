const isAuthorized = (age, role) => {
  if (role !== "admin") {
    return false;
  }

  if (age <= 18) {
    return false;
  }

  return true;
};

console.log(isAuthorized); //

//Une autre maniere de faire
const isAuthorized2 = (age, role) => role === "admin" && age < 18;

console.log(isAuthorized2);

function add(a, b) {
  const result = a + b;

  return result;
}

console.log(add(add(3, 5), add(10, 5))); //
//Ici on vérifie que a et b sont bien des nombres, si ce n'est pas le cas on lance une erreur.
const add2 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a and b must be numbers");
  }

  return a + b;
};
