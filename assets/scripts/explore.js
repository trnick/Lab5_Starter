// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const sound = window.speechSynthesis;
  let voices = [];
  let voiceSelect = document.getElementById("voice-select")

  sound.addEventListener("voiceschanged", function()  {
    voices = sound.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  const text = document.getElementById('text-to-speak')
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    let utterance = new SpeechSynthesisUtterance(text.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    utterance.addEventListener("start", function() {
      document.querySelector("img").src = "assets/images/smiling-open.png"
    });
    utterance.addEventListener("end", function() {
      document.querySelector("img").src = "assets/images/smiling.png"
    });
    sound.speak(utterance);   
  });
}