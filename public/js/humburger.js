window.onload = function() {
    
    let icon = document.getElementById('icon');
    
    let hum = document.getElementById('hum');

    hum.addEventListener('click', function (){
        icon.classList.toggle('close');
    });
    
}
