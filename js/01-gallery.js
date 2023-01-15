import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = creatPicCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainer);

function creatPicCardsMarkup(params) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
}

function onGalleryContainer(evt) {
    evt.preventDefault();
    const isGalleryLinkEl = evt.target.classList.contains('gallery__image')
    if (!isGalleryLinkEl) {
        return;
    }

    const originalPic = evt.target.dataset.source;
    creatLightbox(originalPic);
}

function creatLightbox(pic) {
    const instance = basicLightbox.create(`
		<img src="${pic}">
	`).show()
}
