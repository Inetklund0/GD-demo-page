window.addEventListener('wheel', cup);

function cup (){
    // event.deltaY;
    
    let productElm = document.querySelector('.product-demo');
    productElm.style.cssText = "border: 5px solid black;";

}
