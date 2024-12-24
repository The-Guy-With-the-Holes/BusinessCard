class ImageSlider {
    constructor(settings) {
        // Default settings
        this.defaultSettings = {
            images: [], // the array of image URLs (expandable to include captions, etc.)
            containerId: '', // the id of the container where the slider will be appended
            expandable: false,
            premadeMainContainer:false, // Premake the main container to save on bandwith

            slide_Index: getCookie('lastSlideIndex')||0, // position of the current slide
            TotalIndexMoves: 0, // total number of times the slide has been moved (left or right)
            expandViewkeycount: 0, // number of times the slider has been expanded (fullscreen)
            viewTime:[],

            lastKey: 'none',

            imageCount:true,
            SliderArrows: false,
            sliderDots: true,
            Captions: [false, ".captiontext"],
           
        };

        // Merge default settings with user settings
        this.settings = { ...this.defaultSettings, ...settings };

        // Catch errors before initializing the slider
        if (!this.settings.images || !this.settings.containerId) {
            throw new Error("settings.imageSlider must contain 'images' array and 'containerId'");
        }

        this.initSlider();
    }

    initSlider() {
        const container = dQ(`${this.settings.containerId}`);
        if (!container) {
            throw new Error(`Container with id ${this.settings.containerId} not found`);
        }

        // Build the slider component
        this.buildSlider(container);

        this.settings.expandable && this.createFullscreenModal(container);
        // Attach event listeners
        this.attachEventListeners(container);
    }

    buildSlider(container) {
        // Wrapper for the images
        const imageSliderContainer = createElement('div', { className: 'image-flex-slider' });
        
        // Create slider elements and append to container
        this.settings.images.forEach((imageSrc, index) => {
            const imgContainer = createElement('div', { className: 'flex-slider-item' });
            const imgElement = createElement('img',{loading:'lazy', className: 'slider_image_slide', alt: 'slide', src: imageSrc });
            imgContainer.appendChild(imgElement);
            imageSliderContainer.appendChild(imgContainer);
        });
        container.appendChild(imageSliderContainer)
        
        //  if the container is not premade, make it now
        if(! this.settings.premadeMainContainer ){
            const main_image_container = createElement('div', { id: 'main_image_container'});
        
            const main_image = createElement('img', { id: 'slider_img_main', alt: 'slide', src: this.settings.images[this.settings.slide_Index] });
            main_image_container.appendChild(main_image);

            if (this.settings.SliderArrows) {
                const prev_button = createElement('span', { className: 'slider_prev', innerHTML: '<i><</i>' });
                const next_button = createElement('span', { className: 'slider_next', innerHTML: '<i>></i>' });
                main_image_container.prepend(prev_button);
                main_image_container.append(next_button);
            }

            container.appendChild(main_image_container);
        }
        this.settings.sliderDots && this.addDots(container);
        // Load the first slide
        this.renderSlide(this.settings.la);

    }

    createFullscreenModal(container) {
        container.innerHTML+=`
        <div id="fullscreen-modal" class="fullscreen-modal">
            <div id="fullscreen-modal-content" class="fullscreen-modal-content">
            <!-- This image element will be used to display the fullscreen image -->
            <img src="" alt="Fullscreen Image">
            </div>
        </div>
    `;    
    }

    addDots(container) {

        const dotsContainer = createElement('div',{id:'slider_dot_div'});
        this.settings.images.forEach((image, index) => {

            const dot = createElement('button',{className:'slider_dots',type:'radio',name:'slider_dots',onclick:`currentSlide(${index})`});
            if (index === this.settings.slide_Index) { dot.classList.add('active'); }
            dot.addEventListener('click', () => this.renderSlide(index));
            dotsContainer.appendChild(dot);
        });
        container.appendChild(dotsContainer);
    }

    addCaptions(container) {
        if (this.settings.Captions[0]) {
            const captionsContainer = document.createElement('div');
            captionsContainer.classList.add(this.settings.Captions[1].substring(1)); // Remove the '.' from the class
            container.appendChild(captionsContainer);
        }
    }

    attachEventListeners(container) {
        const prevButton = container.querySelector('.slider_prev');
        const nextButton = container.querySelector('.slider_next');
        const sliderItems = container.querySelectorAll('.slider_image_slide');
        const mainImage = container.querySelector('#slider_img_main');

        if (this.settings.SliderArrows){
            prevButton.addEventListener("click", () => this.renderPrevSlide());
            nextButton.addEventListener("click", () => this.renderNextSlide());
        }
        sliderItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                this.settings.slide_Index = index;
                this.renderSlide();
            });
        });

          let touchstartX = 0;
        let touchendX = 0;

        mainImage.addEventListener('touchstart', (event) => {
            touchstartX = event.changedTouches[0].screenX;
        });

        mainImage.addEventListener('touchend', (event) => {
            touchendX = event.changedTouches[0].screenX;
    
            this.handleSwipeGesture(touchstartX, touchendX);
        });

        mainImage.addEventListener("click", () => this.toggleFullscreenSlider());
        if (this.settings.expandable) {
            const modal = document.getElementById("fullscreen-modal");
            modal.addEventListener("click", () => {
                modal.classList.remove("fullscreen-modal-open");
            });
        }
    }

    handleSwipeGesture(startX, endX) {
        if (startX - endX > 50) {
            this.renderNextSlide();
        }
        if (endX - startX > 50) {
            this.renderPrevSlide();
        }
    }

    renderPrevSlide() {
        this.settings.TotalIndexMoves++;
        this.settings.slide_Index--;
        console.log('Current Index',this.settings.slide_Index);
        this.renderSlide(this.settings.slide_Index);
    }

    renderNextSlide() {
        this.settings.TotalIndexMoves++;
        this.settings.slide_Index++;
        console.log('Current Index',this.settings.slide_Index);
        this.renderSlide();
    }

    
    toggleFullscreenSlider() {
        const modal = document.getElementById("fullscreen-modal");
        const modalContent = document.getElementById("fullscreen-modal-content");
        const mainImage = document.querySelector('.slider_image_slide');

        modalContent.querySelector('img').setAttribute('src', mainImage.src);
        modal.classList.toggle("fullscreen-modal-open");
    }

    renderSlide(n=this.settings.slide_Index) {
        const slides = document.getElementsByClassName("slider_image_slide");
        console.log('Total slides:', slides.length);
        console.log('Requested slide index:', n);
    
        // Catch slider out of index and invert position
        if (n >= slides.length) {
            this.settings.slide_Index = 0;
        } else if (n < 0) {
            this.settings.slide_Index = slides.length - 1;
            console.log('setting slide index to:', this.settings.slide_Index);
        } else {
            this.settings.slide_Index = n;
        }
    
        console.log('Updated slide index:', this.settings.slide_Index);
    
        // Update slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.settings.slide_Index].style.display = "block";
    
        // Update main image
        const main_image = document.getElementById('slider_img_main');
        main_image.src = this.settings.images[this.settings.slide_Index];
    
        // Update dots
        if (this.settings.sliderDots) {
            const slider_Dots = document.getElementsByClassName('slider_dots');
            for (let i = 0; i < slider_Dots.length; i++) {
                slider_Dots[i].className = slider_Dots[i].className.replace(" active", "");
            }
            slider_Dots[this.settings.slide_Index].className += " active";
        }
    }

}

// Initialize the slider
if (Settings.imageSlider) { const imageSlider = new ImageSlider(Settings.imageSlider); }    // try {