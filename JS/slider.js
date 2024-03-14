const full_screen_slider=true;

// Append fullscreen modal
  if (full_screen_slider == true){ 
    document.body.innerHTML+=`
        <div id="fullscreen-modal" class="fullscreen-modal">
            <div id="fullscreen-modal-content" class="fullscreen-modal-content">
            <!-- This image element will be used to display the fullscreen image -->
            <img src="" alt="Fullscreen Image">
            </div>
        </div>
    `;    
  }

//init slider functionality after body loads
document.addEventListener("DOMContentLoaded", function () {    
    // Initial index for the current image
    var currentIndex = 0;
    // Get the main image element
    var mainImage = document.getElementById("slider_img_main");    
    
    // Get all the slider items
    var sliderItems = document.querySelectorAll(".flex-slider-item");

    // Get the span elements
    var prevButton = document.querySelector("#main-image-container span:nth-child(1)");
    var nextButton = document.querySelector("#main-image-container span:nth-child(3)");

    // Function to update the main image src 
    function updateSliderImage() {    
        // the image to update slider main with
        let new_img=sliderItems[currentIndex].querySelector(".slider_image_slide");
        // Function to remove 'slider_selected' class from sliderItems that conatin it 
        function clear_prev_slide (){ for(let i=0; i<sliderItems.length; i++){ sliderItems[i].classList.contains('slider_selected')?sliderItems[i].classList.remove('slider_selected'):null; } }
    
        mainImage.src = new_img.src;
        clear_prev_slide();
        new_img.parentElement.classList.add('slider_selected');
    }

    // Function to handle next button click
    function handleNextButtonClick() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSliderImage();
    }

    // Function to handle previous button click
    function handlePrevButtonClick() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSliderImage();
    }

   
    // Attach click event listeners
    nextButton.addEventListener("click", handleNextButtonClick);
    prevButton.addEventListener("click", handlePrevButtonClick);

    // Attach click event listener to each slider item
    sliderItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            currentIndex = index;
            updateSliderImage();
        });
    });

        // Get the modal and its content
        let modal = document.getElementById("fullscreen-modal");
        let modalContent = document.getElementById("fullscreen-modal-content");
        // Attach click event listener to main image
        mainImage.addEventListener("click", handleMainImageClick);
        // Function to handle main image click (toggle fullscreen modal)
        function handleMainImageClick() { console.log('main');
            modalContent.querySelector('img').setAttribute('src',mainImage.src);
            modal.classList.toggle("fullscreen-modal-open");
        }

         // Attach click event listener to close the modal on overlay click
         modal.addEventListener("click", function () {
             modal.classList.remove("fullscreen-modal-open");
         });
    
});
