// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.querySelector('#horn-select');
  const sound = document.getElementsByClassName('hidden');

  selectElement.addEventListener('click', (event) => {
    if (selectElement.value == 'air-horn') {
      document.querySelector('img').src = 'assets/images/air-horn.svg';
      const button = document.querySelector('button');
      button.addEventListener('click', (event) => {
        sound.src = 'audio/air-horn.mp3';
      });
    }
    if (selectElement.value == 'car-horn') {
      document.querySelector('img').src ='assets/images/car-horn.svg';
        sound.src = 'audio/car-horn.mp3';
    }
    if (selectElement.value == 'party-horn') {
      document.querySelector('img').src = 'assets/images/party-horn.svg';
        sound.src = 'audio/party-horn.mp3';
    }
  });

  
  const volume = document.querySelector('#volume-controls');
  selectElement.addEventListener('change', (event) => {
    console.log(volume.innerHTML.value);
    if (volume.value == 0) {
      document.querySelector('img').src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume.value > 1 && volume.value < 33) {
      document.querySelector('img').src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume.value >= 33 && volume.value < 67) {
      document.querySelector('img').src = 'assets/icons/volume-level-2.svg';
    }
    else if (volume.value >= "67") {
      console.log("hey");
      volume.src = "icons/volume-level-0.svg";
    }
  });

  button.addEventListener('click', (event) => {
    sound.src = 'audio/party-horn.mp3';
  });
}