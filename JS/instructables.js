let createElement = function (element, properties) {
    let el = document.createElement(element);
    for (var prop in properties) { el[prop] = properties[prop]; }
    return el;
}


document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class "instruction"
    const instructions = document.querySelectorAll('.instruction');

    let instruction_steps=1

    // Loop through each instruction element
    instructions.forEach(function(instruction) {
        // Get content, image URLs, and data-title from data attributes
        const content = createElement('div',{innerHTML:instruction.dataset.content});
        const imageUrls = instruction.dataset.image?.split(' ')??null; // Split by space to get multiple URLs
        const dataTitle = instruction.dataset.title;
        const dataType = instruction.dataset.style??'ul'
        const contentContainer=createElement('div');
        const contentElement = createElement(dataType,{innerHTML:instruction.dataset.content});

        // Add title element if data-title exists in the instruction
        if (dataTitle) {
            const title = createElement('h2',{innerHTML:dataTitle})
            contentContainer.appendChild(title)
        }
        // Create elements for content and images
        // Loop through image URLs and create <img> elements
        imageUrls!==null?imageUrls.forEach(function(imageUrl) {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            contentContainer.appendChild(imageElement);
        }):console.log('No images to append for instruction',dataTitle);        
        // Append content to the instruction element
        // contentElement.appendChild(content);
        contentContainer.appendChild(contentElement)
        instruction.appendChild(contentContainer);
        instruction_steps++;
    });
});

