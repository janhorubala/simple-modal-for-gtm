function showModal(template) {
	document.body.style.overflow = 'hidden';
	document.body.innerHTML += template;
	const modal = document.body.lastChild;
	const popup = modal.querySelector('.modal__popup');

	popup.addEventListener('click', e => {
		e.stopPropagation();
	})

	if (modal.hasAttribute('modal-close')) {
		modal.addEventListener('click', e => {
			modal.style.display = 'none';
			document.body.style.overflow = ''
		});
	}

	const closables = Array.from(modal.querySelectorAll('[modal-close]'));
	closables.forEach(closable => {
		closable.addEventListener('click', e => {
			modal.style.display = 'none';
			document.body.style.overflow = ''
		});
	});
}

const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://janhorubala.github.io/simple-modal-for-gtm/index.css';
head.appendChild(link);