
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

searchBtn.addEventListener('click', async() =>{
    let searchValue = document.getElementById('searchput');

    window.location.href = 'catalog.html';

    let param = {};
    
    param.name = searchValue.value;
    console.log(param.name);
    await getGoodItem(param);
})
