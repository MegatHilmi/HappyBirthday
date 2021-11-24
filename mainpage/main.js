document.getElementById('themeSwithcer').href = "../mainpage/css/pink.css";
let secretButtonCounter = 0;


  
  // Clear listener after first call.
//   sound.once('load', function(){
//     sound.play();
//   });


function haha()
{
    secretButtonCounter++;

    //secret page popup
    secretcalculate()

    console.log(secretButtonCounter);
    var radioButtons = document.getElementsByName("colour");
    for (let index = 0; index < radioButtons.length; index++) {
        if(radioButtons[0].checked == true)
        {
            document.getElementById('themeSwithcer').href = "../mainpage/css/pink.css";
            console.log("satu");
        }
        else if(radioButtons[1].checked == true)
        {
            document.getElementById('themeSwithcer').href = "../mainpage/css/blue.css";
            console.log("Dua")
        }
        else if(radioButtons[2].checked == true)
        {
            document.getElementById('themeSwithcer').href = "../mainpage/css/orange.css";
            console.log("Tiga")
        }
        else{
            document.getElementById('themeSwithcer').href = "../mainpage/css/yellow.css";
            console.log("empat")
        }
    }
}

const track = document.getElementById('track');
const controlBtn = document.getElementById('play-pause');

var sound = new Howl({
    src: ['../mainpage/selamatulangtahun.mp3'],
    onplay: isPlaying
  });

sound.play();
controlBtn.className = "pause";

function isPlaying(){
    if (sound.playing()) {
        setTimeout(isPlaying, 500); //adjust timeout to fit your needs
    }
    else {
        controlBtn.className = "play";
    }
}



function audioButton(){
    secretButtonCounter++;

    //secret page popup
    secretcalculate()
    if(!sound.playing()){
        sound.play();
        controlBtn.className = "pause";
    }
    else{
        sound.pause();
        controlBtn.className = "play";
    }
}


let card1Status = false;
let card2Status = false;
let card3Status = false;
let card4Status = false;


//-----------------animation when user clicking card number1-----------------------
const card1 = function(){
    secretButtonCounter++;
    //secret page popup
    secretcalculate()


    console.log(card1Status)
    if(card1Status == true){
        anime({
            targets:'.card1-top',
            translateY:'5em',
            borderRadius: "50px",
            easing: "linear"
        });
        anime({
            targets:'.card1-bottom',
            translateY:'-5em',
            // borderRadius: "20px",
            // opacity: 1,
            easing: "linear",
            opacity: 0
        });
        card1Status = false;
    }
    else if(card1Status == false){
        console.log("tekan card2");
        anime({
            targets:'.card1-top',
            translateY: 0,
            borderRadius: "50px 50px 0 0",
            easing: "linear"
        });
        anime({
            targets:'.card1-bottom',
            translateY: 0,
            borderRadius: "0 0 50px 50px",
            opacity: 1,
            easing: "linear",
        });
        card1Status = true;
    }
}

//-----------------animation when user clicking card number2-----------------------
const card2 = function(){
    secretButtonCounter++;
    //secret page popup
    secretcalculate()

    console.log(card2Status)
    if(card2Status == true){
        anime({
            targets:'.card2-top',
            translateY:'5em',
            borderRadius: "50px",
            easing: "linear"
        });
        anime({
            targets:'.card2-bottom',
            translateY:'-5em',
            // borderRadius: "20px",
            // opacity: 1,
            easing: "linear",
            opacity: 0
        });
        card2Status = false;
    }
    else if(card2Status == false){
        card2Status = true;
        console.log("tekan card2");
        anime({
            targets:'.card2-top',
            translateY: 0,
            borderRadius: "50px 50px 0 0",
            easing: "linear"
        });
        anime({
            targets:'.card2-bottom',
            translateY: 0,
            borderRadius: "0 0 50px 50px",
            opacity: 1,
            easing: "linear",
            opacity: 1
        });
        
    }
}

//-----------------animation when user clicking card number3-----------------------
const card3 = function(){
    secretButtonCounter++;
    //secret page popup
    secretcalculate()

    console.log(card2Status)
    if(card3Status == true){
        anime({
            targets:'.card3-top',
            translateY:'5em',
            borderRadius: "50px",
            easing: "linear"
        });
        anime({
            targets:'.card3-bottom',
            translateY:'-5em',
            // borderRadius: "20px",
            // opacity: 1,
            easing: "linear",
            opacity: 0
        });
        card3Status = false;
    }
    else if(card3Status == false){
        card3Status = true;
        console.log("tekan card2");
        anime({
            targets:'.card3-top',
            translateY: 0,
            borderRadius: "50px 50px 0 0",
            easing: "linear"
        });
        anime({
            targets:'.card3-bottom',
            translateY: 0,
            borderRadius: "0 0 50px 50px",
            opacity: 1,
            easing: "linear",
            opacity: 1
        });
        
    }
}

