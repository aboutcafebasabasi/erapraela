// --- MUSIC CONTROL ---
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.style.animation = "pulse 2s infinite";
    } else {
        bgMusic.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playBtn.style.animation = "none";
    }
    isPlaying = !isPlaying;
}

// --- HAMBURGER MENU ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.burger').classList.remove('toggle');
    });
});

// --- PHOTO GALLERY MODAL ---
const photoModal = document.getElementById("fullGalleryModal");

function openFullGallery() {
    photoModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeFullGallery() {
    photoModal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == photoModal) {
        closeFullGallery();
    }
    if (event.target == document.getElementById("videoGalleryModal")) {
        closeVideoGallery();
    }
    if (event.target == document.getElementById("videoPlayerModal")) {
        closeVideoPlayer();
    }
}

// ============================================
// VIDEO GALLERY FUNCTIONS
// ============================================

const videoModal = document.getElementById("videoGalleryModal");
const videoPlayerModal = document.getElementById("videoPlayerModal");
const mainVideoPlayer = document.getElementById("mainVideoPlayer");
const videoPlayerTitle = document.getElementById("videoPlayerTitle");

// Preview video play on hover (Halaman Utama)
const previewVideo = document.querySelector('.video-thumbnail-video video');
if (previewVideo) {
    const previewCard = document.querySelector('.video-preview-card');
    previewCard.addEventListener('mouseenter', () => {
        previewVideo.play().catch(e => console.log('Autoplay prevented'));
    });
    previewCard.addEventListener('mouseleave', () => {
        previewVideo.pause();
        previewVideo.currentTime = 0;
    });
}

// Thumbnail videos play on hover (Di dalam Modal)
document.querySelectorAll('.video-thumb-video').forEach(thumb => {
    const video = thumb.querySelector('video');
    if (video) {
        thumb.addEventListener('mouseenter', () => {
            video.play().catch(e => console.log('Autoplay prevented'));
        });
        thumb.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});

// Buka Video Gallery Modal
function openVideoGallery() {
    videoModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Tutup Video Gallery Modal
function closeVideoGallery() {
    videoModal.style.display = "none";
    document.body.style.overflow = "auto";
    mainVideoPlayer.pause();
    mainVideoPlayer.src = "";
    
    // Pause all thumbnail videos in modal
    document.querySelectorAll('.video-thumb-video video').forEach(v => {
        v.pause();
        v.currentTime = 0;
    });
}

// Play Video
function playVideo(videoSrc, title) {
    videoModal.style.display = "none";
    videoPlayerModal.style.display = "block";
    
    mainVideoPlayer.src = videoSrc;
    videoPlayerTitle.textContent = title || 'Our Special Video';
    
    mainVideoPlayer.play();
}

// Tutup Video Player
function closeVideoPlayer() {
    videoPlayerModal.style.display = "none";
    mainVideoPlayer.pause();
    mainVideoPlayer.src = "";
    document.body.style.overflow = "auto";
    
    videoModal.style.display = "block";
}

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});