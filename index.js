const modal = document.getElementsByClassName('modal')[0];
modal.style.display = 'none';

const popup = modal.getElementsByClassName('modal__popup')[0];
popup.addEventListener('click', e => {
    e.stopPropagation();
})

modal.addEventListener('click', e => {
    modal.style.display = 'none';
})

const close = modal.getElementsByClassName('modal__close')[0];
close.addEventListener('click', e => {
    modal.style.display = 'none';
})

const showModal = document.getElementById('showModal');
showModal.addEventListener('click', e => {
    modal.style.display = 'flex';
});