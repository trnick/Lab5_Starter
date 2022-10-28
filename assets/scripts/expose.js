// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.querySelector('#horn-select');
  const sound = document.getElementsByClassName('hidden');

  selectElement.addEventListener('click', (event) => {
    if (selectElement.value == 'air-horn') {
      document.querySelector('img').src = 'assets/images/air-horn.svg';
      sound.src = 'assets/audio/air-horn.mp3';
    }
    else if (selectElement.value == 'car-horn') {
      document.querySelector('img').src ='assets/images/car-horn.svg';
      sound.src = 'assets/audio/car-horn.mp3';
    }
    else if (selectElement.value == 'party-horn') {
      document.querySelector('img').src = 'assets/images/party-horn.svg';
      sound.src = 'assets/audio/party-horn.mp3';
    }
  });
  
  let volumeNum = 50;
  const volume = document.querySelector('#volume-controls');
  volume.addEventListener('change', (event) => {
    const image = document.querySelectorAll('img')[1]
    volumeNum = event.target.value;
    if (event.target.value == 0) {
      image.src = "assets/icons/volume-level-0.svg";
    }
    else if (event.target.value > 1 && event.target.value < 33) {
      image.src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value >= 33 && event.target.value < 67) {
      image.src = "assets/icons/volume-level-2.svg";
    }
    else if (event.target.value >= 67) {
      image.src = "assets/icons/volume-level-3.svg";
    }
  });

  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  button.addEventListener('click', (event) => {
    console.log(sound.src)
    var audio = new Audio(sound.src);
    audio.volume = volumeNum/100;
    audio.play();
    if (selectElement.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}