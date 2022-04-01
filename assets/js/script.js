var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// let count = timeNow;
var time = new Date();
// let timeInHour = time.toLocaleString('en-US', { hour: 'numeric', hour12: true })

let timeInHour = time.getHours()

let textArea = document.querySelector('.description')


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


console.log(timeInHour)
console.log(typeof eightSectionTime)
console.log(typeof fiveSectionTime)

console.log(eightSectionTime > timeInHour)




const compareHardCodedTime = (time, textId) =>{
    if(time == timeInHour){
        textId.classList.add('present')
    } else if(time < timeInHour){
        textId.classList.add('past')
    } else {
        textId.classList.add('future')
    }

}

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