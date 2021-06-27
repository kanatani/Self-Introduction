 function open() {
    Array.from(document.querySelectorAll('.card-part')).forEach((modalOpenElement) => {
        modalOpenElement.addEventListener('click', (e) => {
            const dataModal = e.currentTarget.dataset.modalOpen;
            Array.from(document.querySelectorAll(".modal")).forEach((e,i) => {
                if(e.getAttribute("data-modal") === dataModal) {
                    document.getElementById('kin').classList.toggle('jhoia'); 
                    e.classList.toggle('modal-close');
                }
            }) 
        });
    });
}

 function close() {
    Array.from(document.querySelectorAll('.modal-button-part')).forEach((modalCloseElement) => {
        modalCloseElement.addEventListener('click', (e) => {
            const targetModal = e.currentTarget.closest('.modal');
            targetModal.classList.toggle('modal-close');
        });
    })
}

open();
close();

module.exports = {
    open,
    close
}

