let mincolor=localStorage.getItem("color_option");
if(mincolor!==null){
    document.documentElement.style.setProperty('--col',mincolor);
    document.querySelectorAll(".colors li").forEach(el=>{
        el.classList.remove("active");
        if(el.dataset.color===mincolor){
            el.classList.add("active")
        }
    });

}
let backgroundOption=true;
let backgroundintrval;

document.querySelector(".togel .fa-gear").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open")
};

let coli=document.querySelectorAll(".colors li");
coli.forEach(li=> {
    li.addEventListener("click",(e)=> {
        document.documentElement.style.setProperty('--col',e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active");
        });
        e.target.classList.add("active")
    });
});


// #################################################################################################################

let ran=document.querySelectorAll(".randb span");
ran.forEach(span=> {
    span.addEventListener("click",(e)=> {
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active");
        });
        e.target.classList.add("active")
        if(e.target.dataset.background==='yes'){
            backgroundOption=true;
            random();
            localStorage.setItem("background_option",true)
        } else{
            backgroundOption=false;
            clearInterval(backgroundintrval)
            localStorage.setItem("background_option",false)

        }
    });
});

// #################################################################################################################
let bac=localStorage.getItem("background_option");
if(bac!==null){
    if(bac=='true'){
        backgroundOption=true;
    }else{
        backgroundOption=false;
    }
    document.querySelectorAll(".randb span").forEach(el=>{
        el.classList.remove("active");
    });
    if(bac==='true'){
        document.querySelector(".randb .yes").classList.add("active");

    }else{
        document.querySelector(".randb .no").classList.add("active");
    }

}
// #################################################################################################################
let lan=document.querySelector(".landing-page");
let imarr=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg"];

function random(){
    if(backgroundOption===true){
        backgroundintrval=setInterval(()=>{
            let ran=Math.floor(Math.random()*imarr.length);
            lan.style.backgroundImage ='url("../images/'+imarr[ran]+'")';
        
        },3000);
    }
}
random();


// #################################################################################################################
let ourskill=document.querySelector(".skills");
window.onscroll=function(){
    let skillsoffset=ourskill.offsetTop;
    let skillhight=ourskill.offsetHeight;
    let windowhight=this.innerHeight;
    let windowscroltop=window.scrollY;
    if ((windowscroltop+300)>(skillsoffset + skillhight - windowhight)){
        let skillall=document.querySelectorAll(".skill-box .skill-progrees span");
        skillall.forEach(skill => {
            skill.style.width =skill.dataset.progrees;
        });
    }else{
        let skillall=document.querySelectorAll(".skill-box .skill-progrees span");
        skillall.forEach(skill => {
            skill.style.width =skill.dataset.pr;
        });
    }
}
// <!-- ################################################################## -->
let ourgallary=document.querySelectorAll(".gallery img");
ourgallary.forEach(img=>{
    img.addEventListener('click',(e)=>{
        let overlay=document.createElement("div");
        overlay.className='popup-overlay';
        document.body.appendChild(overlay);
        let pubox=document.createElement("div")
        pubox.className='pubox';
        if(img.alt!==null){
            let imghe=document.createElement("h3");
            let imgtext=document.createTextNode(img.alt);
            imghe.appendChild(imgtext);
            pubox.appendChild(imghe)
        }
        let puimg=document.createElement("img");
        puimg.src=img.src;
        pubox.appendChild(puimg);
        document.body.appendChild(pubox)
        let closeb=document.createElement("span");
        let closetext=document.createTextNode("X");
        closeb.appendChild(closetext);
        closeb.className='closeb';
        pubox.appendChild(closeb)
    })
});
document.addEventListener('click',(e)=>{
    if(e.target.className=='closeb'){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove()
    }
});


let allbullets=document.querySelectorAll(".nav-bullets .bullet");
allbullets.forEach(bullet=>{
    bullet.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
});


let alllinks=document.querySelectorAll(".links a");
alllinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
})




let bulltespan=document.querySelectorAll(".bullet-option span");
let bulltecontiner=document.querySelector(".nav-bullets");
let bulltelocal=localStorage.getItem("bullet-option");
if(bulltelocal!==null){
    bulltespan.forEach(span=>{
        span.classList.remove("active");
    });
    if(bulltelocal==='block'){
        bulltecontiner.style.display='block';
        document.querySelector(".bullet-option .yes").classList.add('active')

    }else{
        bulltecontiner.style.display='none';
        document.querySelector(".bullet-option .no").classList.add('active')

    }

}
bulltespan.forEach(span=>{

    span.addEventListener("click",(e)=> {
        if(span.dataset.disblay=='show'){
            bulltecontiner.style.display='block';
            localStorage.setItem("bullet-option",'block');
        }else{
            bulltecontiner.style.display='none';
            localStorage.setItem("bullet-option",'none');

        }

        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active");
        });
        e.target.classList.add("active")

    });
});




let butom=document.querySelector(".toggel-menu");
let tlinks=document.querySelector(".links");
butom.onclick=function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active")
    tlinks.classList.toggle("open")
}


document.addEventListener('click',(e)=>{
    if(e.target!==butom&&e,e.target!==tlinks){
        if(tlinks.classList.contains("open")){
            butom.classList.toggle("menu-active")
            tlinks.classList.toggle("open")
        }
    }
})
tlinks.onclick=function(e){
    e.stopPropagation();
}