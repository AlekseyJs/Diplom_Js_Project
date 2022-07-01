//http://localhost:3000/data

const GOODS_LIST = 'http://localhost:3000/data';

const renderArea = document.querySelector('.goods-render-box');

const getGoodItem = () => {
    fetch(`${GOODS_LIST}`).then(
        res => res.json()
    ).then(
        data => {
            renderGoodsList(data);
        }
    )
}
getGoodItem();

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
                    <p class="discount-price">${goodsArr[i].about.wholesale_price}$</p>
                    <p class="full-price">${goodsArr[i].about.price}$</p>
                <a href="#" class="add-cart-btn">В корзину</a>
                </div>           
            </div>
        `
    }
}