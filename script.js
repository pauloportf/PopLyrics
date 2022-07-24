// carousel
const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add("active")
    })
})

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active")
    })
}

// carousel songs


// ir para playlist

let primeira = document.getElementById('primeira')
primeira.addEventListener("mouseover", mudarTextoPrimeira)
primeira.addEventListener("mouseout", reverterTexto)


let segunda = document.getElementById('segunda')
segunda.addEventListener("mouseover", mudarTextoSegunda)
segunda.addEventListener("mouseout", reverterTexto)

let terceira = document.getElementById('terceira')
terceira.addEventListener("mouseover", mudarTextoTerceira)
terceira.addEventListener("mouseout", reverterTexto)

function mudarTextoPrimeira() {

    let play = "Ir para playlist"

    primeira.innerHTML = `${play}`
    primeira.style.transition = 'all 600ms linear'

}

function mudarTextoSegunda() {

    let play = "Ir para playlist"

    segunda.innerHTML = `${play}`
    segunda.style.transition = 'all 600ms linear'

}

function mudarTextoTerceira() {

    let play = "Ir para playlist"

    terceira.innerHTML = `${play}`
    terceira.style.transition = 'all 600ms linear'
}

function reverterTexto() {
    primeira.innerHTML = "Pop"
    primeira.style.transition = 'all 600ms linear'

    segunda.innerHTML = "Anos 10's"
    segunda.style.transition = 'all 600ms linear'

    terceira.innerHTML = "Trending"
    terceira.style.transition = 'all 600ms linear'
}

