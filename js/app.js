/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavItems(){
    let nav = document.querySelector('ul');
    for (const section of sections) {
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a class='menu__link' 
                                href='#${section.getAttribute('id')}'>
                                ${section.getAttribute('data-nav')}
                            </a>`;
        navItem.addEventListener('click', function(event){
            event.preventDefault();
            section.scrollIntoView({
                block: 'start', // vertical alignment
                inline: 'start', // horizontal alignment
                behavior: 'smooth',
            });
        });
        nav.appendChild(navItem);
    }
}

// Add class 'active' to section when near top of viewport
function setCurrentSectionActive(){
    for (const section of sections) {
        let sectionPosition = section.getBoundingClientRect(); // to get section position
        if(sectionPosition.top >= 0){ // section in viewport
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavItems();
// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', setCurrentSectionActive);

