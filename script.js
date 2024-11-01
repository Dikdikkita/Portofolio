// script.js

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const homeButton = document.getElementById('home-button');

// Event listener untuk tombol Home
homeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default dari tautan
    location.reload(); // Refresh halaman
});

// Event listener untuk menu toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menambahkan animasi masuk untuk elemen
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.classList.add('fade-in');
});

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Mengurangi intensitas cahaya dengan mengubah nilai alpha
    document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))`;
});

//background

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1; // Ukuran partikel
        this.speedX = Math.random() * 3 - 1.5; // Kecepatan horizontal
        this.speedY = Math.random() * 3 - 1.5; // Kecepatan vertikal
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mengubah arah partikel jika keluar dari canvas
        if (this.size > 0.2) this.size -= 0.1; // Mengurangi ukuran partikel
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Warna partikel
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Menambahkan partikel saat mouse bergerak
canvas.addEventListener('mousemove ', (e) => {
    const x = e.x;
    const y = e.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y));
    }
});

// Menggambar partikel
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Menghapus canvas
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Menghapus partikel yang sudah kecil
        if (particle.size <= 0.2) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

animate();

// script.js

// ... kode sebelumnya ...

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah perilaku default dari form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Buat objek untuk data yang akan dikirim
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Kirim data ke email (Anda perlu menggunakan backend untuk ini)
    console.log('Form Data:', formData);
    
    // Reset form setelah pengiriman
    contactForm.reset();
    
    alert('Pesan Anda telah dikirim!'); // Notifikasi sederhana
});