const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imgInfo = document.getElementById('imgInfo');
const imgTitle = document.getElementById('imgTitle');
const imgDescription = document.getElementById('imgDescription');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let selectedIndex = null;

// Create Prev and Next buttons
prevButton.innerText = 'Zurück';
nextButton.innerText = 'Vorwärts';

prevButton.classList.add('navButton');
nextButton.classList.add('navButton');

// Append buttons to popup
imgInfo.appendChild(prevButton);
imgInfo.appendChild(nextButton);

imageIndexes.forEach((i, index) => {
    const image = document.createElement('img');
    image.src = `/images/bild-tag-${i}.jpg`;
    image.alt = `Bild von Tag ${i}`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        // popup
        popup.style.transform = 'translateY(0)';
        selectedImage.src = `/images/bild-tag-${i}.jpg`;
        selectedImage.alt = `Bild von Tag ${i}`;
        imgTitle.innerText = titles[index];
        imgDescription.innerText = descriptions[index];
        selectedIndex = index;
    });

    gallery.appendChild(image);
});

function showImage(index) {
    const i = imageIndexes[index];
    selectedImage.src = `/images/bild-tag-${i}.jpg`;
    selectedImage.alt = `Bild von Tag ${i}`;
    imgTitle.innerText = titles[index];
    imgDescription.innerText = descriptions[index];
}

prevButton.addEventListener('click', () => {
    if (selectedIndex > 0) {
        selectedIndex--;
        showImage(selectedIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (selectedIndex < imageIndexes.length - 1) {
        selectedIndex++;
        showImage(selectedIndex);
    }
});

selectedImage.addEventListener('click', (e) => {
      popup.style.transform = 'translateY(-100%)';
      selectedImage.src = '';
      selectedImage.alt = '';
      imgTitle.innerText = '';
      imgDescription.innerText = '';
});

function toggleAbout() {
    document.getElementById('about-1').classList.toggle('active');
}