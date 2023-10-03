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

let draggedItem = null;
let draggedItemParent = null; 

images.forEach(function (image) {
    
image.addEventListener('dragstart', function (e) {
    draggedItem = this;
    draggedItemParent = this.parentElement;
    
    // Create a clone of the dragged image and adjust its size for the drag preview
    let clone = this.cloneNode(true);
    clone.style.width = '50px';
    clone.style.height = '50px';
    const dragContainer = document.getElementById('drag-container');
    dragContainer.innerHTML = ''; // Clear previous drag previews
    dragContainer.appendChild(clone);
    
    // Set the drag image to be the clone and adjust the positioning under the cursor
    e.dataTransfer.setDragImage(clone, 25, 25);  // 25, 25 offsets center the image under the cursor
    
    setTimeout(() => {
        this.style.opacity = '0.5';
    }, 0);
});
    
    // When dragging ends
    image.addEventListener('dragend', function () {
        this.style.opacity = '1';
    });

    // Loop through each image container div for dragover and drop events
    image.parentElement.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    document.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    // Drop event
    image.parentElement.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedItem !== this.querySelector('img')) {
            let targetImage = this.querySelector('img');
            draggedItemParent.appendChild(targetImage);
            this.appendChild(draggedItem);
        }
        draggedItem.style.opacity = '1';
    });

});



