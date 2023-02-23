

const menuBtn = document.querySelector(".menu-btn")
const navLinksContainer = document.querySelector('.nav-item-container')
menuBtn.addEventListener('click' , () =>{
    navLinksContainer.classList.toggle('show')
    console.log('clicked')

        
})

window.addEventListener('resize' , () =>{
    if(screen.width > 600){
        if(navLinksContainer.classList.contains('show')){
            navLinksContainer.classList.remove('show')
        }
    }else{
        if(!navLinksContainer.classList.contains('show')){
            navLinksContainer.classList.add('show')
        }
    }
})