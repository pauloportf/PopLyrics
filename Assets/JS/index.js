function toggleMute() {
    var video = document.getElementById("myVideo");
    var muteButton = document.getElementById("muteButton");

    if (video.muted) {
        video.muted = false;
        muteButton.src = "./Assets/Images/musicon.png"; // Altere para o ícone de desmutado
        muteButton.style.transition = "0.5s ease";
    } else {
        video.muted = true;
        muteButton.src = "./Assets/Images/musicoff.png"; // Altere para o ícone de mutado
    }
}