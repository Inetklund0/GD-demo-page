window.addEventListener('wheel', cup);

let frame = 0;

function cup (){
    // event.deltaY;
    
    let productElm = document.querySelector('.product-demo');
    productElm.style.cssText = "background-position-x: calc("+Math.floor (frame) +" * -20px);";
    frame += 0.1;
    if (frame > 3) frame = 0;
}