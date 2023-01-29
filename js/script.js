const pianoKey = document.querySelectorAll('.piano-keys .key');

let audio = new Audio('../tunes/a.wav'); //Аудио по умолчанию

const playTune = (key) => {
    audio.src = `../tunes/${key}.wav`;
    audio.play();
};

pianoKey.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key));
});