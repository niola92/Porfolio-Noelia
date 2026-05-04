// ===== MODAL =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const leftBtn = document.getElementById("modal-left");
const rightBtn = document.getElementById("modal-right");


// ===== GALERÍAS =====
const galleries = {
  app: [
    "app/app1.png",
    "app/app2.png",
    "app/app4.png",
    "app/app5.png",
    "app/app6.png",
    "app/app7.png",
    "app/app8.png",
    "app/app9.png",
    "app/app10.png",
    "app/app11.png",
    "app/app12.png",
    "app/app13.png",
    "app/app14.png",
    "app/app15.png",
    "app/app3.png"
  ],
  web: [
    "web/web1.jpg",
    "web/web2.png",
    "web/web3.png",
    "web/web5.png",
    "web/web6.png",
    "web/web7.png",
    "web/web8.png",
    "web/web9.png",
    "web/web10.png",
    "web/web11.png",
    "web/web4.png"
  ]
};

let currentGallery = [];
let currentIndex = 0;


// ===== CLICK GENERAL =====
document.querySelectorAll("img").forEach(img => {

  // ❌ NO CLICK
  if (img.classList.contains("no-click") || img.classList.contains("logo")) return;

  // 🔹 GALERÍA
  if (img.classList.contains("open-gallery")) {
    img.addEventListener("click", () => {
      const key = img.dataset.gallery;

      if (!galleries[key]) return;

      currentGallery = galleries[key];
      currentIndex = 0;

      modal.classList.add("active");
      modalImg.src = currentGallery[currentIndex];
    });
    return;
  }

 

  // 🔹 ZOOM NORMAL
  img.addEventListener("click", () => {
    currentGallery = [];
    modal.classList.add("active");
    modalImg.src = img.src;
  });

});


// ===== FLECHAS DEL MODAL =====
if (leftBtn && rightBtn) {

  rightBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentGallery.length) return;

    currentIndex = (currentIndex + 1) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
  });

  leftBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentGallery.length) return;

    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
  });
}


// ===== TECLADO =====
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") {
    modal.classList.remove("active");
    return;
  }

  if (!currentGallery.length) return;

  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
  }

  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
  }
});


// ===== CERRAR MODAL =====
if (modal && modalImg) {
  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}


// ===== CAROUSELS (ILLUSTRATIONS) =====
function setupCarousel(carouselId, leftId, rightId){
  const carousel = document.getElementById(carouselId);
  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);

  if(!carousel || !left || !right) return;

  left.addEventListener("click", (e) => {
    e.stopPropagation();
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });

  right.addEventListener("click", (e) => {
    e.stopPropagation();
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });
}

// 🔥 IMPORTANTE
setupCarousel("carousel1", "left1", "right1");
setupCarousel("carousel2", "left2", "right2");