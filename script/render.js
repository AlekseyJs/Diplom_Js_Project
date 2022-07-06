//http://localhost:3000/data

const GOODS_LIST = 'http://localhost:3000/data';

const renderArea = document.querySelector('.goods-render-box');

//Функция получения корректного массива, учитывающая фильтры критерия отбора товаров

const getGoodItem = (param) => {
    fetch(`${GOODS_LIST}`).then(
        res => res.json()
    ).then(
        data => {
            if(param)
            {
                const filterData = data.filter( (item)=>{
                    
                    return (!param.priceFrom || param.priceFrom <= item.about.price)
                     && (!param.priceTo || param.priceTo >= item.about.price)
                     && (!param.widthFrom || param.widthFrom <= item.about.width)
                     && (!param.widthTo || param.widthTo >= item.about.width)
                     && (!param.consistenceFrom || param.consistenceFrom <= item.about.consistence)
                     && (!param.consistenceTo || param.consistenceTo >= item.about.consistence)
                     && (!param.type || param.type.length==0 || param.type.includes(item.about.type))
                     && (!param.name || item.about.name.startsWith(param.name))
                });
            renderGoodsList(filterData);
            }
            else{
                renderGoodsList(data);
            }
        }
    )
}

getGoodItem();
updateCartBtnCounter();

//Рендер карточек товара в каталоге

const renderGoodsList = (goodsArr) =>{
    renderArea.innerHTML = '';
    for(let i = 0; i < goodsArr.length;i++){
        renderArea.innerHTML += `
            <div class="good-card" data-price="${goodsArr[i].about.price}" data-width="${goodsArr[i].about.width}" data-consistence="${goodsArr[i].about.consistence}">
                <div class="good-img-box">
                    <img src=${goodsArr[i].about.img}>
                </div>
                <div class="textile-type">
                    <p>${goodsArr[i].about.type}</p>
                </div>
                <div class="textile-name">
                    <p>${goodsArr[i].about.name}</p>
                </div>
                <div class="textile-wigth">
                    <p>Ширина: <span>${goodsArr[i].about.width}м</span></p>
                </div>
                <div class="textile-consistence">
                    <p>Плотность: <span>${goodsArr[i].about.consistence}гр.м2</span></p>
                </div>
                <div class="textile-price-box">
                    <p class="discount-price">${goodsArr[i].about.price}$</p>
                    <p class="full-price">${goodsArr[i].about.wholesale_price}$</p>
                <a class="add-cart-btn"  data-id="${goodsArr[i].id}" >В корзину</a>
                </div>           
            </div>
        `
    }
}



const getCartItems = (param) => {
    fetch(`${GOODS_LIST}`).then(
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

const cartRenderArea = document.querySelector('.cart-modal');

function renderCartList(cartArr){
    cartRenderArea.innerHTML = '';
    if(!cartArr || cartArr === {}){
        cartRenderArea.innerHTML += `<h2 style="font-size: 30px; line-height: 150%">ТОВАР В КОРЗИНЕ ОТСУТСТВУЕТ`;
    } else {
        cartRenderArea.innerHTML = '';
        for(let i = 0; i < cartArr.length;i++){
            cartRenderArea.innerHTML += `
                <div class="cart-item-card" data-id=${cartArr[i].id}>
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
    }
}
