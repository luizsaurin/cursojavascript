/*

+ = soma
- = subtracao
* = multiplicacao
/ = divisao
% = resto da divisao
** = potencia (nao funciona em todos os browser)

*/

let n1 = 10
let n2 = 5

// operadores aritmeticos
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2 ** 3)

//operadores de atribuicao
let n3 = 20
console.log(n3 += 15) //n3 = n3 + 15
n3 = 20
console.log(n3 *= 2) // n3 = n3 * 2
n3 = 20
console.log(n3 /= 2) // n3 = n3 / 2
n3 = 20
console.log(n3 %= 2) // resto da divisao por 2
n3 = 20
console.log(n3 **= 2) // potencia na 2, nao recomendado usar por ser um metodo novo

//increment e decremento
let i = 0
i = i + 1
i += 1
i++
++i

let y = 0
y = y -1
y -= y
y--
--y

let x = 0
console.log(x++) //vai mostrar o valor de X, e depois vai fazer a soma e atribuicao
console.log(++x) //vai fazer a soma e atribuicao, e depois mostrar o valor de X
