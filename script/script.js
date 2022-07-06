
//Выпадающее меню в Хэд Нави пункт Одежда

const clothMenu = document.querySelector('.cloth');

clothMenu.addEventListener('click', () =>{
    clothMenu.nextElementSibling.classList.toggle('clothMenuShow');
})

//Закрытие выпадающего меню при клике куда угодно

document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('cloth')){
        if(clothMenu.nextElementSibling.classList.contains('clothMenuShow')){
            clothMenu.nextElementSibling.classList.remove('clothMenuShow');
        }
    }    
})

//Открытие корзины
const cartModal = document.querySelector('.cart-modal');

document.addEventListener('click', (ev) => {
    if(ev.target.closest('.cart-nav')){
        cartModal.classList.add('show-cart-class');
        getCartItems(localStorage.getItem("shopCart"));
    }
})
document.addEventListener('click', (ev) => {
    if(!ev.target.closest('.cart-nav') && !ev.target.closest('.cart-modal')){
        cartModal.classList.remove('show-cart-class');
    }
})

//Поиск

const searchBtn = document.getElementById('searchput-btn');

searchBtn.addEventListener('click', async () =>{
    let searchValue = document.getElementById('searchput');
    const itemName = searchValue.value;
    await (window.location.href = 'catalog.html');
    console.log(itemName);

    
    let consistence_from = document.getElementById('consistence_from').value;
    let consistence_to = document.getElementById('consistence_to').value;
    let width_from = document.getElementById('width_from').value;
    let width_to = document.getElementById('width_to').value;
    let price_from = document.getElementById('price_from').value;
    let price_to = document.getElementById('price_to').value;
    let typeArrTemp = document.querySelectorAll('.checkbox-item');
    let typeArrRes = [];
    for (let i = 0; i < typeArrTemp.length; i++) {
        if(typeArrTemp[i].checked){
            typeArrRes.push(typeArrTemp[i].getAttribute('data-type'));
        }
    }
    let param = {};
    param.consistenceFrom = consistence_from;
    param.consistenceTo = consistence_to;
    param.widthFrom = width_from;
    param.widthTo = width_to;
    param.priceFrom = price_from;
    param.priceTo = price_to;
    param.type = typeArrRes;
    param.name = searchValue.value;
    getGoodItem(param);
})
