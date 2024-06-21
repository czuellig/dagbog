const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3];
const selectedIndex = null;

imageIndexes.forEach(i => {
   const image = document.createElement('img');
   image.src = `/images/bild-tag-${i}.jpg`;
   image.alt = `Bild von Tag ${i}`;
   image.classList.add('galleryImg');

   image.addEventListener('click', () => {
      // popup
   });

   gallery.appendChild(image);

});