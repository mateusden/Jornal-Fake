const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volumeBtn');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

// Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="bx bx-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="bx bx-play"></i>';
    }
});

// Atualizar progresso
audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;
    currentTime.textContent = formatTime(audio.currentTime);
});

// Carregar duração
audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
});

// Mudar posição do audio
progress.addEventListener('input', () => {
    const time = (progress.value / 100) * audio.duration;
    audio.currentTime = time;
});

// Mute/Unmute
volumeBtn.addEventListener('click', () => {
    audio.muted = !audio.muted; // Estava com "-" ao invés de "="
    volumeBtn.innerHTML = audio.muted ? '<i class="bx bx-volume-mute"></i>' : '<i class="bx bx-volume-full"></i>';
});

// Formatar o tempo
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

function compartilhar() {
    const texto = encodeURIComponent("Bah, dá uma olhada nessa notícia! https://mateusden.github.io/Jornal-Fake/ ");
    const url = `https://api.whatsapp.com/send?text=${texto}`;
    window.open(url, '_blank');
}