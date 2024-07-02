


document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class "instruction"
    const instructions = document.querySelectorAll('.instruction');
    // Check if there are any instructions present
    if (instructions.length === 0) {
        console.log(`No instructions found.
To use instructables.js, ensure your HTML contains elements with the class "instruction".
Each ".instruction" element should have data attributes for content (data-content), images (data-image), and optionally a title (data-title) and style (data-style).
Example:
<div class="instruction" data-content="Step 1: Gather materials." data-image="image1.jpg image2.jpg" data-title="Gathering Materials" data-style="ul"></div>`
        );        
    }
    else {
    
    let instruction_steps=1

    // Loop through each instruction element
    instructions.forEach(function(instruction) {
        // Get content, image URLs, and data-title from data attributes
        const imageUrls = instruction.dataset.image?.split(' ')??null; // Split by space to get multiple URLs
        const dataTitle = instruction.dataset.title;
        const dataType = instruction.dataset.style??'ul'
        let contentContainer=createElement(dataType=="header"?dataType:'div');
        
        // Add title element if data-title exists in the instruction
        if (dataTitle) {
            const title = createElement(dataType!=="header"?'h2':'h1',{innerHTML:dataTitle})
            contentContainer.appendChild(title)
        }
        // Create elements for content and images
        // Loop through image URLs and create <img> elements
        imageUrls!==null?imageUrls.forEach(function(imageUrl) {
            const imageElement = document.createElement('img');
            contentContainer.appendChild(imageElement);
            isValidImage(imageUrl).then(isValid => {
                if (isValid) {
                    imageElement.src = imageUrl;
                    }
                    else{
                        console.log(imageUrl,'is not a valid image URL, skipping...')}
            })
        }):console.log('No images to append for instruction',dataTitle);        
        
        console.log(contentContainer)
        
        let contentElement = createElement(dataType=="header"?"p":dataType,{innerHTML:instruction.dataset.content});
        contentContainer.appendChild(contentElement);
        instruction.appendChild(contentContainer);
        instruction_steps++;
    });
    }
});
