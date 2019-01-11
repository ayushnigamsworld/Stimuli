//var synth = window.speechSynthesis;

//var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = 1;
var pitchValue = document.querySelector('.pitch-value');
var rate = 1;
var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  var synth = window.speechSynthesis;
  voices = synth.getVoices();
  var selectedIndex = 4;
  //voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  //voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

//populateVoiceList();
// if (speechSynthesis.onvoiceschanged !== undefined) {
//   speechSynthesis.onvoiceschanged = populateVoiceList;
// }

function speak(dataToSpeak){
  var synth = window.speechSynthesis;
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        //return;
    }
    if (dataToSpeak !== '') {
    var utterThis = new SpeechSynthesisUtterance(dataToSpeak);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = 'Google UK English Female';
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}

// inputForm.onsubmit = function(event) {
//   event.preventDefault();

//   speak();

//   inputTxt.blur();
// }

// pitch.onchange = function() {
//   pitchValue.textContent = pitch.value;
// }

// rate.onchange = function() {
//   rateValue.textContent = rate.value;
// }

// voiceSelect.onchange = function(){
//   speak();
// }