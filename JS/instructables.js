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
        const imageUrls = instruction.dataset.image.split(' '); // Split by space to get multiple URLs
        const dataTitle = instruction.dataset.title;
        const contentElement = document.createElement('div');
        
        // Add title element if data-title exists in the instruction
        if (dataTitle) {
            const title = createElement('h2',{innerHTML:dataTitle})
            contentElement.appendChild(title)
        }
        // Create elements for content and images
        
        // Loop through image URLs and create <img> elements
        imageUrls.forEach(function(imageUrl) {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            contentElement.appendChild(imageElement);
        });
        
        // Append content to the instruction element
        contentElement.appendChild(content);
        instruction.appendChild(contentElement);
        instruction_steps++;
    });
});

