// ===== MENU =====
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


// ===== SCROLL IMAGES =====
const gridImages = document.querySelectorAll('.home-grid img, .grid img');

if (gridImages.length > 0) {
  window.addEventListener('scroll', () => {
    gridImages.forEach((img, i) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        setTimeout(() => {
          img.classList.add('show');
        }, i * 150);
      }
    });
  });
}


// ===== FORM =====
const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

if (form && responseMsg) {
  form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
      responseMsg.textContent = 'Please fill all fields.';
      responseMsg.style.color = '#DB281A';
      return;
    }

    responseMsg.textContent = 'Message sent successfully.';
    responseMsg.style.color = '#236DF6';

    form.reset();
  });
}


// ===== ROW ANIMATION =====
const rows = document.querySelectorAll('.row');

if (rows.length > 0) {
  window.addEventListener('scroll', () => {
    rows.forEach(row => {
      const rect = row.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        row.classList.add('show');
      }
    });
  });
}


// ===== HORIZONTAL SCROLL (COVID) =====
const track = document.getElementById('track');
const section = document.querySelector('.horizontal-section');

if (track && section) {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const top = section.offsetTop;
    const height = section.offsetHeight;

    let progress = (scroll - top) / height;

    if(progress >= 0 && progress <= 1){
      let move = progress * (track.scrollWidth - window.innerWidth);
      track.style.transform = `translateX(-${move}px)`;
    }
  });
}


// ===== PARALLAX PROFILE =====
const profile = document.querySelector('.profile-wrapper');

if(profile){
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    profile.style.transform = `translateY(${scroll * 0.05}px)`;
  });
}


// ===== CAROUSELS (CORRECTO) =====
function setupCarousel(carouselId, leftId, rightId){
  const carousel = document.getElementById(carouselId);
  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);

  if(carousel && left && right){
    left.onclick = () => carousel.scrollLeft -= 300;
    right.onclick = () => carousel.scrollLeft += 300;
  }
}

// 🔴 LLAMADAS (AQUÍ, FUERA DE TODO)
setupCarousel("carousel1", "left1", "right1");
setupCarousel("carousel2", "left2", "right2");


// ===== MODAL (SOLO ILLUSTRATIONS) =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

if (modal && modalImg) {
  document.querySelectorAll(".illustrations-page img").forEach(img=>{
    img.onclick = ()=>{
      modal.classList.add("active");
      modalImg.src = img.src;
    };
  });

  modal.onclick = ()=> modal.classList.remove("active");
}