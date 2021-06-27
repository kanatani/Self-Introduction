function hamburger() {
    let icon = document.getElementsByClassName('icon'); 

    for(let i = 0; i < icon.length; i++) icon[i].classList.toggle('close');

    let nav = document.getElementsByClassName('sm-nav'); 

    for(let i = 0; i < nav.length; i++) nav[i].classList.toggle('sm-list');
}

document.addEventListener('DOMContentLoaded', function() {
    let hum = document.getElementById('hum');
    hum.addEventListener('click',hamburger);
});

module.exports = hamburger;


