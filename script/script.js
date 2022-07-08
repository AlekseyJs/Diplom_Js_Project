
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
    if(!ev.target.closest('.cart-nav') && !ev.target.closest('.cart-modal') && !ev.target.closest('.good-card')){
        cartModal.classList.remove('show-cart-class');
    }
})

//Переход по кнопке оформление заказа

const orderBtn = document.querySelector('.order-btn');

orderBtn.addEventListener('click', ()=>{
    window.location.href = 'order.html';
})