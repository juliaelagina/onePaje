/** Изменение фона первой страницы*/
function changebg() {
    let buttom1 = document.querySelector('.firstScreen__button1');
    let buttom2 = document.querySelector('.firstScreen__button2');
    let firstScreen = document.querySelector('.firstScreen');
    firstScreen.style.backgroundImage = "url(img/1920x1080/01.jpg)";
    firstScreen.style.transition = "all ease 1s";
    buttom1.style.background = 'white';
    buttom2.style.background = 'none';
}

function changebg2() {
    let buttom11 = document.querySelector('.firstScreen__button1');
    let buttom22 = document.querySelector('.firstScreen__button2');
    let firstScreen2 = document.querySelector('.firstScreen');
    firstScreen2.style.backgroundImage = "url(img/1920x1080/02.jpg)";
    firstScreen2.style.transition = "all ease 1s";
    buttom22.style.background = 'white';
    buttom11.style.background = 'none';
}


function changingBC2times() {
  function changeFirst(){
    setTimeout(function(){
      setTimeout (changebg2(),5000)
    }, 5000);
  } 
  function changeSecond(){
    setTimeout(function(){
      setTimeout (changebg(),10000)
    }, 10000);
  } 
  changeFirst();
  changeSecond()
}

/** Измененеие хедера при прокрутке*/


let appended = false; 
let arrow = document.querySelector("header");
   window.onscroll = function() {
    let link = document.querySelectorAll('.linkchangeColor');
    let logo = document.querySelector('.header__logo');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 1 ) {
     if (!appended) {
        arrow.style.background = 'white';
        logo.style.background = 'url(img/logo-dark.png)';
        for (var i = 0; i < link.length; i++){
          link[i].style.color = 'black';
        }
        
        console.log(link);
      appended = true;
     }
    } else {
     if (appended) {
        arrow.style.background = 'none';
        logo.style.background = 'url(img/logo.png)';
        for (var i = 0; i < link.length; i++){
          link[i].style.color = 'white';
        }
      appended = false;
     } 
    }
   }

/**Появение текста при наведении*/
let p = document.querySelector('.blog__text-right');
let button = document.querySelector('.blog__button-right');
let wrap =document.querySelector('.blog__wrapForButton');
    
  button.onmousedown = function() {
    button.style.color = 'white';
    p.style.display = 'block';
    wrap.style.background = 'rgb(50, 110, 221)';
  }

  button.onmouseleave = function() {
    button.style.color = 'rgb(71, 71, 71)';
    p.style.display = 'none';
    wrap.style.background = 'white';
  }


  let p1 = document.querySelector('.blog__text-right1');
  let button1 = document.querySelector('.blog__button-right1');
  let wrap1 =document.querySelector('.blog__wrapForButton1');
      
    button1.onmousedown = function() {
      p1.style.display = 'block';
      button1.style.color = 'white';
      wrap1.style.background = 'rgb(50, 110, 221)';
    }
  
    button1.onmouseleave = function() {
      button1.style.color = 'rgb(71, 71, 71)';
      p1.style.display = 'none';
      wrap1.style.background = 'white';
    }

    let p2 = document.querySelector('.blog__text-right2');
    let button2 = document.querySelector('.blog__button-right2');
    let wrap2 =document.querySelector('.blog__wrapForButton2');
        
      button2.onmousedown = function() {
        p2.style.display = 'block';
        button2.style.color = 'white';
        wrap2.style.background = 'rgb(50, 110, 221)';
      }
    
      button2.onmouseleave = function() {
        button2.style.color = 'rgb(71, 71, 71)';
        p2.style.display = 'none';
        wrap2.style.background = 'white';
      }

/**Модальное окно */

function modalWindow() {
  let window = document.querySelector('.modalWind1');
  window.style.display = 'block';
}
function modalWindowOff() {
  let window = document.querySelector('.modalWind1');
  let button = document.querySelector('.modalWind1__button');
  button.onmousedown = function () {
     window.style.display = 'none';
     console.log("on button");
  }
 
}
modalWindowOff();


