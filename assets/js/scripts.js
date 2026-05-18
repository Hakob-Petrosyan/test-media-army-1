const popup = document.getElementById('main-popup');
const popupOverlay = document.getElementById('popupOverlay');
const openPopupButton = document.querySelector('[data-open-popup]');

function closePopup() {
    popup?.classList.remove('active');
    popupOverlay?.classList.remove('active');
}

function openPopup() {
    openPopupButton?.addEventListener('click', () => {
        popup?.classList.add('active');
        popupOverlay?.classList.add('active');
        popupOverlay?.focus();
    });
}

function closeByESC() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
}

function closeByOverlay() {
    popupOverlay?.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
}



openPopup();
closeByESC();
closeByOverlay();