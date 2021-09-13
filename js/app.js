
let sections = document.querySelectorAll('section');

// build the nav
function buildDynamicMenu(){
    let nav = document.querySelector('ul');
    let index = 1;
    for (const section of sections) {
        let navItem = document.createElement('li');
        navItem.setAttribute('id', 'item'+index);
        navItem.innerHTML = `<a class='menu__link' 
                                href='#${section.getAttribute('id')}'>
                                ${section.getAttribute('data-nav')}
                            </a>`;
        navItem.addEventListener('click', function(event){
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
            setMenuItemActive(navItem.getAttribute('id'));
        });
        nav.appendChild(navItem);
        index++;
    }
}

function setMenuItemActive(navItemId){
    let navItems = document.querySelectorAll('li');
    for (const item of navItems) {
        let itemId = item.getAttribute('id');
        if(navItemId == itemId){
            if(!item.classList.contains('link__active')){
                item.classList.add('link__active');
            }
        }else{
            item.classList.remove('link__active');
        }
    }
}

// Add class 'active' to section when near top of viewport
function setCurrentSectionActive(){
    for (const section of sections) {
        // to get section position
        let sectionPosition = section.getBoundingClientRect(); 
        if( sectionPosition.top + (sectionPosition.height / 2) >= 0 && 
            sectionPosition.bottom <= sectionPosition.height){ // section in viewport
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');// add active class to this section
                let sectionId = section.getAttribute('id');
                sectionId = sectionId.replace('section', '');
                setMenuItemActive('item'+sectionId);
            }
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

function scrollToTop(){
    // scroll to first section
    sections[0].scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

// Build dynamic menu 
buildDynamicMenu();
// Set sections as active while scrolling
document.addEventListener('scroll', setCurrentSectionActive);

