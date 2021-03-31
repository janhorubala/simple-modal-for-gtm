const modals = Array.from(document.querySelectorAll('.modal'));
modals.forEach(modal => {
    modal.style.display = 'none';
    const popup = modal.querySelector('.modal__popup');

    popup.addEventListener('click', e => {
        e.stopPropagation();
    })

    modal.addEventListener('click', e => {
        modal.style.display = 'none';
    })
    const close = modal.querySelector('.modal__close');
    close.addEventListener('click', e => {
        modal.style.display = 'none';
    })
});

const showModal = document.getElementById('showModal');
showModal.addEventListener('click', e => {
    modals[0].style.display = 'flex';
});