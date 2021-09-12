
let sections = document.querySelectorAll('section');

// build the nav
function buildDynamicMenu(){
    let nav = document.querySelector('ul');
    for (const section of sections) {
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a class='menu__link' 
                                href='#${section.getAttribute('id')}'>
                                ${section.getAttribute('data-nav')}
                            </a>`;
        nav.appendChild(navItem);
    }
}

// Add class 'active' to section when near top of viewport
function setCurrentSectionActive(){
    for (const section of sections) {
        // to get section position
        let sectionPosition = section.getBoundingClientRect(); 
        if(sectionPosition.top >= 0){ // section near top of viewport
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');// add active class to this section
            }
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

// Build dynamic menu 
buildDynamicMenu();
// Set sections as active while scrolling
document.addEventListener('scroll', setCurrentSectionActive);

