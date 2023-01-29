const pianoKey = document.querySelectorAll('.piano-keys .key');

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
    //Добавление обработчика события
    key.addEventListener('click', () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
    // Проверка есть ли нажатая клавиша в массиве
    if(allKeys.includes(e.key)) playTune(e.key);
}

document.addEventListener('keydown', pressedKey);