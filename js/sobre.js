let
menuMobile,
mobile,
menuMobileNone;

menuMobile = document.getElementById('menu_mobile_block')
mobile = document.querySelector('.mobile_container');
menuMobileNone = document.getElementById('menu_mobie_none')

menuMobile.addEventListener("click", () => {

    mobile.style.display = 'block';
})

menuMobileNone.addEventListener("click", () => {

    mobile.style.display = 'none';
})

