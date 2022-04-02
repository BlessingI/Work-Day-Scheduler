var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


//sorting out time
var time = new Date();

//pick out elements
let timeInHour = time.getHours()
let textArea = document.querySelector('.description')

let firstButton = document.querySelector('.button1')
let secondButton = document.querySelector('.button2')
let threeButton = document.querySelector('.button3')
let fourthButton = document.querySelector('.button4')
let fifthButton = document.querySelector('.button5')
let sixthButton = document.querySelector('.button6')
let seventhButton = document.querySelector('.button7')
let eightButton = document.querySelector('.button8')
let ninthButton = document.querySelector('.button9')
let tenthButton = document.querySelector('.button10')

let eightSectionTime = parseInt(document.querySelector('#firstRow').innerText.trim())
let nineSectionTime = parseInt(document.querySelector('#secondRow').innerText.trim())
let fourSectionTime = parseInt(document.querySelector('#fourRow').innerText.trim())
let tenSectionTime = parseInt(document.querySelector('#tenRow').innerText.trim())
let elevenSectionTime = parseInt(document.querySelector('#elevenRow').innerText.trim())
let twelveSectionTime = parseInt(document.querySelector('#twelveRow').innerText.trim())
let oneSectionTime = parseInt(document.querySelector('#oneRow').innerText.trim())
let twoSectionTime = parseInt(document.querySelector('#twoRow').innerText.trim())
let threeSectionTime = parseInt(document.querySelector('#threeRow').innerText.trim())
let fiveSectionTime = parseInt(document.querySelector('#fiveRow').innerText.trim())

let firstRowText = document.querySelector('#firstRowText');
let secondRowText = document.querySelector('#secondRowText');
let fourRowText = document.querySelector('#fourthRowText');
let tenRowText = document.querySelector('#tenRowText')
let elevenRowText = document.querySelector('#elevenRowText')
let twelveRowText = document.querySelector('#twelveRowText')
let oneRowText = document.querySelector('#oneRowText')
let twoRowText = document.querySelector('#twoRowText')
let threeRowText = document.querySelector('#threeRowText')
let fiveRowText = document.querySelector('#fiveRowText')


//funtion to change background color
const compareHardCodedTime = (time, textId) =>{
    if(time == timeInHour){
        textId.classList.add('present')
    } else if(time < timeInHour){
        textId.classList.add('past')
    } else {
        textId.classList.add('future')
    }

}

//making use of the color
compareHardCodedTime(eightSectionTime, firstRowText)
compareHardCodedTime(nineSectionTime, secondRowText)
compareHardCodedTime(fourSectionTime, fourRowText)
compareHardCodedTime(tenSectionTime, tenRowText)
compareHardCodedTime(elevenSectionTime, elevenRowText)
compareHardCodedTime(twelveSectionTime, twelveRowText)
compareHardCodedTime(oneSectionTime, oneRowText)
compareHardCodedTime(twoSectionTime, twoRowText)
compareHardCodedTime(threeSectionTime, threeRowText)
compareHardCodedTime(fiveSectionTime, fiveRowText)


//save to local storage
const contentWritten = () => {
    let typedText = firstRowText.value.trim()
    localStorage.setItem("textSaved", JSON.stringify(typedText)); 
}

const contentWritten2 = () => {
    let typedText2 = secondRowText.value.trim()
    localStorage.setItem("textSaved2", JSON.stringify(typedText2)); 
}

const contentWritten3 = () => {
    let typedText3 = tenRowText.value.trim()
    localStorage.setItem("textSaved3", JSON.stringify(typedText3)); 
}

const contentWritten4 = () => {
    let typedText4 = elevenRowText.value.trim()
    localStorage.setItem("textSaved4", JSON.stringify(typedText4)); 
}

const contentWritten5 = () => {
    let typedText5 = twelveRowText.value.trim()
    localStorage.setItem("textSaved5", JSON.stringify(typedText5)); 
}

const contentWritten6 = () => {
    let typedText6 = oneRowText.value.trim()
    localStorage.setItem("textSaved6", JSON.stringify(typedText6)); 
}

const contentWritten7 = () => {
    let typedText7 = twoRowText.value.trim()
    localStorage.setItem("textSaved7", JSON.stringify(typedText7)); 
}

const contentWritten8 = () => {
    let typedText8 = threeRowText.value.trim()
    localStorage.setItem("textSaved8", JSON.stringify(typedText8)); 
}

const contentWritten9 = () => {
    let typedText9 = fourRowText.value.trim()
    localStorage.setItem("textSaved9", JSON.stringify(typedText9)); 
}

const contentWritten10 = () => {
    let typedText10 = fiveRowText.value.trim()
    localStorage.setItem("textSaved10", JSON.stringify(typedText10)); 
}


//saving to local storage
firstRowText.textContent = JSON.parse(localStorage.getItem("textSaved"));
secondRowText.textContent = JSON.parse(localStorage.getItem("textSaved2"));
tenRowText.textContent = JSON.parse(localStorage.getItem("textSaved3"));
elevenRowText.textContent = JSON.parse(localStorage.getItem("textSaved4"));
twelveRowText.textContent = JSON.parse(localStorage.getItem("textSaved5"));
oneRowText.textContent = JSON.parse(localStorage.getItem("textSaved6"));
twoRowText.textContent = JSON.parse(localStorage.getItem("textSaved7"));
threeRowText.textContent = JSON.parse(localStorage.getItem("textSaved8"));
fourRowText.textContent = JSON.parse(localStorage.getItem("textSaved9"));
fiveRowText.textContent = JSON.parse(localStorage.getItem("textSaved10"));


//event listener
firstButton.addEventListener('click', contentWritten)
secondButton.addEventListener('click', contentWritten2)
threeButton.addEventListener('click', contentWritten3)
fourthButton.addEventListener('click', contentWritten4)
fifthButton.addEventListener('click', contentWritten5)
sixthButton.addEventListener('click', contentWritten6)
seventhButton.addEventListener('click', contentWritten7)
eightButton.addEventListener('click', contentWritten8)
ninthButton.addEventListener('click', contentWritten9)
tenthButton.addEventListener('click', contentWritten10)







