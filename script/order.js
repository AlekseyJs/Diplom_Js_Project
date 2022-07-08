
//Проверка на пустой ввод

var inputList = document.getElementsByClassName('inputLi');


for(var i = 0; i < inputList.length; i++){
    inputList[i].addEventListener('click', function(event){
        var definedInput = event.target;
        definedInput.addEventListener('focusout', function(){
            if(definedInput.value.trim() == ''){
                definedInput.nextElementSibling.classList.add('validErrorOn')
            }
            else{
                if(definedInput.nextElementSibling.classList.contains('validErrorOn')){
                    definedInput.nextElementSibling.classList.remove('validErrorOn')
                }              
            }
        })
    })
}

//Клик по кнопке заказа

const orderPostBtn = document.querySelector('#order-post-btn');
const modalWindow = document.querySelector('.order-window');

orderPostBtn.addEventListener('click', () => {
    modalWindow.innerHTML = `<h2 style =" text-align:center; font-size: 50px; padding: 100px;">Спасибо за заказ</h2>`
    
})