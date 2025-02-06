function openlink(link) {
    window.open(link);
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".galleryimage img");
    const popup = document.createElement("div");
    popup.classList.add("image-popup");
    popup.innerHTML = `
      <div class="popup-content">
        <button class="close-popup">&times;</button>
        <img src="" alt="Popup Image">
        <div class="popup-caption"></div>
      </div>
    `;
    document.body.appendChild(popup);
  
    const popupImage = popup.querySelector("img");
    const popupCaption = popup.querySelector(".popup-caption");
    const closeButton = popup.querySelector(".close-popup");
    const popupContent = popup.querySelector(".popup-content");
  
    images.forEach((img) => {
      img.addEventListener("click", function () {
        popupImage.src = this.src;
        popupCaption.innerHTML = this.nextElementSibling.innerHTML;
        popup.style.display = "flex";
      });
    });
  
    closeButton.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    popup.addEventListener("click", (e) => {
      if (!popupContent.contains(e.target)) { 
        popup.style.display = "none"; // Close only if clicking outside the content
      }
    });
  });
  