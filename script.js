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


