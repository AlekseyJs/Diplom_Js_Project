
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('add-cart-btn')){
        onAddBtnClick(e);
    }
})

//Save to localStorage id+count

function onAddBtnClick(e){

    let data_id = e.target.getAttribute('data-id');

    let cartStorage = localStorage.getItem("shopCart");

    if(!cartStorage){
        
        cartStorage = {};
        cartStorage[data_id] = 1;
        localStorage.setItem("shopCart", JSON.stringify(cartStorage));
    }
    else{

        cartStorage = JSON.parse(cartStorage);
        undefined != cartStorage[data_id] ? cartStorage[data_id]++ : cartStorage[data_id] = 1;
        localStorage.setItem("shopCart", JSON.stringify(cartStorage));
    }
    
    updateCartBtnCounter();
    
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

//Добавление-вычитание countera в LocalStorage при + -

function plusLocalStorageCounter(currentId){
    let cartStorage = localStorage.getItem("shopCart");

    cartStorage = JSON.parse(cartStorage);
    ++cartStorage[currentId];
    localStorage.setItem("shopCart", JSON.stringify(cartStorage));
}

function minusLocalStorageCounter(currentId){

    let cartStorage = localStorage.getItem("shopCart");

    cartStorage = JSON.parse(cartStorage);

    --cartStorage[currentId];
    if(cartStorage[currentId] < 1) {
        cartStorage[currentId]= undefined;
    }
    localStorage.setItem("shopCart", JSON.stringify(cartStorage));
}

//Листенер на Добавление-вычитание countera в LocalStorage при + -

document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('cart-minus-btn')) {
        const targetId = e.target.closest('.cart-item-card').getAttribute('data-id');
        minusLocalStorageCounter(targetId);
        updateCartBtnCounter();
    }
    if (e.target.classList.contains('cart-plus-btn')) {
        const targetId = e.target.closest('.cart-item-card').getAttribute('data-id');
        plusLocalStorageCounter(targetId);
        updateCartBtnCounter();
    }
    
})