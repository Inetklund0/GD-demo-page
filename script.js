window.addEventListener('wheel', cup);


let frame = 0;

function cup (){
    // event.deltaY;
    
    let productElm = document.querySelector('.product-demo');
    productElm.style.cssText = "background-position-x: calc("+Math.floor (frame) +" * -20px);";
    frame += 0.1;
    if (frame > 3) frame = 0;
}

let button = document.querySelector('.button');
button.addEventListener('mousedown',handleOrderClick);

function handleOrderClick (event){
    console.log('button was clicked');
    gtag('event', 'Click link', {
        'event_category': 'order test',
        'event_label': 'order event happened'
    });
}


