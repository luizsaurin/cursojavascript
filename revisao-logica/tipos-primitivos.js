// tipos primitivos: string, number (int, float), boolean
// outros tipos no js: undefined, null, symbol (ES2015)

// maneiras de declarar uma string
let minhaVar = "minha string";
// string dentro de string
let minhaVar2 = 'minha "string" com aspas simples';
var minhaVar3 = `minha template literal`;
console.log(minhaVar3);

// concatenacao de string com numero
let idade = 40;
let msg = "eu possuo " + idade + " anos";
let msg1 = `eu possuo ${idade} anos`;

// contacetancao de string com string
console.log(msg1);
console.log("Hello " + " World!");

// typeof = verifica tipo de conteudo que tem na variavel
console.log(typeof msg, typeof idade, typeof msg1, "--", 20);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

// boolean
const isValid = true;
console.log(`isValid: ${isValid}`);
// criar uma variavel sem inicializar, por padrao fica atribuido como undefined
let varTeste;
console.log(typeof varTeste, varTeste);

// tem como atribuit o valor undefined manualmente
varTeste = undefined;
console.log(typeof varTeste, varTeste);

// esse eh uma anomalia do javascript, o valor null deveria ser do tipo null, mas o javascript entende que o valor null eh um object
varTeste = null;
console.log(typeof varTeste, varTeste);

// variavel com valor do tipo number
varTeste = 10;
console.log(typeof varTeste, varTeste);