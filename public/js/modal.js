const modalOpenAction = function(e) {
    const datamodal = e.currentTarget.dataset.modalOpen;
    Array.from(document.querySelectorAll(".modal")).forEach((e,i) => {
        if(e.getAttribute("data-modal") === datamodal) {
            e.classList.toggle('open');
        }
    }) 
}

Array.from(document.querySelectorAll('.card-button')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalOpenAction);
});
