let profile = document.querySelector("#profile");
let tital = document.querySelector("#tital");
let description = document.querySelector("#description");
let btnYes = document.querySelector("#btn-yes");
let btnNo = document.querySelector("#btn-no");
let happyCatAudio = new Audio("happy.mp3");
let CryCartAudio = new Audio("crying.mp3");
profile.src="https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=600"
profile.style.marginTop="70px";

tital.innerHTML = "Meow Confession"
description.innerHTML = "Do you Love ME? 🗡️";
btnYes.innerHTML = "Yes";
btnNo.innerHTML = "No";
btnYes.addEventListener("click",() => {
    profile.src = "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif"
    tital.innerHTML = "Yayyyyyy! I Love you too.";
    description.innerHTML = "I'm So Happy ❤";

    // add audio
    happyCatAudio.play();
    happyCatAudio.loop = true;

});

// btn scall
let yesScale = 1;
let noScale = 1;

btnNo.addEventListener("click",() => {
    profile.src = "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif"
    tital.innerHTML = "Ohh Noooo😥💔";
    description.innerHTML = "Whyy o ot sl b 😭";
    // btn yes and no sclae
    yesScale += 0.2;
    btnYes.style.transform = `scale(${yesScale})`;
    // no scale
    noScale -= 0.2;
    btnNo.style.transform = `scale(${noScale})`;
    profile.src = "https://media.tenor.com/BX94RpYwz2gAAAAM/banana-cat-crying.gif"
    
    // add audio
    // happyCatAudio.play();
    // happyCatAudio.loop = true;
    CryCartAudio.play();
    // CryCartAudio.loop = true;
});

