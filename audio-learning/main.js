// // const audio = document.querySelector("audio");

// const audio = new Audio("Lazer-Beam-with-Voicemod-Text-to-Song (2).mp3")
// const playBtn = document.querySelector(".play");
// const pauseBtn = document.querySelector(".pause");

// playBtn.addEventListener("click", ()=>{
//     audio.play()
// })

// pauseBtn.addEventListener("click", ()=>{
//     audio.pause()
// })

const audioContext = new AudioContext();
const audio = new Audio("Lazer-Beam-with-Voicemod-Text-to-Song (2).mp3");

// PUT THE AUDIO INTO THE AUDIOCONTEXT AS SOURCE OF THE SOUND
const source = audioContext.createMediaElementSource(audio);

// NOW CONNECT THE SOURCE TO THE DESTINATIOM I.E SPEAKER
// source.connect(audioContext.destination);

// how to add volume and resduce/increase it...
// FIRST CREATE THE GAIN like we created the source
const volume = audioContext.createGain();
volume.gain.value = .2;

// CONNECT THE VOLUME TO SOURCE AND DESTINATION AUDIO CONTEXT
source.connect(volume)
volume.connect(audioContext.destination)

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const audioContextAutoResume = document.querySelector("body")
const stopBtn = document.querySelector(".stop");

//HOW TO PLAY
playBtn.addEventListener("click", ()=>{
    // if (audioContext.state === "suspended"){
    //     audioContext.resume()
    //     console.log(audioContext)
    // }
    audio.play()
})

//HOW TO PAUSE WHATS PLAYING
pauseBtn.addEventListener("click", ()=>{
    audio.pause()
})


console.log(audioContext)
audioContextAutoResume.addEventListener("mousemove", function () {
    if (audioContext.state === "suspended"){
        audioContext.resume()
    }
})

//HOW TO STOP WHATS PLAYING
stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0 //pause then set the plaing time back to 0
})