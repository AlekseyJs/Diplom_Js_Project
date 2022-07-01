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

//Добавление после нужного элемента

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
