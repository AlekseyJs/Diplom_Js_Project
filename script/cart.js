
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('add-cart-btn')){
        onAddBtnClick(e);
    }
})

//Save to storage id+count

function onAddBtnClick(e){

    let data_id = e.target.getAttribute('data-id');

    
    let cartStorage = localStorage.getItem("shopCart");
    if( !cartStorage){
        
        cartStorage = {};
        cartStorage[data_id] = 1;
        localStorage.setItem("shopCart", JSON.stringify(cartStorage));
    }
    else{

        cartStorage = JSON.parse(cartStorage);
        undefined != cartStorage[data_id] ? cartStorage[data_id]++ : cartStorage[data_id] = 1;
        localStorage.setItem("shopCart", JSON.stringify(cartStorage));
    }
    
    updateCartBtnCounter()
    
}

//Обновление счётчика на корзине

function updateCartBtnCounter()
{
    let sum =0;
    let cartStorage = localStorage.getItem("shopCart");
    cartStorage = JSON.parse(cartStorage);
    for( let key in cartStorage){
        // sum += cartStorage[key];
        sum++;
    }
    document.getElementById('item-cart-counter').innerText = sum;
}
