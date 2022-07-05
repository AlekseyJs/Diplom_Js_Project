//Сортировка по ворзрастанию/понижению цены

document.addEventListener('click', function(ev){
    if(ev.target.classList.contains('cheap-btn')){
        growUpPrice();
    }
    if(ev.target.classList.contains('expensive-btn')){
        goDownPrice();
    }
})

//Сортировка от дешёвых

function growUpPrice(){
    let parentBox = document.querySelector('.goods-render-box');

    for (let i = 0; i < parentBox.children.length; i++) {
        for (let j = i; j < parentBox.children.length; j++) {
            if(+parentBox.children[i].getAttribute('data-price') > +parentBox.children[j].getAttribute('data-price')){
                replacedNode = parentBox.replaceChild(parentBox.children[j], parentBox.children[i]);
                insertAfter(replacedNode, parentBox.children[i]);
            }
        }
    }
}

//Сортировка от дорогих

function goDownPrice(){
    let parentBox = document.querySelector('.goods-render-box');

    for (let i = 0; i < parentBox.children.length; i++) {
        for (let j = i; j < parentBox.children.length; j++) {
            if(+parentBox.children[i].getAttribute('data-price') < +parentBox.children[j].getAttribute('data-price')){
                replacedNode = parentBox.replaceChild(parentBox.children[j], parentBox.children[i]);
                insertAfter(replacedNode, parentBox.children[i]);
            }
        }
    }
}

//Добавление после нужного элемента для сортировок

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// Сортировки по чеубоксам

const MainSortBtn = document.querySelector('#filter-accept-btn');

MainSortBtn.addEventListener('click', ()=>{ 

    let consistence_from = document.getElementById('consistence_from').value;
    let consistence_to = document.getElementById('consistence_to').value;
    let width_from = document.getElementById('width_from').value;
    let width_to = document.getElementById('width_to').value;
    let price_from = document.getElementById('price_from').value;
    let price_to = document.getElementById('price_to').value;
    let param = {};
    param.consistenceFrom = consistence_from;
    param.consistenceTo = consistence_to;
    param.widthFrom = width_from;
    param.widthTo = width_to;
    param.priceFrom = price_from;
    param.priceTo = price_to;
    getGoodItem(param);
})
