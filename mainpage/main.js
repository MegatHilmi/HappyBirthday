document.getElementById('themeSwithcer').href = "../mainpage/css/pink.css";
function haha()
{
    console.log("it's ticking");
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

function playPause(){
    console.log("tekan");
    if(track.paused){
        track.play();
        controlBtn.className = "pause";
    } else{
        track.pause();
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function(){
    controlBtn.className = "play";
});

let card1Status = false;
let card2Status = false;
let card3Status = false;
let card4Status = false;


//-----------------animation when user clicking card number1-----------------------
const card1 = function(){
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





