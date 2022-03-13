import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker()

const container = document.querySelector('.container')

const autoClickerBtn = document.querySelector('.Auto-Clicker')
const donutMultiplierBtn = document.querySelector('.Donut-Multiplier')


function updateView(){
  autoClickerBtn.disabled = !donutMaker.AutoBuy;
  donutMultiplierBtn.disabled = !donutMaker.MultiBuy;
  donutCount.innerText = "You'r donut count: " + donutMaker.DonutCount.toFixed(1);
  AutoclickerCount.innerText = "Auto Count:" + donutMaker.AutoclickCount.toFixed(1);
  donutMultiplierCount.innerText = " Multi Pass " + donutMaker.MultiplierCount.toFixed(1);
}

const donutCount = document.querySelector('.DonutCount')
const makeDonutsBtn = document.querySelector('.Make-Donuts')
makeDonutsBtn.addEventListener("click", () =>{
  donutMaker.click()
  updateView()
})


const AutoclickerCount = document.querySelector('.AutoclickerCount')

autoClickerBtn.addEventListener("click",()=>{
  donutMaker.BuyAutoClick();
  setInterval(clickBait, 1000);
  setInterval(updateView, 1000);
  updateView()
})

function clickBait() {
  donutMaker.click()
}

const donutMultiplierCount = document.querySelector('.DonutMultiplierCount')
donutMultiplierBtn.addEventListener("click", () => {
donutMaker.BuyMultiClick();

})


updateView();

let reseterButtoner = document.querySelector('.Reseter-Buttoner')
reseterButtoner.addEventListener("click", () => {
donutMaker.reloadPage();
})
// Get the modal
var modal = document.getElementById("myModal1");
// var modal = document.getElementById("myModal2");
// var modal = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");
// var btn = document.getElementById("myBtn2");
// var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  





