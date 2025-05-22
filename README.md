WHAT IS COLOR TEACHER ABOUT?
- Teaches users to recognize different colors and test their knowledge afterwards
- - it first teaches by displaying a color 
- - mention the color's name (This is color red)
- - Wait for 3 seconds
- - Ask user to paint the box below (Paint the box below with color red)
- - Then displays (Good job 👍) if user paints the box completely
- - repeats for all colors in the array
- Test picks color from the array randomly
- - Displays a color and Asks (What color is this)
- - Wait for 3 seconds then says (It is color red)
- - Now paint the box below with color red
- - Then displays (Good job 👍) if user paints the box completely
- - picks another color randomly from the array

MORE FEATURES I GOT ALONG THE LINE
- Improve the interface to a better one
- Add both primary and seconday color 
- Teach, Test and grade(score) based on perfomance in the test. Recommend to retake test or lesson
- - test can be: Ask 'What color is this (Showing a red box)? 
- - give 2 button options saying red | blue 


I THINK THE MAIN WORK IN THIS TEST AND OPTIONS SECTION IS 
HOW TO BRING THE RIGHT AND WRONG OPTIONS TO EXISTENCE - Lets do it!
if array[0] is the color
oneA option is given array[0]
oneB option is givent array[a number picked at random between 0 and arraylenght, if it is array[0] then repick another number till ect]

oneA option is given to one of the two buttons at random

- - lets convert the ideas above to code and see how it goes --- Lets go!

- ON A GRANULAR LEVEL

make 2 variables 

const a
const b

make randomcalc that spits a or b
which ever it spits gets to have the arrayColor
    if randomcalc === a{
        const a = arrayColor
        const b = "WRONG"
    } else {
        const a = "WRONG"
        const b = arrayColor        
    }

btnOption1.Onclick({
    if option a === arrayColor {
        your are cprrect. t is color arayColor.name
        now paint the box below
        good job
        press right finger for the next question
    } else if option a === "WRONG" {
        No! The color is red.
        play the color song (ie teach the color briefly)
        Try again - rerun the random color selection
    }
})

btnOption2.Onclick({
    if option b === arrayColor {
        your are cprrect. t is color arayColor.name
        now paint the box below
        good job
        press right finger for the next question
    } else if option b === "WRONG" {
        No! The color is red.
        play the color song (ie teach the color briefly)
        Try again - rerun the random color selection
    }
})

I NEED A RANDOM WRONG ANSWER TOO FOR THE "WRONG" VARIABLE
because i want the app to say out the options 
- - Ask 'What color is this (Showing a red box)? 
- - give 2 button options saying red OR blue 

this is what came to my head right now:

<!-- wrongIndex = arrayColor.filter(color => {color.index !== arrayColor[count].index}) -->
wrongIndex = []
arrayColor.forEach((color) => {
    if (color.index !== arrayColor[count].index){
        wrongIndex.push(color.index)
    }
}) 
pick a randomnumber in this wrongIndex to assign "WRONG"
WRONG = arrayColor[Math.Floor(Math.Random()*wrongIndex.length)]


HMMM THE ABOVE STEPS FEEL CRAZY LOL. BUT I WILL EXECUTE THEM... OTHER IDEAS CAN COME LATER - I KNW THEY WILL 😇
SOME OTHER IDEAS ARE COMING TO MY MIND RIGHT NOW ABOUT HOW TO SOLVE THIS TEST SECTION
---

HOW I PLAN THE OPTION BUTTONS TO WORK
if wrong option clicked
No! The color is red.
Try again - rerun the random color selection


if right option is clicked
Yes! The color is red.
Now paint the box below with red
- display the artboard 

// TESTED THE TEST ALGORITHM ABOVE AND IT WORKS! - GRETA JOB!


NEXT FEATURE NOW IS AUDIO - I NEED TO ADD AUDION TO MOST PARTS IN EACH FUNCTION
kids find audio easier than reading and they love song audios