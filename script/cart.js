
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
updateCartBtnCounter();
//Обновление счётчика на корзине

function updateCartBtnCounter()
{
    let sum =0;
    let cartStorage = localStorage.getItem("shopCart");
    cartStorage = JSON.parse(cartStorage);
    for( let key in cartStorage){
        
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
        document.querySelector('.total-price-value').innerHTML = '';
        const targetId = e.target.closest('.cart-item-card').getAttribute('data-id');
        minusLocalStorageCounter(targetId);
        updateCartBtnCounter();
        
    }
    if (e.target.classList.contains('cart-plus-btn')) {
        document.querySelector('.total-price-value').innerHTML = '';
        const targetId = e.target.closest('.cart-item-card').getAttribute('data-id');
        plusLocalStorageCounter(targetId);
        updateCartBtnCounter();
        
    }
    
})

//Достаём массив из базы, фильтруем по localStorage и рендерим
let currentCartDate = [];

const getCartItems = (param) => {
    fetch('http://localhost:3000/data').then(
        res => res.json()
    ).then(
        data => {

            if(param){
                let cartStorage = JSON.parse(param);

                const filterData = data.filter( (item)=>{
                    if( undefined != cartStorage[item.id] && 0 != cartStorage[item.id]){
                        item.count = cartStorage[item.id];
                        return true;
                    }
                    else{
                        return false;
                    }
                });
                renderCartList(filterData);
            }
            else{
                renderCartList();
            }
            
        }
    )
}

//Рендер карточек товара в корзине

const cartRenderArea = document.querySelector('.cart-modal-render-area');
let totalPriceCounter = document.querySelector('.total-price-value');
let sum = 0;
let orderValue;

function renderCartList(cartArr){
    cartRenderArea.innerHTML = '';
    if(!cartArr){
        cartRenderArea.innerHTML += `<h2 style="font-size: 40px; line-height: 150%; width: 800px; text-align: center">ТОВАР В КОРЗИНЕ ОТСУТСТВУЕТ`;
    } else {
        cartRenderArea.innerHTML = '';
        for(let i = 0; i < cartArr.length;i++){
            cartRenderArea.innerHTML += `
                <div class="cart-item-card" data-id=${cartArr[i].id} data-count=${cartArr[i].count} data-price=${cartArr[i].about.price}>
                    <div class="cart-item-img">
                        <img src=${cartArr[i].about.img} alt="img">
                    </div>
                    <div class="cart-item-value">
                        <a class="cart-minus-btn">-</a>
                        <p id="cart-current-value">${cartArr[i].count}</p>
                        <a class="cart-plus-btn">+</a>
                    </div>
                    <div class="cart-item-total-price">Цена за наименование: <br><span id="good-cart-price">${(cartArr[i].about.price*cartArr[i].count).toFixed(1)}$</span></div>
                </div>
            `
        }
        sum = 0;
        for(let i=1; i<cartRenderArea.childNodes.length; i = i+2){
            sum += cartRenderArea.childNodes[i].getAttribute('data-price')*cartRenderArea.childNodes[i].getAttribute('data-count');
        }
        totalPriceCounter.innerHTML = sum.toFixed(1);
        orderValue = sum.toFixed(1);
    }
}
console.log(orderValue)
// export {orderValue};