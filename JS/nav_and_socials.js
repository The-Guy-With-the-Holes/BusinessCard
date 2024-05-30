
//####################################################################################//
//                          NAVIGATION TOOLS

    // Potential new Nav:
        // *Home             (Landing page)
        // *Profile          (Up to date info)
        // *About            (About me)
        // *Portfolio        (Things i made)
        // *Blog-Posts       (Bloodweb blog posts)
        // *Contact          (Detailed Link Tree)

NAV=[
    ["🏠", "Home", "/index.html", "Toggle_Vertical_Nav('Close');ScrollHome()"],
    ['X', "Profile","/Profile/index.html"],
    ['🎋︎', 'Linktree', '/linktree.html'],
    ['📓', 'Blog-Posts', '/blog-posts/optimal-ips-blog.html'],
    //   ['links','/links/all-my-links.html']
]

current_page='Home'

Nav_Settings={
    // The positions of items in the arrays
    name:1, //"Home","About"    
    icon:0, // “⌂"
    ref:2, // http://www.bloodweb.net
    // Optional
    js:3, // console.log('do this')
}

function Create_Nav(nav_pages){
    FindCurrentPage();
    AddMainNav(nav_pages);
    AddVerticalNav(nav_pages);
}

function FindCurrentPage(){
    for (let i = NAV.length; i>0; i--){ let x=NAV[i-1]; // console.log('nav:',x)
        if(window.location.href.includes(x[2])){console.log('Page is assumed:',x[1]);return current_page=x[1];}
    }   
    console.log('FindCurrentPage could not figure out which page this is: assuming "Home"');
}   

function AddMainNav(nav_pages){
    let Nav_Switch =createElement('a',{id:'Vertical_Nav_Switch',className:'Nav_Switch NavListitem',href:"javascript:Toggle_Vertical_Nav('Open')",innerHTML:"☰ Menu"});
    let nav_img=createElement('img',{'style':'float:right;','id':"banner_img",'src':"/favicon.ico",'alt':"Favicon Image"});
    // let nav_banner=createElement('h1',{ id:'Nav_Heading','innerHTML:'<img id="banner_img" src="favicon.ico" alt="Favicon Image"/> <p> Jackewers.com</p>'})
    let main_nav=createElement('nav',{className:"Horizontal_NavBar"}) 
    main_nav.append(nav_img,Nav_Switch);

    for (let i = nav_pages.length; i--;){
        let n = nav_pages[i];
        let a = createElement('a',{className:"NavListitem",href:n[Nav_Settings.ref],name:n[Nav_Settings.name],innerHTML:n[Nav_Settings.name]})
        main_nav.prepend(a);
    }
    document.body.insertBefore(main_nav,dQ('header')?dQ('header').nextSibling:dQ('main'))
}

function AddVerticalNav(nav_pages){
    // Create the main navwithe embedded the close button
    let nav=createElement('div',{className:'Vertical_NavBar'});
    //,innerHTML:`<button id="Nav-Close-btn" onclick="Toggle_Vertical_Nav('Close')"> </button>`})
    for (let i = 0; i<nav_pages.length; i++ ){ let x = nav_pages[i];
        let li=createElement('li',{className:`NavListitem`});
        let a=createElement('a',{href:x[Nav_Settings.ref],innerHTML:`${x[Nav_Settings.name]==current_page?'<p class="NavListSelected">•</p>':''} <p>${x[Nav_Settings.name]}</p>`}); 
        if (x[Nav_Settings.js]) a.setAttribute('onclick',x[Nav_Settings.js]);
        li.append(a);
        nav.append(li);
    }

    document.body.append(nav);
    Toggle_Vertical_Nav('Close'); // Close the newely created Nav
}
        
function Toggle_Vertical_Nav(type){ 
    if(!type){return error;} else{type = type.toLocaleLowerCase();}
    let Nav = document.querySelector('.Vertical_NavBar');
    let Get_Nav_Switch=document.getElementById('Vertical_Nav_Switch'); 

    if(Nav){
        switch (type) {
            case 'close':
            Get_Nav_Switch.setAttribute('href',"javascript:Toggle_Vertical_Nav('Open')")
            Nav.style.display="none";    
            break;
            case 'open':
            Get_Nav_Switch.setAttribute('href',"javascript:Toggle_Vertical_Nav('Close')")
            Nav.style.display="block";
            break;
        }
    }
}
            
// after page load check window is root and nav exists

