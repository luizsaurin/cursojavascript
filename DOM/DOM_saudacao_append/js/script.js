(function(){
    const nomeUsuario = "Daniel"

    if(nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Olá, <b>${nomeUsuario}</b> </p>`

        const elementoPai = document.querySelector(".hero")
        const elementoFilho = elementoPai.firstElementChild

        elementoPai.insertBefore(topBarElemento, elementoFilho)
    }
})()