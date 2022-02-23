// click on screen code

let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // console.log(this.style.color = "white");
        //console.log(document.querySelectorAll(".drum")[i].style.color = "white");

        // let buttonInnerHTML = this.innerHTML;
        // switch (buttonInnerHTML) {
        //     case "w":
        //         let tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //         break;
        //     case "a":
        //         let tom2 = new Audio('sounds/tom-2.mp3');
        //         tom2.play();
        //         break;
        //     case "s":
        //         let tom3 = new Audio('sounds/tom-3.mp3');
        //         tom3.play();
        //         break
        //     case "d":
        //         let tom4 = new Audio('sounds/tom-4.mp3');
        //         tom4.play();
        //         break
        //     case "j":
        //         let crash = new Audio('sounds/crash.mp3');
        //         crash.play();
        //         break
        //     case "k":
        //         let kick = new Audio('sounds/crash.mp3');
        //         kick.play();
        //         break
        //     case "l":
        //         let snare = new Audio('sounds/snare.mp3');
        //         snare.play();
        //         break
        //     default:
        //         console.log(buttonInnerHTML);


        // }

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);



    });

    // keyboard press code

    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });

}


function makeSound(key) {


    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break
        case "j":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break
        case "k":
            let kick = new Audio('sounds/crash.mp3');
            kick.play();
            break
        case "l":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break
        default:
            console.log(key);
    }
}



//Animation code

function buttonAnimation(currentkey) {
    let active = document.querySelector("." + currentkey);
    active.classList.add("pressed") // active.classList.toggle("pressed") 

    // we want that button back so in order to make that button come back we'll use setTimeout(function, time)

    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100)


}