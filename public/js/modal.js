const modalOpenAction = function(e) {
    const dataModal = e.currentTarget.dataset.modalOpen;
    Array.from(document.querySelectorAll(".modal")).forEach((e,i) => {
        if(e.getAttribute("data-modal") === dataModal) {
            e.classList.toggle('modal-close');
        }
    }) 
}

Array.from(document.querySelectorAll('.card-part')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalOpenAction);
});



const CloseModal = function(e) {
    const targetModal = e.currentTarget.closest('.modal');
    targetModal.classList.toggle('modal-close');
}

Array.from(document.querySelectorAll('.modal-button-part')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', CloseModal);
})
  