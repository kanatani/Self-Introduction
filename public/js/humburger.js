window.onload = function() {
    function hamburger() {
        let icon = document.getElementById('icon'); 
        icon.classList.toggle('close'); //ハンバーガー要素

        let nav = document.getElementById('sm-list'); 
        nav.classList.toggle('sm-list');//nav要素
    }

    let hum = document.getElementById('hum');

    hum.addEventListener('click', function (){
        hamburger();
    });
}
