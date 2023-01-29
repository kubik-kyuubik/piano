const pianoKey = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');


let allKeys = []; 
let audio = new Audio('../tunes/a.wav'); //Аудио по умолчанию

const playTune = (key) => {
    audio.src = `../tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //Получение нажатой клавиши
    clickedKey.classList.add('active'); //Добавление класса active
    setTimeout(() => {
        clickedKey.classList.remove('active'); //Удаление класса active
    }, 150);
};

pianoKey.forEach(key => {
    allKeys.push(key.dataset.key);    
    key.addEventListener('click', () => playTune(key.dataset.key));//Добавление обработчика события
});

const showHideKeys = () => {
    pianoKey.forEach(key => key.classList.toggle('hide')); // Добавление-удаление класса hide
}

const handleVolume = (e) => {
    audio.volume = e.target.value; // Громкость звука    
}

const pressedKey = (e) => {
    // Проверка есть ли нажатая клавиша в массиве
    if(allKeys.includes(e.key)) playTune(e.key);
}
keysCheckbox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);