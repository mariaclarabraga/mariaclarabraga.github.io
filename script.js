function openlink(link) {
    window.open(link);
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".galleryimage img");
    
    // Check if popup already exists, otherwise create it
    let popup = document.querySelector(".image-popup");
    if (!popup) {
      popup = document.createElement("div");
      popup.classList.add("image-popup");
      popup.innerHTML = `
        <div class="popup-content">
          <button class="close-popup">&times;</button>
          <img src="" alt="Popup Image">
          <div class="popup-caption"></div>
        </div>
      `;
      document.body.appendChild(popup);
    }
  
    const popupImage = popup.querySelector("img");
    const popupCaption = popup.querySelector(".popup-caption");
    const closeButton = popup.querySelector(".close-popup");
    const popupContent = popup.querySelector(".popup-content");
  
    images.forEach((img) => {
      img.addEventListener("click", function () {
        popupImage.src = this.src;
        popupCaption.innerHTML = this.nextElementSibling.innerHTML;
        popup.style.display = "flex";
        setTimeout(() => popup.classList.add("active"), 10);
      });
    });
  
    closeButton.addEventListener("click", () => {
      popup.classList.remove("active");
      setTimeout(() => (popup.style.display = "none"), 300);
    });
  
    popup.addEventListener("click", (e) => {
      if (!popupContent.contains(e.target)) {
        popup.classList.remove("active");
        setTimeout(() => (popup.style.display = "none"), 300);
      }
    });
  });

  

  
  document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1000) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });

    // Smooth scrolling
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