function attach_nav_listener() {
    
    // Horizontal Nav
    if (window == window.top && dQ('nav') !== null){ // at root?
        console.log(' Nav listener attached');
        
        window.addEventListener('scroll',function(){
        let header=document.querySelector('header');
        let nav=document.querySelector('nav');
        
        if(this.scrollY > header.clientHeight-header.clientHeight/2){
            nav.classList.add('sticky_nav')
        }
        else{nav.classList.remove('sticky_nav')}
        })
    }
    else{console.log('No Horizontal nav to attach listener to')}

    //Vertical Nav
    V_Nav=dQ('.Vertical_NavBar');
    if(V_Nav){
        window.addEventListener('click',(event) => {
        const isClickInsideNavBar = verticalNavBar.contains(event.target);

        if (!isClickInsideNavBar && V_Nav.style.display!='none'){
            Toggle_Vertical_Nav('close')
        }
        })
    }
    else{console.log('Vertical Navbar not found')
}
}


    

//####################################################################################//
//                          STYLING TOOLS
class ColorShifter {
    constructor() {
        this.colors = { // GCS.GPV is used to access root CSS
        light_A: getComputedStyle(document.documentElement).getPropertyValue('--light-color-theme-A'),
        light_B: getComputedStyle(document.documentElement).getPropertyValue('--light-color-theme-B'),
        dark_A: 'black',
        dark_B: 'gray',
        };

        this.targets = "header,.ColorShifter,#about-projects"; // Basic elements to be used
        this.hvt = "main,footer,.Socials_Container"; // High value targets (rotates in reverse)
        this.alt_color_targets = 'body,.Vertical_NavBar'; // Render in different color
        this.timeout_targets = '.unicorns'; // Targets to toggle the 

        this.icons = ['☼' , '☽']; // light / dark icons  
        this.type = 'Light'; // default state
        this.mode = "a"; // Use alpha / beta colour mode
        this.deg = 70; // starting deg
        this.inc = 0.9; // how many deg to inc each interval
        this.attach_LD_switch = true;
        this.timer = null; // Initialize timer as null

        this.monitorTimeoutTargets();
        this.ColorShift(); // set default state
        this.AttachLightDarkSwitcher();
    }

    inc_deg() { this.deg += this.inc;
        if (this.deg > 365) {this.deg = 0;}
    }

    startColorShift() {if (this.timer === null) {this.timer = setInterval(this.ColorShift.bind(this), 20);}}

    stopColorShift() { if (this.timer !== null) {clearInterval(this.timer); this.timer = null;}}

    toggleColorShift() {if (this.timer === null) {this.startColorShift();} else {this.stopColorShift();}}

    ColorShift() {
        const elementsList = [this.targets, this.hvt, this.alt_color_targets];
        const colorRef = "--" + this.type.toLowerCase() + "-color-theme-";
        let color = getComputedStyle(document.documentElement).getPropertyValue(colorRef + this.mode.toUpperCase());

        elementsList.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, i) => {
            if (index === 2) { // Special handling for alt_color_targets
            color = this.mode !== "a"
                ? getComputedStyle(document.documentElement).getPropertyValue(colorRef + "A")
                : getComputedStyle(document.documentElement).getPropertyValue(colorRef + "B");
            }
            const deg = (index === 1 && i >= 0) ? this.deg : -this.deg;
            element.style.background = `linear-gradient(${deg}deg, ${color})`;
        });
        });
        this.inc_deg();
    }

    AttachLightDarkSwitcher() {
        if (this.attach_LD_switch === true) {
        let slider = document.createElement('span');
        slider.id = 'LD-slider';
        slider.className = this.type+'-slider';
        slider.innerHTML = `<div id="LD-icon" class="${this.type}-icon"></div>`;
        slider.setAttribute('onclick', "LDswitch()");
        document.body.prepend(slider);
        document.body.classList.add(`${this.type}-Body`);
        }
    }

    monitorTimeoutTargets() { // toggle the animation when timeout targets clicked
        const targets = document.querySelectorAll(this.timeout_targets);
        targets.forEach(target => {
        target.addEventListener('click', () => {
            this.toggleColorShift();
        });
        });
    }
}
// Initialise the color shifter
const colorShifter = new ColorShifter();
// Uses initialised class
function LDswitch(){
    let slider = document.getElementById('LD-slider');
    let Switch = document.getElementById('LD-icon');  
    
    type = document.body.classList.contains('Light-Body')?"Dark":"Light"
    colorShifter.type=type
    slider.setAttribute('class',type+'-slider');
    Switch.setAttribute('class',type+'-icon');
    document.body.setAttribute('class',type+'-Body');
    colorShifter.ColorShift()
}

//           Socials

