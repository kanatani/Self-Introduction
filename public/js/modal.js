const modalOpenAction = function(e) {
    const dataModal = e.currentTarget.dataset.modalOpen;
    Array.from(document.querySelectorAll(".modal")).forEach((e,i) => {
        if(e.getAttribute("data-modal") === dataModal) {
            e.classList.toggle('close');
        }
    }) 
}

Array.from(document.querySelectorAll('.card-part')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalOpenAction);
});

const modalWrapOpen = function(e) {
    //クリックしたボタンのdata属性の値を取得
    const dataModalOpen = e.currentTarget.dataset.modalOpen;
    //works_modal_wrapper classが付与されている要素を全て取得
    //取得した全ての要素からdata属性の値が同じ要素を探す
    //取得した要素へis_open classを付与する
    Array.from(document.querySelectorAll('.works_modal_wrapper')).forEach((e, i) => {
      if(e.getAttribute('data-modal') === dataModalOpen){
        e.classList.toggle('is_open');
      }
    })
  }

const CloseModal = function(e) {
    const targetModal = e.currentTarget.closest('.modal');
    targetModal.classList.toggle('close');
}

Array.from(document.querySelectorAll('.modal-button-part')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', CloseModal);
})
  