//As functions sao "compiladas" antes das chamadas

teste() //vai funcionar

function teste() {
    console.log("teste");
}

teste() // tambem vai funcionar

//==========================================================================
//==========================================================================
//==========================================================================

//Com a variavel tipo VAR, a variavel eh criada mas nao inicializada

console.log(minhaVar) // variavel criada, porem nao inicializada = undefined

var minhaVar = function () {
    console.log("teste2")
}

console.log(minhaVar) // variavel criada e inicializada

//==========================================================================
//==========================================================================
//==========================================================================

//Com variaveis do tipo LET e CONST, a variavel deve ser criada e inicializada antes da sua chamada, ao contrario ocorre um erro

console.log(minhaVar2) // Erro. A variavel precisa ser criada e inicializada antes da sua chamada

const minhaVar2 = function () {
    console.log(minhaVar)
}

console.log(minhaVar2)