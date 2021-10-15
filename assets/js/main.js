// MENU TOGGLE SHOW / HIDE
const navToggle = document.getElementById('nav__toggle'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('close-menu-icon');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

// CHANGE HOME PAGE IMAGE 
let quant = document.getElementsByClassName('home__image');
let atual = 0;
let imagem = document.getElementById('default-img');
let imagePosition = document.getElementById('img__display')
let next = document.getElementById('img__change-right');
let previous = document.getElementById('img__change-left');
let changing = true

let homeTitle = document.getElementById('home-page-title');


previous.addEventListener('click', () => {
    atual--
    changeImage()
    changeText()
    changing = false
})

next.addEventListener('click', () =>{
    atual++
    changeImage()
    changeText()
    changing = false
})

function changeImage(){
    if(atual >= quant.length){
        atual = 0;
        
    }
    else if(atual < 0){
        atual = quant.length-1
    }
    imagem.style.marginLeft = -100*atual+'%' 
}

function changeText(){
    switch(atual){

        case 0 :
            homeTitle.innerHTML="<b>Discover</b> your adventure"
            imagePosition.innerHTML="01"
            break;
        case 1 :
            homeTitle.innerHTML="<b>Surf</b> your best wave"
            imagePosition.innerHTML="02"
            break;
        
        case 2 :
            homeTitle.innerHTML="<b>The</b> Skydiving´s rush"
            imagePosition.innerHTML="03"
            break;
    }
}

function changeButtonColor(){
    switch(atual){

        case 0 :
            previous.classList.remove('pink-color');
            previous.classList.add('green-color');
            break;
            
        case 1 : 
            previous.classList.add('yellow-color');
            break;

        case 2 :
            previous.classList.remove('yellow-color');
            previous.classList.remove('green-color');
            previous.classList.add('pink-color');
            break;
    }
}

setInterval(() =>{
    if(changing){
    atual++ 
    changeImage()
    changeText()
    changeButtonColor()
    sr.reveal()
    }
    else{
        changing = true
    }
}, 3000)


// SCROLL REVEAL ANIMATIONS
const sr = ScrollReveal({
    distance: '200px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.adventure__card`, {
    origin: 'bottom',
    interval: 100,
})

sr.reveal(`#home-page-title`,{
    origin: 'left',
    interval: 30,
})

// CHANGE PLACES SECTION COLORS
const playVideo = document.getElementById('play-button'),
      backgroundLayer = document.getElementById('palce-color-layer'),
      placeDate = document.getElementById('place__date'),
      readMore = document.getElementById('place-link');
      