import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker()

const container = document.querySelector('.container')

const autoClickerBtn = document.querySelector('.Auto-Clicker')
const donutMultiplierBtn = document.querySelector('.Donut-Multiplier')


function updateView(){
  autoClickerBtn.disabled = !donutMaker.AutoBuy;
  donutMultiplierBtn.disabled = !donutMaker.MultiBuy;
  donutCount.innerText = "Donut count: " + donutMaker.DonutCount.toFixed(1);
  AutoclickerCount.innerText = "Auto Count:" + donutMaker.AutoclickCount.toFixed(1);
  donutMultiplierCount.innerText = " Multiplier count " + donutMaker.MultiplierCount.toFixed(1);
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
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none"; 
}


window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }
// window.onclick = function(event) {
//   if (event.target == modal3) {
//     modal3.style.display = "none";
//   }
// }


  





