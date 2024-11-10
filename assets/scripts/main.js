document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("music");
    audio.volume = 0.07; // Define o volume para 10%
});

function switchTheme(){
document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme');
}
