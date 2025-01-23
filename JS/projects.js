let linkdisplay = {} 
const LinkContainer = document.querySelector('.link-display')
if (LinkContainer){
    // document.querySelector('.link-display').remove();
    linkdisplay = {
        containerId: LinkContainer.id || 'link_display',
        items: null // use default
    }
}

// let linkdisplay=userSettings.link_display||null;



class LinkDisplay {

    constructor(settings) {

        this.defaultSettings = {
            
            see_more: 0,
            projects: null, // use default
            sizes: null // use default
        }
        this.document_container = document.getElementById(linkdisplay.containerId) || document.body; 
        this.projects = linkdisplay.projects || [       
            ['P.W.M', '/projects/P.W.M/pi-pico.jpg', 'A password manager project', '/projects/P.W.M/index.html'],
            [`S.P.I.N`, '/projects/S.P.I.N/stepper-motor.jpg', 'A stepper motor imaging project', '/projects/S.P.I.N/index.html'],
            ['WASAP', '/projects/doorbell/arcade_button.jpg', 'A Python Powered Doorbell', '/projects/doorbell/index.html'], 
            ['Router Management', '/projects/router/router-management.jpg', 'A webpage for router management', 'http://www.bloodweb.net:3000/Guest_network_3_control.html'],
            ['Mega-Towel', '/projects/router/router-management.jpg', "Custom vinyl towels (you're worth it)", 'http://www.bloodweb.net:3000/Guest_network_3_control.html'],
            ['Scripts', '/projects/scripts/script.png', 'Programs (from bash to python)', '/projects/scripts/index.html'],
        ]
        ; 
        // Set default sizes if not provided
        this.sizes = linkdisplay.sizes || {
            mobile: { width: 480, columns: 3 },
            tablet: { width: 768, columns: 4 },
            desktop: { width: Infinity, columns: 5 } // Infinity means any width larger than tablet
        };
        this.seeMoreCount = linkdisplay?.see_more || 3; //this.projects.length;
        
        // Merge default settings with user settings
        this.settings = { ...this.defaultSettings, ...settings };

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
        seeMoreButton.innerText = 'Show more';
        seeMoreButton.addEventListener('click', () => {
            this.currentIndex += this.seeMoreCount;
            this.renderProjects();
        });
        this.document_container.appendChild(seeMoreButton);
    }
  
    adjustGrid() {
        const width = window.innerWidth;
        if (width < this.sizes.mobile.width) {return this.sizes.mobile.columns ;} 
        else if (width < this.sizes.tablet.width) { return this.sizes.tablet.columns;} 
        else { return this.sizes.desktop.columns;}
    }

    setContainerWidths() {
        const width = window.innerWidth;
        let widthToSet = '';
        if (width < this.sizes.mobile.width) { widthToSet='30vw'; } 
        else if (width < this.sizes.tablet.width) { widthToSet='22vw'; } 
        else { widthToSet='20vw'; }

        document.querySelectorAll('.link_container').forEach( link => {
            link.style.width = widthToSet;
        }); 
    }

    init() {
        // Remove previously created containers (normally not needed)
        if ( document.getElementById('link_display') ) { document.getElementById('link_display').remove(); }
        // Make a new container
        const link_container = createElement('div',{id:'link_display', style:`display:grid; grid-template-columns:repeat(${this.adjustGrid()}, 1fr); gap:10px';`}) 
 
        for (let i=0; i<this.seeMoreCount; i++) {
            let link_project=this.createLink(this.projects[i]);
            link_container.append(link_project);
        }
        // Add the container to the document
        this.document_container.append(link_container);
        
        //generate see_more button if seemore count is less than total projects // otherwise do nothing
        //if(this.seeMoreCount<this.projects.length){this.addSeeMoreButton()}
        
    }

}

// Custom sizes are optional  
const projectDisplay = new LinkDisplay();

document.addEventListener('DOMContentLoaded', () => {
    // create the container
    projectDisplay.init();
    // set the width of the containers
    projectDisplay.setContainerWidths();

    // Add event listener to adjust grid when window is rezised
    window.addEventListener('resize', () => {
        const linkDisplayContainer = document.getElementById('link_display');
        console.log('rezising');
        if (linkDisplayContainer) {
            linkDisplayContainer.style.gridTemplateColumns = `repeat(${projectDisplay.adjustGrid()}, 1fr)`;
        }
    });
});