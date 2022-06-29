let menu_mobie_block = document.getElementById('menu_mobile_block')
let mobile_container = document.querySelector('.mobile_container');


menu_mobie_block.addEventListener("click", () => {

    mobile_container.style.display = 'block';
})

let menu_mobie_none = document.getElementById('menu_mobie_none')

menu_mobie_none.addEventListener("click", () => {

    mobile_container.style.display = 'none';
})

