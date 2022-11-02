
menuBtn = document.querySelector(".menu-btn");
navContainer = document.querySelector(".nav-pill-container");

menuBtn.addEventListener('click',()=>{
    console.log('clicked')
    console.log(navContainer.style.display)
    if (navContainer.style.display === 'none'){
        navContainer.style.display = 'block'
    }else{
        navContainer.style.display = 'none'
    }
})

