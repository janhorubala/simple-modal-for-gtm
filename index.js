const modals = Array.from(document.querySelectorAll('.modal'));
modals.forEach(modal => {
	modal.style.display = 'none';
	const popup = modal.querySelector('.modal__popup');

	popup.addEventListener('click', e => {
		e.stopPropagation();
	})

	if (modal.hasAttribute('modal-close')) {
		modal.addEventListener('click', e => {
			modal.style.display = 'none';
		});
	}

	const closables = Array.from(modal.querySelectorAll('[modal-close]'));
	closables.forEach(closable => {
		closable.addEventListener('click', e => {
			modal.style.display = 'none';
		});
	});
});

const triggers = Array.from(document.querySelectorAll('[modal-trigger]'));
triggers.forEach(trigger => {
	trigger.addEventListener('click', e => {
		const modalId = trigger.getAttribute('modal-trigger');
		const modal = modals.filter(modal => modal.id === modalId)[0];
		modal.style.display = 'flex';
	});
});

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		modals.filter(modal => modal.hasAttribute('modal-close'))
			.forEach(modal => {
				modal.style.display = 'none';
			})
	}
});

function showModal(template){
    document.body.innerHTML += template;
    const modal = document.body.lastChild;
	const popup = modal.querySelector('.modal__popup');

	popup.addEventListener('click', e => {
		e.stopPropagation();
	})

	if (modal.hasAttribute('modal-close')) {
		modal.addEventListener('click', e => {
			modal.style.display = 'none';
		});
	}

	const closables = Array.from(modal.querySelectorAll('[modal-close]'));
	closables.forEach(closable => {
		closable.addEventListener('click', e => {
			modal.style.display = 'none';
		});
    });
}

const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'index.css';
head.appendChild(link);