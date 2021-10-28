

//-----all the declaration for quote text-----//
//for box one
let boxOne = 0; //to get index from the textOne array
let counterOne = 0; //to determine when need the text change
let textOne = ["Surprise arriving, Stay Tune", 
                "Hello September", 
                "Take a deep breath, Inhale peace, Exhale happiness", 
                "Keep calm, sit back and SMILE", 
                "Sometimes the most productive thing you can do is relax", 
                "Today Cheklist: <br>-Do nothing & chill <br>-Do nothing & chill <br>-Do nothing & chill"];


//for box two
let boxTwo = 0;
let counterTwo = 0;
let textTwo = ["P.U.R.P.L.E", 
                "Do you know that purple is the colour associated with imagination, spirituality, and harmony", 
                "Purple also associated with Nobility, wealth, & Mystery",
                "Purple encourages Creativity, inspires Originality and represents the future",
                "Do you know, carrot used to be purple, now most are orange!",
                "Purple day is celebrated on March 26",
                "There ARE words that rhyme with \'purple\' <br>-curple <br>-hirple <br>-turple <br>-nurple",
                "Do you know, purple is the hardest color for the eye to distinguish",
                "In the garden, the perfect complementary color to purple is yellow"];

//for box three
let boxThree = 0;
let counterThree = 0;
let textThree = ["What do you call a fish wearing a bowtie? <br>\"sofishticated\"",
                "What did the ocean say to the beach? <br>\"nothing, it just waved\"",
                "Dear math, grow p and solve your own problems",
                "What did the janitor say when he jump out of the closet? <br>\"Supplies!\"",
                "How does the moon cut his hair? <br>\"Eclipse it\"",
                "I only know 25 letters of the alphabet. I don't know y",
                "Where do fruits go on vacation? <br>\"Pear-is\"",
                "I asked my dog what's 2 minus by 2. <br>He said nothing",
                "I don't trust stairs. They're always up yo something",
                "why could'nt the bicycle stand up by it self? <br>\"It was too tired\"",
                "Why did Billy get fired from banana factory? He kept throwing away the bent ones"];





//Setup Timer to tick every 1 second
const timer = setInterval(tick, 1000);

//get the current time and date to subtract with the birthday date and time
const birthdayDate = new Date("October 28, 2021 12:33:00").getTime();

function tick(){
    console.log("Tick is function");
    console.log(birthdayDate);
    //get the current date and time
    let now = new Date().getTime();

    //get the difference between birthday date and current date
    let t = birthdayDate - now;

    if(t > 0){
        //to get the day
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10) { 
            days = "0" + days; 
        }
        
        // Algorithm to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { 
            hours = "0" + hours; 
        }
    
        // Algorithm to calculate minutes
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { 
            mins = "0" + mins; 
        }
    
        // Algorithm to calc seconds
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { 
            secs = "0" + secs; 
        }

        // Create Time String
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        // Set time on document
        document.querySelector('.countdown').innerText = time;


        //for box one 
        let elementOne = document.querySelector("#onecont");

        let styles_appliedOne = window.getComputedStyle(elementOne);
        let opacityOne =  styles_appliedOne.opacity;

        // console.log(opacityOne);
        document.getElementById("one").innerHTML = textOne[boxOne];
    
        if(opacityOne == 0)
        {
            counterOne++;
            if(counterOne % 11 == 0)
            {
                boxOne++;
            
            }
            else if(counterOne == 12)
            {
                counterOne == 0;
            }

            if(boxOne == textOne.length)
            {
                boxOne = 0;
            }
        
        }
        //for box two 
        let elementTwo = document.querySelector("#twocont");

        let styles_appliedTwo = window.getComputedStyle(elementTwo);
        let opacityTwo =  styles_appliedTwo.opacity;

        // console.log(opacityOne);
        document.getElementById("two").innerHTML = textTwo[boxTwo];
    
        if(opacityTwo == 0)
        {
            counterTwo++;
            if(counterTwo % 11 == 0)
            {
                boxTwo++;
            
            }
            else if(counterTwo == 12)
            {
                counterTwo == 0;
            }

            if(boxTwo == textTwo.length)
            {
                boxTwo = 0;
            }
        }
        //for box three 
        let elementThree = document.querySelector("#threecont");

        let styles_appliedThree = window.getComputedStyle(elementThree);
        let opacityThree =  styles_appliedThree.opacity;

        // console.log(opacityOne);
        document.getElementById("three").innerHTML = textThree[boxThree];
    
        if(opacityThree == 0)
        {
            counterThree++;
            if(counterThree % 11 == 0)
            {
                boxThree++;
            
            }
            else if(counterThree == 12)
            {
                counterThree == 0;
            }

            if(boxThree == textThree.length)
            {
                boxThree = 0;
            }
        }
    }
    else{
        pageRedirect();
    }
} 

function pageRedirect(){
    // window.location.replace("https://www.google.com/");
    // window.location.replace("https://github.com/MegatHilmi/Happy-Birthday/mainpage");
}