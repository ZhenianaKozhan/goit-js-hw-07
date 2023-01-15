import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = creatPicCardsMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryContainer);

function creatPicCardsMarkup(params) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainer);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});

function onGalleryContainer(evt) {
    evt.preventDefault();
    const isGalleryLinkEl = evt.target.classList.contains('gallery__image')
    if (!isGalleryLinkEl) {
        return;
    }
    
}