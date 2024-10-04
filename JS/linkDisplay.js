// Dependencies: JS/keyFunctions.js (createElement)
// optional: userSettings.
//    userSettings:{
//            link_display:{
//                containerId:'id_of_container', // else use document.body
//                items: [
//                  ['Project Name', 'image.jpg', 'Description', 'link.html'],
//                  ['Project Name 2', 'image2.jpg', 'Description2', 'link2.html'],
//                  ...
//                ] // else use default projects[]
//    }
// }

let linkdisplay=userSettings.link_display||null;

class LinkDisplay {

    constructor() {
        this.document_container = document.getElementById(linkdisplay.containerId) || document.body; 
        this.projects = linkdisplay.projects || [        
            ['P.W.M', '/projects/P.W.M/pi-pico.jpg', 'A password manager project', '/projects/P.W.M/index.html'],
            //[`S.P.I.N`, '/projects/S.P.I.N/stepper-motor.jpg', 'A stepper motor imaging project', '/projects/S.P.I.N/index.html'],
            ['WASAP', '/projects/doorbell/arcade_button.jpg', 'A Python Powered Doorbell', '/projects/doorbell/index.html'], 
            //['Router Management', '/projects/router/router-management.jpg', 'A webpage for router management', 'http://www.bloodweb.net:3000/Guest_network_3_control.html']
        ]
        ; 
        // Set default sizes if not provided
        this.sizes = linkdisplay.sizes || {
            mobile: { width: 480, columns: 2 },
            tablet: { width: 768, columns: 3 },
            desktop: { width: Infinity, columns: 4 } // Infinity means any width larger than tablet
        };
        this.seeMoreCount = linkdisplay?.see_more || this.projects.length;
        
    }


    createLink(item) {
        let linkToAdd = createElement('div',{className:'link_container', innerHTML:`<a href="${item[3]}">
                <img src="${item[1]}" alt="${item[0].split(' ')[0]}" />
                <p><strong>${item[0].split(' ')[0]}</strong></p>
            </a>
            <p>${item[2]}</p>
        `});
        return linkToAdd;
    }

    seemoreProjects() {
        //for 
    }

    addSeeMoreButton() {
        const seeMoreButton = document.createElement('button');
        seeMoreButton.innerText = 'See More';
        seeMoreButton.addEventListener('click', () => {
            this.currentIndex += this.seeMoreCount;
            this.renderProjects();
        });
        this.links_container.appendChild(seeMoreButton);
    }
  
    adjustGrid() {
        const width = window.innerWidth;
        if (width < this.sizes.mobile.width) {return this.sizes.mobile.columns ;} 
        else if (width < this.sizes.tablet.width) { return this.sizes.tablet.columns;} 
        else { return this.sizes.desktop.columns;}
    }
    init() {
        // Remove previously created containers (normally not needed)
        if ( document.getElementById('link_display') ) { document.getElementById('link_display').remove(); }
        // Make a new container
        const link_container = createElement('div',{id:'link_display', style:`display:grid; grid-template-columns:repeat(${this.adjustGrid()}, 1fr); gap:10px';`}) 
 
        this.projects.forEach( project => {
            let link_project=this.createLink(project);
            if(this.seeMoreCount > 0 && this.currentIndex + this.seeMoreCount < this.projects.length) {
                console.log('adding see more button');
            }
            else { link_container.append(link_project); }
        });
        //generate see_more button if seemore count is less than total projects // otherwise do nothing
        if(this.seeMoreCount<this.projects.length){this.addSeeMoreButton()}
        // Add the container to the document
        this.document_container.append(link_container);
    }
}

// Custom sizes are optional  
const projectDisplay = new LinkDisplay();
document.addEventListener('DOMContentLoaded', () => {
    // create the container
    projectDisplay.init();
    // Add event listener to adjust grid when window is rezised
    window.addEventListener('resize', () => {
        const linkDisplayContainer = document.getElementById('link_display');
        console.log('rezising');
        if (linkDisplayContainer) {
            linkDisplayContainer.style.gridTemplateColumns = `repeat(${projectDisplay.adjustGrid()}, 1fr)`;
        }
    });
});

// let linkdisplay = userSettings.link_display || null;

// class LinkDisplay {

//     constructor() {
//         this.document_container = linkdisplay?.containerId?document.getElementById(linkdisplay.containerId)||createElement('div',{id:linkdisplay.containerId}) : document.body; 
//         this.links_container = createElement('div',{id:'link_display'});
//         this.projects = linkdisplay?.projects || [        
//             ['P.W.M', '/projects/P.W.M/pi-pico.jpg', 'A password manager project', '/projects/P.W.M/index.html'],
//             [`S.P.I.N`, '/projects/S.P.I.N/stepper-motor.jpg', 'A stepper motor imaging project', '/projects/S.P.I.N/index.html'],
//             ['WASAP', '/projects/doorbell/arcade_button.jpg', 'A Python Powered Doorbell', '/projects/doorbell/index.html'], 
//             ['Router Management', '/projects/router/router-management.jpg', 'A webpage for router management', 'http://www.bloodweb.net:3000/Guest_network_3_control.html']
//         ]; 
//         this.sizes = linkdisplay?.sizes || {
//             mobile: { width: 480, columns: 2 },
//             tablet: { width: 768, columns: 3 },
//             desktop: { width: Infinity, columns: 4 } // Infinity means any width larger than tablet
//         };

//         this.seeMoreCount = linkdisplay?.see_more || 0;
//         this.currentIndex = 0;

//         this.renderProjects();
//     }

//     renderProjects() {
//         //this.document_container.innerHTML = ''; // Clear the container

//         const fragment = document.createDocumentFragment();
//         const projectsToShow = this.seeMoreCount > 0 ? this.projects.slice(0, this.currentIndex + this.seeMoreCount) : this.projects;

//         projectsToShow.forEach(project => {
//             const projectElement = this.createProjectElement(project);
//             fragment.appendChild(projectElement);
//         });

//         this.links_container.appendChild(fragment);

//         if (this.seeMoreCount > 0 && this.currentIndex + this.seeMoreCount < this.projects.length) {
//             this.addSeeMoreButton();
//         }
//         // Add the link container to the DOM target
//         this.document_container.append(this.links_container);
//     }

//     createProjectElement(project) {
//         const [title, imageUrl, description, link] = project;
//         const projectElement = createElement('a',{className:'link_container'});

//         const img = document.createElement('img');
//         img.src = imageUrl;
//         projectElement.appendChild(img);

//         const titleElement = createElement('p',{className:'strong',innerText: title});
//         projectElement.appendChild(titleElement);

//         const descriptionElement = document.createElement('p');
//         descriptionElement.innerText = description;
//         projectElement.appendChild(descriptionElement);

//         const linkElement = document.createElement('a');
//         linkElement.href = link;
//         linkElement.innerText = 'Learn More';
//         projectElement.appendChild(linkElement);

//         return projectElement;
//     }

//     addSeeMoreButton() {
//         const seeMoreButton = document.createElement('button');
//         seeMoreButton.innerText = 'See More';
//         seeMoreButton.addEventListener('click', () => {
//             this.currentIndex += this.seeMoreCount;
//             this.renderProjects();
//         });
//         this.links_container.appendChild(seeMoreButton);
//     }
// }

// // Initialize the LinkDisplay class
// new LinkDisplay();