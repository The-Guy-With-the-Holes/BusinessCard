        
        
    class LinkDisplay {
        constructor(projects = null, sizes = null) {
            this.containerId = 'link_display'; 
            this.projects = projects; 
            // Set default sizes if not provided
            this.sizes = sizes || {
                mobile: { width: 600, columns: 2 },
                tablet: { width: 900, columns: 3 },
                desktop: { width: Infinity, columns: 4 } // Infinity means any width larger than tablet
            };
        }

        makeLinkDisplay(linksPerLine) {
            let container = createElement('div',{id:this.containerId, style:`display:grid; grid-template-columns:repeat(${linksPerLine}, 1fr); gap:10px';`}) 
            document.body.append(container);
        }

        addToLinkDisplay(item) {
            let linkToAdd = createElement('div',{className:'link_container', innerHTML:`<a href="${item[3]}">
                    <img src="${item[1]}" alt="${item[0].split(' ')[0]}" />
                    <p><strong>${item[0].split(' ')[0]}</strong></p>
                </a>
                <p>${item[2]}</p>
            `});
            document.getElementById(this.containerId).append(linkToAdd);
        }

        initializeProjects() {
        this.projects.forEach(project => this.addToLinkDisplay(project));
    }

    adjustGrid() {
        const width = window.innerWidth;
        if (width < this.sizes.mobile.width) {this.makeLinkDisplay(this.sizes.mobile.columns);} 
        else if (width < this.sizes.tablet.width) { this.makeLinkDisplay(this.sizes.tablet.columns);} 
        else {this.makeLinkDisplay(this.sizes.desktop.columns);}
    }
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.adjustGrid();
                this.initializeProjects();
                window.addEventListener('resize', () => this.adjustGrid());
            });
        }
    }

    const projects = [
        ['P.W.M', '/projects/P.W.M/pi-pico.jpg', 'A password manager project', '/projects/P.W.M/index.html'],
        [`S.P.I.N`, '/projects/S.P.I.N/stepper-motor.jpg', 'A stepper motor imaging project', '/projects/S.P.I.N/index.html'],
        ['WASAP', '/projects/doorbell/arcade_button.jpg', 'A Python Powered Doorbell', '/projects/doorbell/index.html'], 
        ['Router Management', '/projects/router/router-management.jpg', 'A webpage for router management', 'http://www.bloodweb.net:3000/Guest_network_3_control.html']
    ];

const customSizes = {
    mobile: { width: 480, columns: 2 },
    tablet: { width: 768, columns: 3 },
    desktop: { width: 1200, columns: 4 }
};

// Custom sizes are optional  
const projectDisplay = new LinkDisplay(projects, customSizes);
projectDisplay.init();
