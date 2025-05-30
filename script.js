// the colors and their respective details in an array of objects
let colorArray = [
    {
        name: "RED",
        code: "RED",
    },
    {
        name: "YELLOW",
        code: "YELLOW",
    },
    {
        name: "BLUE",
        code: "BLUE",
    },
    {
        name: "WHITE",
        code: "WHITE",
    },
    {
        name: "BLACK",
        code: "BLACK",
    },
    {
        name: "GREEN",
        code: "GREEN",
    },
    {
        name: "ORANGE",
        code: "ORANGE",
    },
    {
        name: "PURPLE",
        code: "PURPLE",
    },
]

// let primaryArray = [
//     {
//         name: "RED",
//         code: "RED",
//         audioThis: new Audio("audio/this-is-red.mp3"),
//         audioNow: new Audio("audio/now-paint-red.mp3"),
//     },
//     {
//         name: "YELLOW",
//         code: "YELLOW",
//         audioThis: new Audio("audio/this-is-yellow.mp3"),
//         audioNow: new Audio("audio/now-paint-yellow.mp3"),
//     },
//     {
//         name: "BLUE",
//         code: "BLUE",
//         audioThis: new Audio("audio/this-is-blue.mp3"),
//         audioNow: new Audio("audio/now-paint-blue.mp3"),
//     },
//     {
//         name: "WHITE",
//         code: "WHITE",
//         audioThis: new Audio("audio/this-is-white.mp3"),
//         audioNow: new Audio("audio/now-paint-white.mp3"),
//     },
//     {
//         name: "BLACK",
//         code: "BLACK",
//         audioThis: new Audio("audio/this-is-black.mp3"),
//         audioNow: new Audio("audio/now-paint-black.mp3"),
//     },
// ]

// CREATED THE SECONDARY COLORS
// let secondaryArray = [
//     {
//         name: "PURPLE",
//         code: "PURPLE",
//         audioThis: new Audio("audio/this-is-purple.mp3"),
//         audioNow: new Audio("audio/now-paint-purple.mp3"),
//     },
//     {
//         name: "ORANGE",
//         code: "ORANGE",
//         audioThis: new Audio("audio/this-is-orange.mp3"),
//         audioNow: new Audio("audio/now-paint-orange.mp3"),
//     },
//     {
//         name: "GREEN",
//         code: "GREEN",
//         audioThis: new Audio("audio/this-is-green.mp3"),
//         audioNow: new Audio("audio/now-paint-green.mp3"),
//     },
// ]

let goodJobAudio = new Audio("audio/good-job.mp3");
let count = 0;
let hoveredBox = 0;

// 🔉🔉🔉AUDIO ENGINE🔉🔉🔉

let audioContext;
let samplesThis;
let samplesNow;
let volume = 2

const samplePathsThis = [
    "audio/this-is-red.mp3",
    "audio/this-is-yellow.mp3",
    "audio/this-is-blue.mp3",
    "audio/this-is-white.mp3",
    "audio/this-is-black.mp3",
    "audio/this-is-green.mp3",
    "audio/this-is-orange.mp3",
    "audio/this-is-purple.mp3",
]
const samplePathsNow = [
    "audio/now-paint-red.mp3",
    "audio/now-paint-yellow.mp3",
    "audio/now-paint-blue.mp3",
    "audio/now-paint-white.mp3",
    "audio/now-paint-black.mp3",
    "audio/now-paint-green.mp3",
    "audio/now-paint-orange.mp3",
    "audio/now-paint-purple.mp3",
]
// 🔉🔉🔉AUDIO ENGINE🔉🔉🔉

// logic to pick random color from the array
// let randomColorSelection = colorArray[Math.floor(Math.random()*colorArray.length)].name;
// console.log(randomColorSelection);

// Get the color-text and color-box from the HTML page
const colorText = document.querySelector("#color-text")
const colorBox = document.querySelector("#color-box")

// get the header continer to append the color text and box
const headerContainer = document.querySelector("header")

// making the main section
const mainSection = document.querySelector("#main")
const menuH3 = document.querySelector("#main-h3")
const menuArtBoard = document.querySelector("#art-board")
const menuGoodJob = document.querySelector("#main-h4")
let artBoardCols = document.querySelectorAll("div.col")
const mainCover = document.querySelector("#main-cover")

