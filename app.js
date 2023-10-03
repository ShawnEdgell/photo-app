// Get references to modal elements
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".photos-display img");

// Loop through each image and add a click event listener
images.forEach(function (image) {
    image.addEventListener("click", function () {
        modal.style.display = "block"; // Show the modal
        modalImage.src = this.src; // Set the modal image source to the clicked image source
    });
});

// Close the modal when the close button or overlay is clicked
const closeModal = document.querySelector(".close");
modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target === closeModal) {
        modal.style.display = "none"; // Close the modal
    }
});