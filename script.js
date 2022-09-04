// animando playlists 

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
    target.forEach(function(element){

        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }

    })
}

animeScroll()

if(target.length) {

    window.addEventListener('scroll', function() {
        animeScroll()
    })

}

// colorir albuns 

let primeiroAlbum = document.getElementById('album1')

primeiroAlbum.addEventListener("mouseover", mudarCorPrimeiroAlbum)
primeiroAlbum.addEventListener("mouseout", retornarCorPrimeiroAlbum)

function mudarCorPrimeiroAlbum() {

   primeiroAlbum.style.filter = 'grayscale(0)'
   primeiroAlbum.style.transition = 'all 300ms ease-in'

}

function retornarCorPrimeiroAlbum() {

    primeiroAlbum.style.filter = 'grayscale(100%)'
    primeiroAlbum.style.transition = 'all 300ms ease-in'

}

// segundo

let segundoAlbum = document.getElementById('album2')

segundoAlbum.addEventListener("mouseover", mudarCorsegundoAlbum)
segundoAlbum.addEventListener("mouseout", retornarCorsegundoAlbum)

function mudarCorsegundoAlbum() {

   segundoAlbum.style.filter = 'grayscale(0)'
   segundoAlbum.style.transition = 'all 300ms ease-in'

}

function retornarCorsegundoAlbum() {

    segundoAlbum.style.filter = 'grayscale(100%)'
    segundoAlbum.style.transition = 'all 300ms ease-in'

}

// terceiro

let terceiroAlbum = document.getElementById('album3')

terceiroAlbum.addEventListener("mouseover", mudarCorterceiroAlbum)
terceiroAlbum.addEventListener("mouseout", retornarCorterceiroAlbum)

function mudarCorterceiroAlbum() {

   terceiroAlbum.style.filter = 'grayscale(0)'
   terceiroAlbum.style.transition = 'all 300ms ease-in'

}

function retornarCorterceiroAlbum() {

    terceiroAlbum.style.filter = 'grayscale(100%)'
    terceiroAlbum.style.transition = 'all 300ms ease-in'

}

// mudar texto playlist 

let texto1 = document.getElementById("playText1")

texto1.addEventListener("mouseenter", () => {
    texto1.innerText = 'Visitar playlist'
    texto1.style.backgroundColor = '#f6f6f6'
})

texto1.addEventListener("mouseout", () => {
    texto1.innerText = 'Pop'
    texto1.style.backgroundColor = '#000'
})

let texto2 = document.getElementById("playText2")

texto2.addEventListener("mouseover", () => {
    texto2.innerHTML = 'Visitar playlist'
    texto2.style.backgroundColor = '#f6f6f6'
})

texto2.addEventListener("mouseout", () => {
    texto2.innerText = 'Trending'
    texto2.style.backgroundColor = '#000'
})

let texto3 = document.getElementById("playText3")

texto3.addEventListener("mouseover", () => {
    texto3.innerHTML = 'Visitar playlist'
    texto3.style.backgroundColor = '#f6f6f6'
})

texto3.addEventListener("mouseout", () => {
    texto3.innerText = 'Nostalgia'
    texto3.style.backgroundColor = '#000'
})