// BOTTONS
const nextBtn = document.querySelector("#nextBtn");
const backBtn = document.querySelector("#backBtn");
backBtn.disabled = true
nextBtn.disabled = true

const soundBtn = document.querySelector("#soundBtn");
const beginNow = document.querySelector("#begin")
beginNow.disabled = true

// PICK THE BUTTONS ON COLOR TYPES
const primaryColor = document.querySelector("#primary-color")
const secondaryColor = document.querySelector("#secondary-color")

soundPara = document.querySelector("#soundPara")
beginPara = document.querySelector("#beginPara")
msgPara = document.querySelector(".msg")

const volumebtn = document.querySelector("#volumebtn")

volumebtn.addEventListener("input", ()=>{
volume = volumebtn.value
})

// FUNCTION TO CLEAR THE BOARD FOR NEXT COLOR DISPLAY
function clearArtBoard() {
    artBoardCols.forEach((artBoardCol) => {
        artBoardCol.style.backgroundColor = ""
    })
    hoveredBox = 0
    menuGoodJob.textContent = ""
    menuH3.textContent = ""
    menuArtBoard.classList.remove("art-board")
}


// JUST NEXT AUTOMATICALLY


// CHANGE THE COLOR WITH BUTTONS BY CLEARING THE BOARD AND RERUN THE DISPLAYS 
nextBtn.addEventListener("click", () => {
    // stopPlayingAudio()
    count++
    if (count >= colorArray.length) {
        menuH3.textContent = "THIS IS THE END. PRESS 👈🏽 TO TRY AGAIN"
        count--;
    } else {
        nextBtn.disabled = true
        backBtn.disabled = true
        clearArtBoard()
        displayColor()
        displayArtBoard()
    }
})

backBtn.addEventListener("click", () => {
    // stopPlayingAudio()
    count--
    if (count < 0) {
        menuH3.textContent = "THIS IS THE END. PRESS 👉🏽 TO TRY AGAIN"
        count++;
    } else {
        backBtn.disabled = true
        nextBtn.disabled = true
        clearArtBoard()
        displayColor()
        displayArtBoard()
    }
})

// EMPTY THE CURRENT COLOR THEN FILL WITH THE SELECT COLORS OPON CLICK
// secondaryColor.addEventListener("change", () => {
//     colorArray = [];
//     colorArray = secondaryArray;
//     count = 0;
//     clearArtBoard()
//     displayColor()
//     displayArtBoard()
// })

// primaryColor.addEventListener("change", () => {
//     colorArray = [];
//     colorArray = primaryArray;
//     count = 0;
//     clearArtBoard()
//     displayColor()
//     displayArtBoard()
// })

// 🔉🔉🔉AUDIO ENGINE🔉🔉🔉

//         soundBtn.addEventListener("click", () => {
//     if (AudioContext.state === "suspended") {
//         AudioContext.resume();
//     }
//     console.log(AudioContext)
// })

soundBtn.addEventListener("click", () => {
    audioContext = new AudioContext()
    console.log("Audio Context started")
    // START GETTING THE AUDIO NOW AND PUT THEN IN samples[]
    setupSamples(samplePathsThis).then((response) => {
        samplesThis = response;
        console.log(samplesThis)
    })
    setupSamples(samplePathsNow).then((response) => {
        samplesNow = response;
        console.log(samplesNow)
    })
    soundPara.textContent = "LOADING..."
    // let timer = [1,2,3,4,5]
    // timer.forEach((num)=>{
    //    setTimeout(() => {
    //     soundPara.textContent = num 
    //    }, 1000);
    // })
    setTimeout(()=>{
        soundPara.textContent = ""
        beginNow.disabled = false
    }, 5000)
})



beginNow.addEventListener("click", () => {
    beginPara.textContent = ""
    msgPara.textContent = ""
    setTimeout(() => {
        displayColor()
        displayArtBoard()
    }, 1000)

})


async function setupSamples(paths) {
    console.log("Getting the audios from server into buffer");
    const audioBuffers = [];
    for (const path of paths) {
        const sample = await getFile(path);
        audioBuffers.push(sample);
    }
    console.log("All audios gotten into buffer")
    return audioBuffers;
}

