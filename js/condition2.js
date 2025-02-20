/**LES BOULEENS */

console.log("=== FALSY ===");

console.log("0", Boolean(0)); /**False */
console.log("String vide", Boolean("")); /**False */
console.log("Null", Boolean(null)); /**False */
console.log("NaN", Boolean(NaN)); /**False */

console.log("=== Truthy ===");

console.log("1", Boolean(1)); /**True */
console.log("String PAS vide", Boolean("a")); /**True */
console.log("Qqch", Boolean({})); /**True */

const age = 1;

const isMajor = age > 18;
const isMinor = age <= 18;
// @ts-ignore
const is18 = age === 18;

console.log("isMajor", isMajor);
console.log("isMinor", isMinor);
console.log("is18", is18);

// ORDER
const names = "John";

const isNameStartWithJ = names[0] === "J"; // true
const isNameLengthMoreThan4 = names.length > 4; // false

//                    👇 true           👇 false
const isOneTrue = isNameStartWithJ || isNameLengthMoreThan4;

