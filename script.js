const menuButton = document.querySelector('.menu');
const navList = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navList.classList.toggle('open');

    // Add logic to hide the menu when clicking outside of it
    if (!menuButton.classList.contains('open')) {
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
});

function closeMenuOnClickOutside(event) {
    if (!event.target.matches('.menu') && !event.target.matches('nav ul')) {
        menuButton.classList.remove('open');
        navList.classList.remove('open');
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}


// change image
const imagePath = [
    './images/home-1.png',
    './images/home-2.png',
];

function changeImage() {
    const articleElement = document.querySelector('.article');
    const randomIndex = Math.floor(Math.random() * imagePath.length);
    const path = imagePath[randomIndex];
    articleElement.style.backgroundImage = `url('${path}')`;
};

setInterval(changeImage, 4000);
