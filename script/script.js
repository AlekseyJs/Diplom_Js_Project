
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

//