// Ambil semua gambar
const images = document.querySelectorAll('.image-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Klik gambar untuk buka lightbox
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});

// Klik X untuk tutup
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Klik luar gambar untuk tutup
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});
