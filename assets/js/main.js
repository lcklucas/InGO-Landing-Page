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
const quant = document.getElementsByClassName('home__image'),
      atual = 0,
      imagem = document.getElementById('default-img'),
      imagePosition = document.getElementById('img__display'),
      next = document.getElementById('img__change-right'),
      previous = document.getElementById('img__change-left'),
      homeTitle = document.getElementById('home-page-title');

let changing = true; // Impedir que o contador troque uma imagem que acabou de ser trocada pelo botão

previous.addEventListener('click', () => {
    atual--;
    changeImage();
    changeText();
    changing = false; // Reseta o contador;
});

next.addEventListener('click', () =>{
    atual++;
    changeImage();
    changeText();
    changing = false; // Reseta o contador
});

function changeImage(){
    if(atual >= quant.length){
        atual = 0;
        
    }
    else if(atual < 0){
        atual = quant.length-1;
    }
    imagem.style.marginLeft = -100*atual+'%';
};

function changeText(){
    switch(atual){

        case 0 :
            homeTitle.innerHTML="<b>Discover</b> your adventure";
            imagePosition.innerHTML="01";
            break;
        case 1 :
            homeTitle.innerHTML="<b>Surf</b> your best wave";
            imagePosition.innerHTML="02";
            break;
        
        case 2 :
            homeTitle.innerHTML="<b>The</b> Skydiving´s rush";
            imagePosition.innerHTML="03";
            break;
    }
};

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
};

setInterval(() =>{
    if(changing){
    atual++;
    changeImage();
    changeText();
    changeButtonColor();
    sr.reveal();
    }
    else{
        changing = true;
    }
}, 3000);


// SCROLL REVEAL ANIMATIONS
const sr = ScrollReveal({
    distance: '200px',
    duration: 2800,
    reset: true,
});

sr.reveal(`.adventure__card, .find-talents__section-background-layer`, {
    origin: 'bottom',
    interval: 100,
});

sr.reveal(`#home-page-title, .section__title`,{
    origin: 'left',
    interval: 30,
});

// CHANGE PLACES SECTION THEME COLORS
let tema = 0;
const playVideo = document.getElementById('play-button'),
      backgroundLayer = document.getElementById('place-color-layer'),
      placeDate = document.getElementById('place__date'),
      readMore = document.getElementById('place-link'),
      previousPlace = document.getElementById('place-changer-left'),
      nextPlace = document.getElementById('place-changer-right'),
      arrowLeft = document.getElementById('button-left'),
      arrowRight = document.getElementById('button-right'),
      placeImage = document.getElementById('place-img'),
      placeLocation = document.getElementById('place__location');

previousPlace.addEventListener('click', ()=>{
    tema--;
    changeTheme();
    console.log(tema);
})


nextPlace.addEventListener('click', ()=>{
    tema++;
    changeTheme()
    console.log(tema);
})


function changeTheme(){
    if(tema < 0){
        tema = 2;
    } else if(tema >=3){
        tema = 0;
    }

    switch(tema){

        case 0:
            backgroundLayer.classList.remove('green-color');
            playVideo.classList.remove('green-color');
            placeDate.classList.remove('green-color');
            readMore.classList.remove('green-color');
            arrowLeft.classList.remove('green-color');
            arrowRight.classList.remove('green-color');

            backgroundLayer.classList.remove('yellow-color');
            playVideo.classList.remove('yellow-color');
            placeDate.classList.remove('yellow-color');
            readMore.classList.remove('yellow-color');
            arrowLeft.classList.remove('yellow-color');
            arrowRight.classList.remove('yellow-color');
            placeImage.src="/assets/img/new-place-1.jpg";
            placeLocation.innerHTML="Alaska"
            break;
        
        case 1: 
            backgroundLayer.classList.add('green-color');
            playVideo.classList.add('green-color');
            placeDate.classList.add('green-color');
            readMore.classList.add('green-color');
            arrowLeft.classList.add('green-color');
            arrowRight.classList.add('green-color');
            placeImage.src="assets/img/new-place-3.jpg";
            placeLocation.innerHTML="Norway";
            break;
        
        case 2:
            backgroundLayer.classList.add('yellow-color');
            playVideo.classList.add('yellow-color');
            placeDate.classList.add('yellow-color');
            readMore.classList.add('yellow-color');
            arrowLeft.classList.add('yellow-color');
            arrowRight.classList.add('yellow-color');
            placeImage.src="/assets/img/new-place-2.jpg";
            placeLocation.innerHTML="Iceland";
            break;
    }   
}




