// Hymnal Link Dropdown
const musicDropdownLink = document.querySelector('.musicDropdownLink');
const linkDropdown = document.querySelector('.linkDropdown');
const hideLinks = document.querySelector('.hideLinks');

musicDropdownLink.addEventListener('click',function(){
    linkDropdown.classList.toggle('hideLinks');
});

// Links button dropdown
const linksDropdownBtn = document.querySelector('.linksDropdownBtn');

linksDropdownBtn.addEventListener('click',function(){
    linkDropdown2.classList.toggle('hideLinks');
});