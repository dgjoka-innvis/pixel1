import * as Func from "./Functions.js";

// Konstantet

/*----------- Vektoret ----------*/
const sections = document.querySelectorAll("section");
const headers = document.querySelectorAll(".main-title");
const objects1 = document.querySelectorAll(".img-object1");
const objects2 = document.querySelectorAll(".img-object2");
const objects3 = document.querySelectorAll(".img-object3");
/* ---------------------------- */


const menuBtn = document.querySelector(".btn--lines-background");
const btn = document.querySelector(".btn");
const cursor = document.querySelector(".cursor");
const cursorText = document.querySelector(".cursor--text");
const movingImg = document.querySelectorAll(".i");
const stickyBottom = document.querySelector(".sticky");
const pageNumber = document.querySelector(".sticky--page-number");
const logo = document.querySelector("g");
const floatUpParagraph = document.querySelector(".float-up-paragraph");
const floatUpContainer = document.querySelector(".float-up-container");
const footer = document.querySelector("footer");
const footerText = document.querySelector(".footer-text");
const root = document.querySelector(":root");
const hamBtn = document.querySelector(".btn");


// Variablat
let i = 0;
let links = document.querySelectorAll(".bubble-zoom");
let currentPixels = -55;
let shiftValue = 0;
let lastScrollTop = 0;
let sectionNr = i;
let startingPos = 0;
let oldShift = 0;
let clicked = 1;


/**
 * Event listener i cili detektor levizjen e mouse
 */
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute("style", `top: ${e.clientY - 10}px; left: ${e.clientX - 10}px`);

    let x1 = (e.clientX * -1/30);
    let y1 = (e.clientY * -1/30);

    let x2 = (e.clientX * -1/50);
    let y2 = (e.clientY * -1/50);

    let x3 = (e.clientX * 1/40);
    let y3 = (e.clientY * 1/40);

    objects1.forEach(object1 => {
        object1.style.transform = `translate3d(${x1}px, ${y1}px, 0)`;
    });

    objects2.forEach(object2 => {
        object2.style.transform = `translate3d(${x2}px, ${y2}px, 0)`;
    });

    objects3.forEach(object3 => {
        object3.style.transform = `translate3d(${x3}px, ${y3}px, 0)`;
    });

});

/**
 *  Interseciton Observer per seksionet --> percakton se cfare do te ndodhe kur nje nga seksionet ndodhet ne viewport
 * */ 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting) {

            console.log(entry.target.classList[0]);

            for(let j = 0; j < 10; j++) {
                if(entry.target.classList[0] == `section-${j+1}`) {
                    Func.changeProperties(sections, headers, stickyBottom, pageNumber, i = j);
                    if(j == 1) {
                        console.log("Displayed");
                        Func.display(floatUpParagraph);
                    }
                    else {
                        Func.hide(floatUpParagraph);
                    }
                    if(j == 2) {
                        logo.setAttribute("fill", "var(--logo-color-2)");
                       }
                    else{
                        logo.setAttribute("fill", "var(--text-color-1)");
                    }
                }
            }
        }
    })
},{    
    threshold : 0.35
});


/**
 *  Interseciton Observer per footerin --> percakton se cfare do te ndodhe kur nje nga seksionet ndodhet ne viewport
 * */ 
const observerFooter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting) {
            console.log("We have entered the footer");
        }
    });

}, {
    threshold : 0.35
});

/**
 * Event Listener i cili tregon nese bejme load ne faqe
 */
window.addEventListener("load", () => {
    if( i!= 0) {
        headers[0].display = "none";
    }
    if(i == 1) {
        Func.display(floatUpParagraph);
    }
    else {
        Func.hide(floatUpParagraph);
    }
});


/**
 *  Onscroll function --> Percakton se cfare do te ndodhe kur bejme scroll ne dritaren kryesore
 */
