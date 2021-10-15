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
    changing = false
})

next.addEventListener('click', () =>{
    atual++
    changeImage()
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
    console.log(atual)
}

function changeText(){
    switch(atual){

        case 0 :
            homeTitle.innerHTML="<b>Discover</b> your adventure"
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

setInterval(() =>{
    if(changing){
    atual++ 
    changeImage()
    changeText()
    }
    else{
        changing = true
    }
}, 4000)

