const imageMain = document.getElementById("image-main")

const imageCarousel = [
    "../Images/bunny.gif",
    "../Images/trainingseason.gif",
    "../Images/ed.gif",
    "../Images/myohmy.gif"
]

let index = 0

function changeBackground () {
    index = (index + 1) % imageCarousel.length
    imageMain.style.backgroundImage = `url(${imageCarousel[i]})`
}

setInterval(changeBackground, 5000)