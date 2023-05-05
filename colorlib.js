
  let $nav = document.querySelector("nav ul");
  let $logo = document.querySelector("nav img");
  let $openMenu = document.querySelector("nav .open-menu");
  let $closeMenu =document.querySelector(".close-menu");
  let $menuClic = document.querySelector("nav .menu-clic");

window.addEventListener("DOMContentLoaded", function(){
    $nav.classList.add("active")
  });

  window.addEventListener("DOMContentLoaded", function(){
    $logo.classList.add("isactive")
  });

  $closeMenu.style.opacity='0'
  $openMenu.addEventListener("click" , function(){

$menuClic.classList.add("active1")
 $closeMenu.classList.add('close-menu')
 $closeMenu.style.opacity='1'
 $openMenu.style.opacity='0'
 console.log("j'ai ouvert")
  } )

  $closeMenu.addEventListener("click" , function(){
   $menuClic.classList.remove("active1")
   
    $closeMenu.style.opacity='0'
    $openMenu.style.opacity= '1'
    console.log("j'ai fermé")
     } )