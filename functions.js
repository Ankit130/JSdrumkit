function playsound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function remv(e) {
    if (e.propertyName == 'transform') {
        e.target.classList.remove('playing');
    }
    //const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //key.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', remv));
window.addEventListener('keydown', playsound);


//document.addEventListener('keypress', logKey);