
//Drag&Drop в корзину

const dragDrop = function(){

    const dragEl = document.querySelectorAll('.good-card');
    let dragElId = 0;
    const dropZone = document.querySelector('.cart-modal');

    for (let i = 0; i < dragEl.length; i++) {
    
        dragEl[i].addEventListener('dragstart', (e)=>{
            dropZone.classList.add('show-cart-class');
            dragElId = e.target.closest('.good-card').getAttribute('data-id');
        })

        dropZone.addEventListener('dragover', (e) =>{
            e.preventDefault();
        })
    }
        dropZone.addEventListener('drop', (e) =>{

            let cartStorage = localStorage.getItem("shopCart");

            if(!cartStorage){
                
                cartStorage = {};
                cartStorage[dragElId] = 1;
                localStorage.setItem("shopCart", JSON.stringify(cartStorage));
            }
            else{

                cartStorage = JSON.parse(cartStorage);
                undefined != cartStorage[dragElId] ? cartStorage[dragElId]++ : cartStorage[dragElId] = 1;
                localStorage.setItem("shopCart", JSON.stringify(cartStorage));
            }
            
            updateCartBtnCounter();
            getCartItems(localStorage.getItem("shopCart"));
            dropZone.classList.add('show-cart-class');
        })


        
       
};