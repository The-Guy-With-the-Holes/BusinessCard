const stickyNav = false;
let navAttachAttempts = 0;

function toggleVerticalNav(type) {
  if (!type) { return console.error('toggleVerticalNav needs a type(open/close)'); }
  type = type.toLowerCase();
  let navBar = document.querySelector('#Vertical_NavBar');
  let navSwitch = document.querySelector('#Vertical_NavSwitch');
  console.log(`toggling nav :${type}`);
//   if (nav) {
    if (navBar.style.display === 'none' || navBar.style.display === '') {
        navBar.style.display = 'block';
        navSwitch.innerHTML="⚞";
        setTimeout(() => {
            navBar.classList.add('show');
        }, 10); // Small delay to ensure the display property is applied before the transition
    } else {
        navSwitch.innerHTML="☰";
        navBar.classList.remove('show');
        setTimeout(() => {
            navBar.style.display = 'none';
        }, 500); // Match the transition duration
    }
}

function updateSelectedNavItem() {  
    let navItems = document.querySelectorAll('.NavListItem');
    let selected = document.title
    let selectedText = selected.innerHTML;
    navItems.forEach((item) => {
        if (item.innerHTML === selectedText) {
            item.classList.add('selected');
            console.log('Selected item:', item);
        }
        else { item.classList.remove('selected'); }
    });
}

function attachNavListener() {
    
    if (stickyNav) {
        // Horizontal Nav
        if (window === window.top && document.querySelector('nav') !== null) {
            console.log('Nav listener attached');
            // If timeout is set, end the function
            window.addEventListener('scroll', function () {
                let header = document.querySelector('header');
                console.log('scrolling');
                let nav = document.querySelector('nav');
                if (this.scrollY > header.clientHeight - header.clientHeight / 2) { nav.classList.add('sticky_nav'); }
                else { nav.classList.remove('sticky_nav'); }
            });
        } 
        else {
            navAttachAttempts > 5 ? console.error('No nav found after 5 attempts.. Giving up'):console.log('Failed to attach listener to the nav, retrying..')
            setTimeout(attachNavListener, 1000); // Reattempt attach
            navAttachAttempts++;
        }
    }
    else { console.log('Sticky Nav is disabled'); }

  // Vertical Nav
  let vNav = document.querySelector('#Vertical_NavBar');
  let hNav = document.querySelector('#Horizontal_NavBar');
  let SelectedItem = document.querySelector('#NavListSelected')
  if (vNav) { window.addEventListener('click', (event) => { 
      const isClickInsideVerticalNavBar = vNav.contains(event.target);
          const isClickInsideHorizontalNavBar = hNav.contains(event.target);
          const isClickInsideNavListSelected = SelectedItem.contains(event.target);
          // nav switch clicked
          if (event.target.id=="Vertical_NavSwitch"||event.target.parentElement.id=="Vertical_NavSwitch"){
              vNav.style.display!="none"?toggleVerticalNav('close'):toggleVerticalNav('open');
          }
          // Close the nav if current_page_is clicked or if nav is open and click is not inside 
          else if  ((isClickInsideVerticalNavBar && isClickInsideNavListSelected)
              || (!isClickInsideVerticalNavBar && vNav.style.display !== 'none')) { 
              toggleVerticalNav('close'); 
          }
      console.log('element has been clicked:', event.target ,` Element is inside: NavListSelected:${isClickInsideNavListSelected}  VerticalNav:${isClickInsideVerticalNavBar}`);
  
  })} 
  else { console.log('Vertical/Horizontal Navbar not found'); }
}


// Attach the listener to the nav (open/close vertical nav)
document.addEventListener('DOMContentLoaded', 
    initialiseSettings = () => {
        Settings?.createNav?
            loadHTML('nav', '/components/navbar.html').then(() => { 
                attachNavListener()
                updateSelectedNavItem();
                console.log('Nav loaded and listeners attached') 
            }) :
            console.log('Nav creation disabled, set Settings.createNav=true to enable'); 
    
        Settings?.createFooter?
            loadHTML('footer', '/components/footer.html').then(() => { console.log('Footer loaded') }) :
            console.log('Footer creation disabled, set navSettings.createFooter to true to enable');
    } 
);