async function getFile(filePath) {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}

function playSample(audioBuffer) {
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    sampleSource.connect(gainNode).connect(audioContext.destination);
    sampleSource.start(0);
    return sampleSource
}

// 🔉🔉🔉AUDIO ENGINE🔉🔉🔉


// mainCoverToggle()

// DIDNT WORK BCS YOU CAN ONLY SELECT MULTIPLE ELEMENT TOGETHER USING document.querySelectorAll()
// BE IT A CLASS OR ID
// AND THE RESULT WILL AN ARRAY CONATAINING ALL THE ELEMENTS
// SO YOU NEED TO ITERATE THROUGH ALL THE ELEMENTS IN THE ARRAY USING ARRAY MODIFYERS
// -eg array.forEach()
// artBoardCol.addEventListener("pointerover", () => {
//     artBoardCol.style.backgroundColor = colorArray[count].code
//     hoveredBox++;
//     // DISPLAY GOOD JOB WHEN HOVERED BOXES = 40
//     if (hoveredBox === 40){
//         console.log(hoveredBox)
//         menuGoodJob.textContent = "GOOD JOB 👍"
//     }
// })


// // making the main section
// const mainSection = document.querySelector("main")
// const menuH3 = document.createElement("h3")
// const menuArtBoard = document.createElement("div")
// menuArtBoard.classList.add("art-board")
// const menuGoodJob = document.createElement("h4")


// setTimeout(() => {
//         let hoveredBox = 0;
//         menuH3.textContent = `Now paint the box below with the color ${colorArray[count].name}`
//         mainSection.appendChild(menuH3)
//         mainSection.appendChild(menuArtBoard)
//         mainSection.appendChild(menuGoodJob)
//         // CREATE THE ROW DIVS - parent for the col color divs
//         for (let i = 0; i < 7; i++) {
//             const rowDiv = document.createElement("div")
//             rowDiv.classList.add("row")
//             // CREATE THE COL DIVS -
//             for (let j = 0; j < 5; j++) {
//                 const colDiv = document.createElement("div")
//                 colDiv.classList.add("col")
//                 // ADD BGCOLOR OPON POINTOVER & COUNT IF HOVERED BOXES = 40
//                 colDiv.addEventListener("pointerover", () => {
//                     colDiv.style.backgroundColor = colorArray[count].code
//                     hoveredBox++;
//                     // DISPLAY GOOD JOB WHEN HOVERED BOXES = 40
//                     if (hoveredBox === 40){
//                         console.log(hoveredBox)
//                         menuGoodJob.textContent = "GOOD JOB 👍"
//                     }
//                 })
//                 rowDiv.appendChild(colDiv)
//             }
//             menuArtBoard.appendChild(rowDiv)
//         };
// }, 5000)
// FUNCTION TO DISPLAY COLOR ON THE HEADER

function displayColor() {
    backBtn.disabled = true
    nextBtn.disabled = true
    colorText.textContent = `This is color ${colorArray[count].name}`
    colorBox.style.backgroundColor = colorArray[count].code
    // colorArray[count].audioThis.play()
    playSample(samplesThis[count])
}

// FUNCTION TO DISPLAY COLOR ON THE ARTBOARD
function displayArtBoard() {
    setTimeout(() => {
        menuH3.textContent = `Now paint the box below with the color ${colorArray[count].name}. Touch with your finger`
        // colorArray[count].audioNow.play()
        playSample(samplesNow[count])
        menuArtBoard.classList.add("art-board")
        artBoardCols.forEach((artBoardCol) => {
            artBoardCol.addEventListener("touchstart", (e) => {
                e.preventDefault()
                artBoardCol.style.backgroundColor = colorArray[count].code
                hoveredBox++;
                // DISPLAY GOOD JOB WHEN HOVERED BOXES = 10
                if (hoveredBox === 10) {
                    goodJobAudio.play()
                    menuGoodJob.textContent = `Good Job! ~ Press 👈🏾 or 👉🏾 to see the other colors ~`
                    backBtn.disabled = false
                    nextBtn.disabled = false
                }
            })
        })
    }, 15000)
}