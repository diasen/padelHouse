import { BASE_URL } from './configs/configs.js';
import { getAPI } from './libs/apiCall.js';
import { featuredHtml } from './components/writeHtmlToDom.js';

// Herobanner

const heroBanner = await getAPI(BASE_URL + '/hero-imgs/1');

const heroImg = heroBanner.img_url;
document.querySelector('.hero-image').style.backgroundImage = `
        url(${heroImg})
    `;

// Featured products

const racketResponse = await getAPI(BASE_URL + '/rackets/');
console.log(racketResponse);
featuredHtml(racketResponse, '.featured-container');
