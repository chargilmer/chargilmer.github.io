const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
const imageList = [
    {src: 'images/img1.jpg', alt: 'Goose in a cute hat!'},
    {src: 'images/img2.jpg', alt: 'Sky view of Boulder'},
    {src: 'images/img3.jpg', alt: 'Snowy Mountains'},
    {src: 'images/img4.jpg', alt: 'Jackson Hole, Wyoming sign'},
    {src: 'images/img5.jpg', alt: 'Sushi Platter'},

];
imageList.forEach(image=> {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image.src);
    newImage.setAttribute('alt', image.alt);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click',() => {
        displayedImage.src = image.src;
        displayedImage.alt - image.alt;
    });
});
/* Wiring up the Darken/Lighten button */

btn.addEventListener ('click', () => {
    const btnClass = btn.getAttribute ('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    
    }

});
