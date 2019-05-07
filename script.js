window.addEventListener("load", sidenVises);

// Video
var video = document.getElementById("video");


// Buttons
var playButton = document.getElementById("play-pause");
var muteButton = document.getElementById("mute");
var fullScreenButton = document.getElementById("full-screen");

// Sliders
var seekBar = document.getElementById("seek-bar");
var volumeBar = document.getElementById("volume-bar");



function sidenVises() {
    console.log("sidenVises");

    //    document.querySelector("#burgerknap").addEventListener("click", toggleMenu);


    //Alle fuctionerne ligger her i fuktionen sideVises, for at man ikke man trykke på noget før siden er loaded. Man kunne også have sat alle de underliggende functioner ind i sidenVises, men det behøver de ikke, de kan sagtens kalde ud. Var (variablerne) ligger uden for/ovenover functionen sidenVises da det er noget der skal kunne læses hele tiden.

    // Event listener for the play/pause button
    playButton.addEventListener("click", myPlay);

    // Event listener for the mute button
    muteButton.addEventListener("click", mute);

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", fullScreen);

    // Event listener for the seek bar
    seekBar.addEventListener("change", mySeek);

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", seekMove);

    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", mousePause);

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", dropPlay);

    // Event listener for the volume bar
    volumeBar.addEventListener("change", volume);

}


//function toggleMenu() {
//    console.log("toggleMenu");
//    document.querySelector("#burgermenu").classList.toggle("hidden");
//
//    let erSkjult = document.querySelector("#burgermenu").classList.contains("hidden");
//
//    if (erSkjult == true) {
//        document.querySelector("#burgerknap").textContent = "☰";
//    } else {
//        document.querySelector("#burgerknap").textContent = "X";
//    }
//
//}




function myPlay() {
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
    } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
    }
}



function mute() {
    if (video.muted == false) {
        // Mute the video
        video.muted = true;

        // Update the button text
        muteButton.innerHTML = "Unmute";
    } else {
        // Unmute the video
        video.muted = false;

        // Update the button text
        muteButton.innerHTML = "Mute";
    }
}




function fullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
    }
}



function mySeek() {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
}




function seekMove() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;
}


function mousePause() {
    video.pause();
}



function dropPlay() {
    video.play();
}



function volume() {
    // Update the video volume
    video.volume = volumeBar.value;
}
