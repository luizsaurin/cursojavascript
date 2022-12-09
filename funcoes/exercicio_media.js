/*
Pode receber um ou mais valores numericos
Deve retornar um unico numero
Deve gerar um erro se receber um parametro nao numero
Deve retornar zero caso nao receba nenhum parametro
*/

//funcao auto invocavel
(function(){
    function calcularMedia() {
        let total = 0
        let qtd = arguments.length

        for(let i=0; i<qtd; i++) {
            if(typeof arguments[i] !== "number") {
                throw Error("only numbers")
            }
            total += arguments[i]
        }

        return (total / qtd) || 0 //curto circuito
    }

    let media = calcularMedia(2, 4)
    console.log(media)
})()