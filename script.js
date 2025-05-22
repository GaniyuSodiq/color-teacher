// the colors and their respective details in an array of objects
let colorArray = [
    {
        name: "RED",
        code: "RED",
        audio: null,
    },
    {
        name: "GREEN",
        code: "GREEN",
        audio: null,
    },
    {
        name: "YELLOW",
        code: "YELLOW",
        audio: null,
    },
    {
        name: "BLUE",
        code: "BLUE",
        audio: null,
    },
]

let primaryArray = [
    {
        name: "RED",
        code: "RED",
        audio: null,
    },
    {
        name: "GREEN",
        code: "GREEN",
        audio: null,
    },
    {
        name: "YELLOW",
        code: "YELLOW",
        audio: null,
    },
    {
        name: "BLUE",
        code: "BLUE",
        audio: null,
    },
]

// CREATED THE SECONDARY COLORS
let secondaryArray = [
    {
        name: "PURPLE",
        code: "PURPLE",
        audio: null,
    },
    {
        name: "ORANGE",
        code: "ORANGE",
        audio: null,
    },
    {
        name: "VIOLET",
        code: "VIOLET",
        audio: null,
    },
    {
        name: "GOLD",
        code: "GOLD",
        audio: null,
    },
]
let count = 0;
let hoveredBox = 0;

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

// PICK THE BUTTONS ON COLOR TYPES
const primaryColor = document.querySelector("#primary-color")
const secondaryColor = document.querySelector("#secondary-color")

// EMPTY THE CURRENT COLOR THEN FILL WITH THE SELECT COLORS OPON CLICK
secondaryColor.addEventListener("change", () => {
    colorArray = [];
    colorArray = secondaryArray;
    count = 0;
    clearArtBoard()
    displayColor()
    displayArtBoard()
})

primaryColor.addEventListener("change", () => {
    colorArray = [];
    colorArray = primaryArray;
    count = 0;
    clearArtBoard()
    displayColor()
    displayArtBoard()
})

// FUNCTION TO DISPLAY COLOR ON THE HEADER
function displayColor() {
    colorText.textContent = `This is color ${colorArray[count].name}`
    // headerContainer.appendChild(colorText)
    colorBox.style.backgroundColor = colorArray[count].code
    // headerContainer.appendChild(colorBox)
}

// FUNCTION TO DISPLAY COLOR ON THE ARTBOARD
function displayArtBoard() {
    setTimeout(() => {
        menuH3.textContent = `Now paint the box below with the color ${colorArray[count].name}`
        menuArtBoard.classList.add("art-board")
        artBoardCols.forEach((artBoardCol) => {
            artBoardCol.addEventListener("pointerover", () => {
                artBoardCol.style.backgroundColor = colorArray[count].code
                hoveredBox++;
                // DISPLAY GOOD JOB WHEN HOVERED BOXES = 40
                if (hoveredBox === 40) {
                    menuGoodJob.textContent = "👍🏽GOOD JOB👍🏽"
                    // nextColor()
                }
            })
        })
    }, 5000)
}

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

// FUNCTION TO ADD OR REMOVE MAIN COVER after 5 seconds
// function mainCoverToggle() {
//     setTimeout(()=>{
//         mainSection.classList.toggle(".highZindex") // didnt work bcs o the . dot b4 highZindex
//     }, 5000)
// }

// JUST NEXT AUTOMATICALLY

function nextColor() {
    count++
    if (count >= colorArray.length) {
        menuH3.textContent = "THIS IS THE END. PRESS BACK TO TRY AGAIN"
        count--;
    } else {
        clearArtBoard()
        displayColor()
        displayArtBoard()
    }
}

// CHANGE THE COLOR WITH BUTTONS BY CLEARING THE BOARD AND RERUN THE DISPLAYS 
nextBtn.addEventListener("click", () => {
    count++
    if (count >= colorArray.length) {
        menuH3.textContent = "THIS IS THE END. PRESS BACK TO TRY AGAIN"
        count--;
    } else {
        clearArtBoard()
        displayColor()
        displayArtBoard()
    }
})

backBtn.addEventListener("click", () => {
    count--
    if (count < 0) {
        menuH3.textContent = "THIS IS THE END. PRESS NEXT TO TRY AGAIN"
        count++;
    } else {
        clearArtBoard()
        displayColor()
        displayArtBoard()
    }
})

displayColor()
displayArtBoard()
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
