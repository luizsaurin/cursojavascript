// var, let, const

// var -> ES5 - cross-browser
// let e const -> ES2015

// var permite declarar mais de uma vez, e permite trocar o conteudo
// let nao permite declarar mais de uma vez, mas permite trocar o conteudo
// const nao permite declarar mais de uma vez, nao permite trocar o conteudo, e ao declarar deve ja inicializar com algum valor

var teste1 = "minha string1";
teste1 = 10;

let teste2 = "minha string2";
teste2 = 20;

const teste3 = "minha string3";

console.log(teste1);
console.log(teste2);
console.log(teste3);