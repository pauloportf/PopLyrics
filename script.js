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
    primeira.style.transition = 'all 300ms linear'

}

function mudarTextoSegunda() {

    let play = "Ir para playlist"

    segunda.innerHTML = `${play}`
    segunda.style.transition = 'all 300ms linear'

}

function mudarTextoTerceira() {

    let play = "Ir para playlist"

    terceira.innerHTML = `${play}`
    terceira.style.transition = 'all 300ms linear'
}

function reverterTexto() {
    primeira.innerHTML = "Pop"
    primeira.style.transition = 'all 300ms linear'

    segunda.innerHTML = "into a past"
    segunda.style.transition = 'all 300ms linear'

    terceira.innerHTML = "Trending"
    terceira.style.transition = 'all 300ms linear'
}

// Albuns

let album = document.getElementById("album")

let album1 = document.getElementById("album1")
album1.addEventListener("click", () => {
    album.src = 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Madison_Beer_-_Life_Support.png'
    album.style.transition = 'all 200ms ease'
})

let album2 = document.getElementById("album2")
album2.addEventListener("click", () => {
    album.src = 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36'
    album.style.transition = 'all 200ms ease'
})

let album3 = document.getElementById("album3").addEventListener("click", () => {
    album.src = 'https://upload.wikimedia.org/wikipedia/pt/1/16/Planet_Her_-_Doja_Cat.png'
    album.style.transition = 'all 600ms ease'
})

let album4 = document.getElementById("album4").addEventListener("click", () => {
    album.src = 'https://tracklist.com.br/wp-content/uploads/2022/03/FNbnntgUYAAd5LG.jpg'
    album.style.transition = 'all 200ms ease'
})
