
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

//Отправка формы

const orderPostBtn = document.querySelector('#order-post-btn');

let arr = [];

const getOrders = () => {
    fetch('http://localhost:3000/data').then(
        res => res.json()
    ).then(
        data => {
            arr = data;
            return arr;
        }
    )
    console.log(arr);
}

orderPostBtn.addEventListener('click', () => {
    getOrders();
    
})