class socials {
    constructor(userSettings = {}) {
        this.settings = {
            // createFooter: true,
            // createLinkTree: true,
            // type: 'balls',
            // branding: true,
            // link_settings_position: 3,
            ...userSettings
        };

        this.meta = {
            name: 'Jack Ewers',
            birthday: '10-29-1995' // American format
        };

        this.links = [
            ['Jackewers.com', '/', 'http://www.jackewers.com/favicon.ico', 'footer:no'],
            ['Phone: +61 479 000 429', 'tel:+61479000429', '/i/Icons/Mail.png'],
            ['Email: @JackEwers.com', 'mailto:webmaster@jackewers.com', '/i/Icons/Phone.jpeg'],
            ['LinkedIn', 'https://www.linkedin.com/in/jack-ewers-14a155212/', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEUAfrv///8AerkAcLUpgbzE2urI2OnR4u4Adbfs9PlUksUAeLgAbbPN3+30+PuQt9fk7vVpoMtHjsK0z+RAhr8AZbC+1ejb6PIAarKXvdqFs9Z9rtNspc1Xm8ktisGlxt+AqdBjmMfy32DQAAAFJElEQVR4nO2d2ZKjIBRAEckEJcGFjlsW0///k6OxZ5JOFOwBK1znnpepmipbTi67LCQYaAQBi2i+JMjwz5G/O0U28OODjEzou9NjB03kXxnFoMsw9UemzAEXmAGRl4OMbEAXmAHeyJvMHnxcesS+l5GnFQSmC81JdjLp7t3pcMMu7WSSVQSmC03SyayixPSIgKSHdyfCFYeUqPDdiXBFqMgaGpkB3pDzesrMmVyAd8vu0Mu7U4AgCBCo6KArqP06ERZ/ZlkW54TDbppoeLnWaptGUVTuVZJRwN0GzpJNFNwp1UlAjU542gdPRMUFZHCoaOWzS0d6AjhCFcOU1Cuyqd6dtp9Cp1z6+WlwsWknXYIA2LyOOGpcggjU+IHmkU4m+AVJhusyWR8aSJ9CmN4lCAr27iTOhtcmmQhOHXAYay2/U8Pp1hhdggLKLAI/mWXKGEiFFhrqsh6ZAclnYWGWCa5AZHYvPf8xGSDV2bpk1pTN5lQAEZQKYFVVM6VmmQLMKKDSDwB6aiDlf1ZHE0qR6eAmGQUlk3WINQ3OKNOXGgXIpbM56YY0aQynxPQwTUaTULoyf6Bsuk8DqcAMTE7PQpsCvCFYMlZuyk+ALqRfALl9cWkZrLJ/h4bn9JuK+oAZlgFRkXobyZ6oOPEdoIZ/lLCq6OVyEYcQclQeoAJ6SBAEQZD/DkopYezjC8b6/4DZnFFB8vhUq66vdBvvReVGNf06sCVWGt0WzE0y9gNqn3h6gNP42r52yQO5ba8xcd5tijMd51cbdtY98G3+k9OsLSfHsWV7ZW6X9jOVaoheZ2doXmgeKB9G2kKcVDqpcotPkTCX0WEb7et+vfx0dGQg95C8+2Ydnivz5K/cH7m7umApGcoTfVT+PuFwHLiQjDD83UfSsyubZWT4xZzDHjg6qgcWkeHnn6h01G5slpARMz7IPds4yWkLyOjX403ZuOgPuJcRR/PqohFc7CZzLlNlPyr79yczexvXMs3HdP9Fz9Z+a7xrmXrG0oIJWu9k9v9UYG5E1hnNsYwVynY9qE8yge1neq9kbEPjlUzwaRcav2RqKxfPZCK7fOaXTPBpNez0TMau4fRMRlq1m57JBFaFxjcZq0UhC8ukG9WqYju/w7ax2ea2nIzc1vmu2oUdVcWacp5QarMDcSkZucnC8F41UX7I5sXHQ5my4c+Zn4tkzhiUWLQ0y8hs8rG5I3GcMclpcxjLIjKbielwejTHxqY6W0Jm+zH161LzoNpmPnABGTndkRcX4y/R+iWj68eHo+v0HrE5Wsq9TKldcUtNM1E2raZ7mURbHRl3uex9kkn1sxIiN+Qzr2RM+4d3hrbGKxlT1RpOn6XgnUxkWqTODR88fJIx7uqiORyZjfGNhi07PskUxjbPsNPdJxlzA17pqzOfZMxdq52+NvRIRpo/Gxv2IPskYz7o1rDVHWVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQZg0yKtIgX5cp03yjeSA1n4UTKql7pXlhtIY81pH/9Anz3VvU8EabTfRUz0+fsH+lhQuCIKsGzJ1LRuiFjJy4ChR6Ji7Op/MD3hCbzcJ+ESoSHd6dCFccImJ1kINP0E4F0LVrenjdyaQrKTRh2slIeFcvjcGPspMJtqsoNLQb4ZJZY1n/4f2BFf3VzGUM3obH/XkVt3umCwY8p33dxjZcml1Dlxnuyvy6ATwBbUOTweI3D+SEwl4CpEIAAAAASUVORK5CYII='],
            ['Github', 'https://github.com/The-Guy-With-the-Holes', 'https://github.com/favicon.ico'],
            ['Doulingo', 'https://www.duolingo.com/profile/Spike.edu', 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico'],
            ['Crypto.com', 'https://crypto.com/nft/profile/spikedeathcore?tab=collectibles', 'https://crypto.com/__assets/favicon-32x32.png?v=0f6f06777a5d4bc338bfeca412628e1c']
        ];

        // Create Footer
        if (this.settings.createFooter) { this.createFooter(); }
        // Create Linktree
        if (this.settings.createLinkTree) { this.createLinkTree(userSettings.user); }
    }



    // dQ(selector) {
    //     return document.querySelector(selector);
    // }

    createLinkTree(user) {
        const main = createElement('main', { id: 'AML_container' });

        const make_title = () => {
            const header = createElement('h1', { innerHTML: `<img src="${user[0]}"><h1>${user[1]}</h1>` });
            main.prepend(header);
        };

        this.links.forEach(link => {
            const linkElement = createElement('div', {
                className: 'AML_link',
                innerHTML: `<a href="${link[1]}">${link[0]}</a>`,
                style: `background-image:url(${link[2]})`
            });
            main.append(linkElement);
        });

        const make_footer = () => {
            const footer = createElement('footer', {
                innerHTML: `<p>${this.settings.foot_note ? this.settings.foot_note : 'Bloodweb.net'}</p><img src="./BloodW.png">`
            });
            main.append(footer);
        };

        make_title();
        make_footer();
        document.body.append(main);
    }


    createFooter() {
        const footerSubContainer = createElement('div', { className: `${this.settings.type === "balls" ? 'Horizontal_Socials' : 'Vertical_Socials'} Socials_Container` });
        // let footer = dQ('footer') ? dQ('footer') : createElement('footer', { id: 'footer', style: 'background-color:salmon;' });

        for (let i = 0; i < this.links.length; i++) {
            const x = this.links[i];
            if (x[this.settings.link_settings_position] && x[this.settings.link_settings_position].includes('footer:no')) {
                continue;
            }
            let container, containerContent;
            container = createElement('div', { className: `balls${i % 2 === 0 ? 'x' : 'y'} Rotern` });
            containerContent = createElement('a', {
                href: x[1],
                target: 'blank_',
                innerHTML: `<img src="${x[2]}" class="balls" alt="${x[0]} link"> ${this.settings.type === "balls" && x[2] ? '' : `<p>${x[0]}</p>`}`
            });
            container.append(containerContent);
            footerSubContainer.append(container);
        }

        if (this.settings.branding === true) {
            const bloodworksContainer = createElement('p', {id: 'Bloodworks', 
            style:`${this.settings.branding_position?.includes('bottom')?'bottom':'top'}:0; ${this.settings.branding_position?.includes('left')?'left':'right'}:0;
            `,
                innerHTML: `<p style=" margin:0 min(2vw,16px)">Powered by <a href="http://www.bloodweb.net">Bloodweb.net<img src="/BloodW.png"></img></a></p>`
            });
            footerSubContainer.append(bloodworksContainer);
        }
        document.body.append(footerSubContainer);
    }
}

// Usage
const userSettings = {
    createFooter: true,
    createLinkTree: false,
    foot_note: 'Custom Footer Note', // What, why...?
    type: 'balls',
    branding: true,
    branding_position:'top right',
    link_settings_position: 3,
};

const Socials = new socials(userSettings);


//document.addEventListener('DOMContentLoaded',function(){}


// If Socials.links&&, create footer
document.addEventListener('DOMContentLoaded',function(){
    
  
    Create_Nav(NAV) // nav will always be created

    if (!Socials.links){
        return console.error('ERROR, SOCIAL LINKS NOT DEFINED');
    }
    // if create setting === true >> build
    // Socials.settings.createFooter==true?Socials.createFooter():null;
    Socials.settings.createLinkTree==true?Socials.createLinkTree(['i/web-ready/image_1.jpeg','@the_guy_with_the_holes']):null;  
    
    colorShifter.ColorShift() // add style to new elements

    attach_nav_listener()
    document.addEventListener('click',(event) => {
    
    // if (document)
})
})
