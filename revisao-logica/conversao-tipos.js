let n1 = "10"
let n2 = 2

// verificando as operacoes, e tipos de conteudo nas variaveis
console.log(n1 * n2, typeof n1, typeof n2)
console.log(n1 / n2, typeof n1, typeof n2)
console.log(n1 + n2, typeof n1, typeof n2)
console.log(n1 - n2, typeof n1, typeof n2)

// formas de conversao: parseInt, parseFloat, Number()

n1 = "10.25"

n1 = parseFloat(n1)
console.log(n1 + n2, typeof n1, typeof n2);

n1 = parseInt(n1);
console.log(n1 + n2, typeof n1, typeof n2) //ignora a parte decimal

n1 = "10aaaa123"
n1 = parseInt(n1)
console.log(n1, typeof n1) //pega somente o numero que estiver antes das letras

n1 = "aaaa10aaaa"
n1 = parseInt(n1)
console.log(n1, typeof n1) //se tiver letra antes do numero ele nao pega, NaN = Not a Number

/* ----------------------- */

n1 = 10;

n1 = Number(n1)
console.log(n1, typeof n1)

n1 = "10aa"
n1 = Number(n1)
console.log(n1, typeof n1) // Number() nao converte

n2 = 10
n2 = n2 + ""
console.log(n2, typeof n2) // transforma o 10 int em "10" string

n2 = 15
n2 = n2.toString() // toString() pode passa como parametro uma base (10 = decimal, 16 = hexadecimal, etc)
// se nao colocar nada, o padrao fica base 10
console.log(n2, typeof n2) // forma melhor de converter para string

n2 = 15
n2 = n2.toString(16) //base hexadecimal
console.log(n2, typeof n2)