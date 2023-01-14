import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = creatPicCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

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

galleryContainer.addEventListener('click', onGalleryContainer)

function onGalleryContainer(evt) {
    evt.preventDefault();
    const isGalleryLinkEl = evt.target.classList.contains('gallery__image')
    if (!isGalleryLinkEl) {
        return;
    }
    
    const originalPic = evt.target.dataset.source;
    console.log(originalPic);
    
}
// клік тільки по тегу <a>, всі інші області ігноруються.