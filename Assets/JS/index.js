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

// variaveis myVideo / coverart / musicinfo / 
function manchild() {
  var video = document.getElementById("myVideo")
  var videoSource = document.getElementById('videoSource');
  var cover = document.getElementById("coverart")
  var info = document.getElementById("musicinfo")

  info.innerHTML = "Manchild <br> Sabrina Carpenter"

  if (videoSource.src != "./Assets/Videos/manchild.webm") {
    videoSource.src = './Assets/Videos/manchild.webm';
  } else {
    videoSource.src = './Assets/Videos/manchild.webm';
  }

  video.load(); // Recarrega o vídeo com a nova fonte

  if (cover.src != "./Assets/Images/songs/manchild.jfif") {
    cover.src = './Assets/Images/songs/manchild.jfif';
  } else {
    cover.src = './Assets/Images/songs/manchild.jfif';
  }
}

function clocks() {
  var video = document.getElementById("myVideo")
  var videoSource = document.getElementById('videoSource');
  var cover = document.getElementById("coverart")
  var info = document.getElementById("musicinfo")

  info.innerHTML = "Clocks <br> Coldplay"

  if (videoSource.src != "./Assets/Videos/Clocks.mkv") {
    videoSource.src = './Assets/Videos/Clocks.mkv';
  } else {
    videoSource.src = './Assets/Videos/Clocks.mkv';
  }

  video.load(); // Recarrega o vídeo com a nova fonte

  if (cover.src != "./Assets/Images/songs/clocks.jfif") {
    cover.src = './Assets/Images/songs/clocks.jfif';
  } else {
    cover.src = './Assets/Images/songs/clocks.jfif';
  }

  cover.load();
}
