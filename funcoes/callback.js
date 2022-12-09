const teste = function (cb) {
    console.log("funcao teste")

    /*
    if(typeof cb === "function") {
        cb(30)
    }
    */

    typeof cb === "function" && cb(30)
}

const fn = function (param) {
    console.log("funcao anonima de callback")
    console.log(param)
}

teste(fn)