window.addEventListener("scroll", (e) => {
    
    // Intersection Observer i cili vezhgon prezencen e secilit prej seksioneve ne view port
    sections.forEach(section => {
        observer.observe(section);
    });

    
    // Intersection Observer i cili vezhgon prezencen e footerit ne viewport
    observerFooter.observe(footer);

    // Variablat
    let sectiontop = Math.round(sections[i].getBoundingClientRect().top); // Numri i pixelave qe ndodhen mbi nj eseksion
    let containertop = Math.round(floatUpContainer.getBoundingClientRect().top); // Numri i pixelave mbi paragrafin e seksionit te dyte
    let footertop = Math.round(footer.getBoundingClientRect().top); // Numri i pixelave mbi footer
    let scrolledPixels = Math.round(window.scrollY); // Numri i pixelave qe kemi bere scroll
    
    let st = window.pageYOffset || document.documentElement.scrollTop; 
    
    if (st > lastScrollTop){
        // Downscroll code;
        movingImg.forEach(img => {
            img.style.transform = `translate3d(0px, ${shiftValue += 2}px, 0px) !important`;
        });

        if(scrolledPixels <= 158) {
            btn.style.top = "40px";
        }
        else {
            btn.style.top = "-20px";
        }
      
    } else {
        // Upscroll code
        movingImg.forEach(img => {
            img.style.transform = `translate3d(0px, ${shiftValue -= 2}px, 0px) !important`;
        });
        btn.style.top = "40px";
    }
    
    lastScrollTop = st <= 0 ? 0 : st;

    // Kushtet per te aplikuar scrolling effects tek footeri
    if(footertop <= 650) {

        //Jemi brenda footerit
        if(footertop <= 650 && footertop >= 600) {
            root.style.setProperty("--shift-distance", "-45vh");
        }
        if(footertop <= 600 && footertop >= 550) {
            root.style.setProperty("--shift-distance", "-40vh");
        }
        if(footertop <= 550 && footertop >= 500) {
            root.style.setProperty("--shift-distance", "-35vh");
        }
        if(footertop <= 500 && footertop >= 450) {
            root.style.setProperty("--shift-distance", "-30vh");
        }
        if(footertop <= 450 && footertop >= 400) {
            root.style.setProperty("--shift-distance", "-25vh");
            root.style.setProperty("--bottom-line-width", "0%");
            root.style.setProperty("--rotation-angle-arrow", "45deg");
            root.style.setProperty("--opacity-arrow", "0");
        }
        if(footertop <= 400 && footertop >= 300) {
            root.style.setProperty("--shift-distance", "-20vh");
            root.style.setProperty("--bottom-line-width", "5%");
            root.style.setProperty("--opacity-arrow", "0.2");
        } 
        if(footertop <= 350 && footertop >= 300) {
            root.style.setProperty("--shift-distance", "-15vh");
            root.style.setProperty("--bottom-line-width", "10%");
            root.style.setProperty("--rotation-angle-arrow", "20deg");
            root.style.setProperty("--opacity-arrow", "0.4");
        }
        if(footertop <= 300 && footertop >= 250) {
            root.style.setProperty("--shift-distance", "-10vh");
            root.style.setProperty("--bottom-line-width", "40%");
            root.style.setProperty("--rotation-angle-arrow", "15deg");
            root.style.setProperty("--opacity-arrow", "0.6");
        } 
        if(footertop <= 250 && footertop >= 200) {
            root.style.setProperty("--shift-distance", "-5vh");
            root.style.setProperty("--bottom-line-width", "80%");
            root.style.setProperty("--rotation-angle-arrow", "10deg");
            root.style.setProperty("--opacity-arrow", "0.8");
        } 
        if(footertop <= 200 && footertop >= 150) {
            root.style.setProperty("--shift-distance", "0vh");
            root.style.setProperty("--bottom-line-width", "100%");
            root.style.setProperty("--rotation-angle-arrow", "0deg");
            root.style.setProperty("--opacity-arrow", "1");
        }         
    }
    else if(footertop > 650) {
        root.style.setProperty("--shift-distance", "-70vh");
        root.style.setProperty("--bottom-line-width", "0%");
        root.style.setProperty("--rotation-angle-arrow", "90deg");
        root.style.setProperty("--opacity-arrow", "0");
    }


    // Kushtet per te aplikur scrolling effects tek paragrafi i seskionit te dyte
    if(containertop <= 520) {
        floatUpParagraph.style.position = "fixed";
        floatUpParagraph.style.top = "510px";
    }
    else {
        floatUpParagraph.style.position = "absolute";
        floatUpParagraph.style.top = "0";
    }


    // Kushtet per te aplikuar scrolling effects tek seksioni i pare
    // Seksioni i pare ka lartesi me te vogel se seksionet e tjera
    if(i == 0) {
        if(sectiontop < -150) {
            if(sectiontop < -150 && sectiontop > -200) {
                root.style.setProperty("--bottom-clip-distance", "60%");
                console.log("true");
            }
            if(sectiontop < -200 && sectiontop > -250) {
                root.style.setProperty("--bottom-clip-distance", "30%");
            }
            if(sectiontop < -250 && sectiontop > -300) {
                root.style.setProperty("--bottom-clip-distance", "0%");
            }
        }
        else {
            root.style.setProperty("--bottom-clip-distance", "90%");
        }
    }

    // Kushtet qe duhen per te aplikuar scrolling effects tek seksioni i fundit
    else if (i == 9) {
        if(sectiontop > 350) {
            root.style.setProperty("--opacity-header", "0");
        }
        if(sectiontop < 350 && sectiontop > 300) {
            root.style.setProperty("--opacity-header", "0.1");
        }
        if(sectiontop < 300 && sectiontop > 250) {
            root.style.setProperty("--opacity-header", "0.4");
        }
        if(sectiontop < 250 && sectiontop > 200) {
            root.style.setProperty("--opacity-header", "1");
        }
    }

    // Kushtet qe duhen per te aplikuar scrolling effects tek te gjitha seksionet
    else {
        if(sectiontop > -600 && sectiontop < 180) {
           root.style.setProperty("--bottom-clip-distance", "90%");
           if(i == 1) {
            Func.display(floatUpParagraph);
           }
        }
        
        if(sectiontop < -600) {
            if(sectiontop < -600 && sectiontop > -650) {
                root.style.setProperty("--bottom-clip-distance", "60%");
            }
            if(sectiontop < -650 && sectiontop > -700) {
                root.style.setProperty("--bottom-clip-distance", "30%");
            }
            if(sectiontop < -700 && sectiontop > -750) {
                root.style.setProperty("--bottom-clip-distance", "0%");
                Func.hide(floatUpParagraph);
            }
        }
    
        if(sectiontop < 180) {
            if(sectiontop < 180 && sectiontop > 130) {
                root.style.setProperty("--bottom-clip-distance", "0%");
            }
            if(sectiontop < 130 && sectiontop > 80) {
                root.style.setProperty("--bottom-clip-distance", "30%");
            }
            if(sectiontop < 80 && sectiontop > 30) {
                root.style.setProperty("--bottom-clip-distance", "60%");
            }
        }
        if(sectiontop > 180) {
            root.style.setProperty("--bottom-clip-distance", "0%");
        }
    }
});


/**
 * Event Listener i cili detekton klikimin e butonit te menuse anesore
 */
menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(clicked % 2 == 1) {
        Func.closeSign(root, hamBtn);
    }

    else {
        Func.menuSign(root, hamBtn);
    }

    clicked++;
   
});


/**
 * Funksion i cili ben qe kursori te zmadhohet ne elemente te caktuara te faqes 
 */
links.forEach(item => {
    item.addEventListener("mouseover", () => {
        if(!item.classList.contains("noText")) {
            Func.display(cursorText);
        }
        item.style.cursor = "pointer";
        root.style.setProperty("--scale-cursor", "4");
    });

    item.addEventListener("mouseleave", () => {
        Func.hide(cursorText);
        root.style.setProperty("--scale-cursor", "1");
    });

})


/**
 * Efekti parallax
 */
var scenes = document.querySelectorAll(".scene");

scenes.forEach(scene => {
    new Parallax(scene);
});













