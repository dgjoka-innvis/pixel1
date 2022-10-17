/**
 * Funksion per te ndryshuar backgroundin e elementeve te nje vektori
 */
export function changeBackground(items, color) {
    items.forEach(item => {
        item.style.backgroundColor = `var(${color})`;
    }); 
}

/**
 * Funksion per te ndryshuar backgroundin e nje elementi
 */
export function changeColor(item, color) {
    item.style.color = `var(${color})`;
}

/**
 * Funksion per te ndryshuar ngjyrat e elementeve te nje vektori
 */
export function changeColors(items, color) {
    items.forEach(item => {
        changeColor(item, color);
    });
}

/**
 * Funksion per te ndryshuar numrin e faqes ne varesi tek cili seksion ndodhemi
 */
export function changeNumber(item, number) {
    item.innerHTML = `0${number}`;
}

/**
 * Funksion per te bere nje element visible
 */
export function display(item) {
    item.classList.add("u-visible");
    item.classList.remove("u-hidden");
}

/**
 * Funksion per te bere nje elemment hidden
 */
export function hide(item) {
    item.classList.add("u-hidden");
    item.classList.remove("u-visible");
}

/**
 * Funksion per te bere disa elemente visible
 */
export function makeVisible(items, indx) {
    items.forEach(item => {
        if(item == items[indx]) {
            display(item);
        }
        else {
            hide(item);
        }
    });
}

/**
 * Funksion per te ndryshar nje klase te nje elementi
 */
export function changeClass(item) {
    item.classList.toggle("u-hidden");
}

/**
 * Funksion per te ndryshuar properties te elementeve te caktuar
 */
export function changeProperties(sections, headers, stickyBottom, pageNumber, i) {
    makeVisible(headers, i);
    changeBackground(sections, `--section-background-${i+1}`);
    changeColor(stickyBottom, `--text-color-${i+1}`);
    changeNumber(pageNumber, i);
}

/**
 * Funksion per te shfaqur close sign kur hapim menune si dhe per ta shfaqur ate
 */
export function closeSign(root, hamBtn) {
   
    root.style.setProperty("--overflow-y-menu", "scroll");
    root.style.setProperty("--overflow-y-body", "hidden");
    root.style.setProperty("--top-before", "8px");
    root.style.setProperty("--top-after", "8px");
    root.style.setProperty("--right-before", "2px");
    root.style.setProperty("--right-after", "3.1px");
    root.style.setProperty("--rotation-angle-before", "45deg");
    root.style.setProperty("--rotation-angle-after", "-45deg");
    root.style.setProperty("--width-after", "25%");
    root.style.setProperty("--width-menu", "50rem");
    root.style.setProperty("--opacity-shadow", "0.5");
    root.style.setProperty("--position-shadow", "fixed");
    root.style.setProperty("--shift-up-menu", "-50%");

    setTimeout(() => {
        root.style.setProperty("--top-clip-list", "0%");
        root.style.setProperty("--opacity-contacts", "1");
    }, 400);
   
    hamBtn.style.marginRight = "1.8rem";
}

/**
 * Funksion per te shfaqur menu sign si dhe per ta fshehur menune
 */
export function menuSign(root, hamBtn) {

    setTimeout(() => {
        root.style.setProperty("--overflow-y-body", "auto");
        root.style.setProperty("--overflow-y-menu", "hidden");
        root.style.setProperty("--top-before", "4px");
        root.style.setProperty("--top-after", "14px");
        root.style.setProperty("--right-before", "2px");
        root.style.setProperty("--right-after", "11px");
        root.style.setProperty("--rotation-angle-before", "0deg");
        root.style.setProperty("--rotation-angle-after", "0deg");
        root.style.setProperty("--width-after", "calc(.6 * .25 * 90px)");
        root.style.setProperty("--width-menu", "0rem");
        root.style.setProperty("--position-shadow", "absolute");
        hamBtn.style.marginRight = "0rem";
    }, 500);

    setTimeout(() => {
        root.style.setProperty("--opacity-shadow", "0");
    }, 300);
    
    root.style.setProperty("--shift-up-menu", "0%");
    root.style.setProperty("--top-clip-list", "60%");
    root.style.setProperty("--opacity-contacts", "0");
    
}