//-----------------animation when user clicking card number3-----------------------
const card4 = function(){
    secretButtonCounter++;
    //secret page popup
    secretcalculate()

    console.log(card2Status)
    if(card4Status == true){
        anime({
            targets:'.card4-top',
            translateY:'5em',
            borderRadius: "50px",
            easing: "linear"
        });
        anime({
            targets:'.card4-bottom',
            translateY:'-5em',
            // borderRadius: "20px",
            // opacity: 1,
            easing: "linear",
            opacity: 0
        });
        card4Status = false;
    }
    else if(card4Status == false){
        card4Status = true;
        console.log("tekan card2");
        anime({
            targets:'.card4-top',
            translateY: 0,
            borderRadius: "50px 50px 0 0",
            easing: "linear"
        });
        anime({
            targets:'.card4-bottom',
            translateY: 0,
            borderRadius: "0 0 50px 50px",
            opacity: 1,
            easing: "linear",
            opacity: 1
        });
        
    }
}


//runaway button code start here
let hoverButtonCounter = 0;

const button = document.getElementById("runaway-button");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
    hoverButtonCounter++;
    console.log(hoverButtonCounter);
    secretPopOut();
  return Math.floor(Math.random() * (num + 1));
};

//secret page popup
let secretBackground = document.querySelector(".secret-background");
let runAwayButton = document.querySelector("#runaway-button");
let backButton = document.querySelector("#back-button");


function secretcalculate(){
    if(secretButtonCounter  % 8 == 0){
        secret();
    }
}

function secret(){
    console.log("already20");
    secretBackground.style.visibility = "visible";
    runAwayButton.style.visibility = "visible";
    backButton.style.visibility = "visible";
}

function closeSecret(){
    secretBackground.style.visibility = "hidden";
    runAwayButton.style.visibility = "hidden";
    backButton.style.visibility = "hidden";
}

function secretPopOut(){
    if (hoverButtonCounter % 15 == 0){
        passwordPopUp();
    }
}

let popupBackground = document.querySelector(".password-background");
let popupInput = document.querySelector(".popup-input");
let passwordBackButton = document.querySelector("#password-back-button");

function passwordPopUp(){
    popupBackground.style.visibility = "visible";
    popupInput.style.visibility = "visible";
    passwordBackButton.style.visibility = "visible";
}

function closePopup(){
    popupBackground.style.visibility = "hidden";
    popupInput.style.visibility = "hidden";
    passwordBackButton.style.visibility = "hidden";
}

let confessPage = document.querySelector(".confess-page");
let wrongNameText = document.querySelector(".wrong-name");
let confessBackButton = document.querySelector("#confess-back-button");
let wrongcounter = 0;


function checkName(){
    wrongNameText.style.visibility = "hidden";
    console.log("dah tekan");
    let inputValue = document.querySelector("#full-name").value;
    if (inputValue.toLowerCase() === "megat muhammad hilmi bin megat azhar")
    {
        confessPage.style.visibility = "visible";
        confessBackButton.style.visibility = "visible";
        let bot = {
            TOKEN: "2138515180:AAFmr2tPQ-vRtzU6Fw-J27_-Ah01jNXVKDk",
            chatID: "397362062",
          }
          
          let newmessage = "Someone open the secret wish"; 
          
          fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${newmessage}`, {
              method: "GET"
            })
            .then(success =>{
              console.log("Message send successfully!")
            }, error => {
              console.log(error);
            })
    }
    else{
        wrongcounter++;
        document.querySelector(".popup-input").reset();
        wrongNameText.style.visibility = "visible";
    }

    if(wrongcounter % 3 == 0)
    {
        console.log("ayooo wrong name ahh");
    }
}

function closeConfess(){
    confessPage.style.visibility = "hidden";
    confessBackButton.style.visibility = "hidden";
    document.querySelector(".popup-input").reset();
}

//-----------------to detect whether she visit the web or not-----------

let bot = {
    TOKEN: "2138515180:AAFmr2tPQ-vRtzU6Fw-J27_-Ah01jNXVKDk",
    chatID: "397362062",
  }
  
  let newmessage = "Someone visiting the web"; 
  
  fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${newmessage}`, {
      method: "GET"
    })
    .then(success =>{
      console.log("Message send successfully!")
    }, error => {
      console.log(error);
    })
