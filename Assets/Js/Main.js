/*--- Navication bar function ---*/
function myMenuFunction() {
    var menuBtn= document.querySelector("#myNavMenu")
    if(menuBtn.className=='nav-menu'){
        menuBtn.className +=' responsive'
    } 
    else{
        menuBtn.className='nav-menu'
    }
}
/* Add Sahow with navigation bar on scroll*/
window.onscroll=function(){HeaderShadow()}
function HeaderShadow(){
    const navHeader=document.querySelector("#header");
    if(document.body.scrollTo>50 || document.documentElement.scrollTop>50){
        navHeader.style.boxshadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    }
    else{
        navHeader.style.boxshadow="none";
        navHeader.style.height="90px";
        navHeader.style.lineHeight="90px";
    }
}
var typingEffect= new Typed('.typedText',{
    strings:['Desinger','YouTuber','Developer'],
    loop:true,
    typeSpeed:100,    
    backSpeed:80,
    backDelay:1000
});
const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
    
});
sr.reveal('.featured-card',{})
sr.reveal('.featured-name',{delay:400,origin:'bottom'})
sr.reveal('.featured-text-info',{delay:200,origin:'bottom'})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:200})

sr.reveal('.project-box',{interval:200})
sr.reveal('.top-header',{})

const srLeft=ScrollReveal({
    origin:'left',
    distance:'200px',
    duration:2000,
    reset:true
    
});
srLeft.reveal('.about-info',{delay:100});
srLeft.reveal('.contact-info',{delay:100});

const srRight=ScrollReveal({
    origin:'right',
    distance:'200px',
    duration:2000,
    reset:true
    
});
srRight.reveal('.skills-box',{delay:100});
srRight.reveal('.form-control',{ delay:100});
//----------------------------------------
const sections= document.querySelectorAll('section[id]')
const a=document.querySelectorAll('a')    
function scrollActive() {    
    const scrollY=window.scrollY;
    sections.forEach(current => {
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-50,
        sectionId=current.getAttribute('id')
        if(scrollY>sectionTop && scrollY<sectionTop+ sectionHeight){
            a.forEach(obj=>{
                if(obj.dataset.flg==sectionId){                      
                    obj.classList.add('active-link')
                }
                else{
                    obj.classList.remove('active-link')
                }
            });            
        }
    });    
}
window.addEventListener('scroll',scrollActive)
