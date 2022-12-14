function fn(cb) {
    console.log("executar acao de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}

function callback() {
    console.log("funcao passada por parametro")
}

fn(callback)

//=================================================
//=================================================
//=================================================

//Eh possivel atribuir funcoes a propriedades de objetos
const obj = {
    callback
}

obj.callback()

//=================================================
//=================================================
//=================================================

function fn2(n1) {
    return function (n2) {
        return n1 * n2
    }
}

const funcao2 = fn2(10) // sera retornado o function (n2)
const mult = funcao2(2) // sera retornado n1 * n2
console.log(mult)

//Outro exemplo

function fn3() {
    fn3.count++
    return function () {
        console.log("funcao retornada")
    }
}
fn3.count = 0

const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()
funcao3()
console.log(fn3.count)