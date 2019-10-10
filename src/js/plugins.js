//Flickity
import '../../node_modules/flickity/dist/flickity.min.css';
import '../../node_modules/flickity/dist/flickity.pkgd.min';

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
const flkty = new Flickity( '.main-carousel', {
    // options
});
