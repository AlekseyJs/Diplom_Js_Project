

const renderArea = document.querySelector('.goods-render-box');

const getGoodItem = (param) => {
    fetch('http://localhost:3000/data').then(
        res => res.json()
    ).then(
        data => {
   
            renderGoodsList2(data);
        }
    )
}

const renderGoodsList2 = (goodsArr) =>{
    renderArea.innerHTML = '';
    for(let i = 0; i < 10 ;i++){
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
            </div>
        `
    }
}

getGoodItem();