import { BASE_URL } from './configs/configs.js';
import { getAPI } from './libs/apiCall.js';
import {
  saveToLocalStorage,
  getStorageItem,
} from './libs/localStorageFunctions.js';

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get('id');
console.log(id);

const racketDetails = await getAPI(`${BASE_URL}/rackets/${id}`);
console.log(racketDetails);

document.querySelector('.details-racket__container').innerHTML += `
        <div class="row">
            <div class="col-sm-12 col-md-8">
                <div id="carouselExampleControlsNoTouching"  class="carousel slide carousel-dark" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${racketDetails.img_url}" class="d-block w-100 carousel-img mx-auto" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${racketDetails.img_url2}" class="d-block w-100 carousel-img mx-auto" alt="...">
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon carousel-controlls" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon carousel-controlls" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>  
          </div>
            <div class="col-sm-12 col-md-4">
                <div class="rackets-info__container">
                    <div class="rackets-info">
                        <h1 class="card-title">${racketDetails.title}</h1>
                        <h5 class="card-subtitle">${racketDetails.brand}</h5>
                        <p class="details-price"> NOK ${racketDetails.price}</p>
                        <div id="liveAlertPlaceholder"></div>
                        <button class="details-btn addToCart-btn" id="myButton2" data-id="${id}" data-img_url="${racketDetails.img_url}" data-brand="${racketDetails.brand}" data-title="${racketDetails.title}"  data-price="${racketDetails.price}" >Add to cart</button>
                    </div>
                    <div class="details-specification">
                      <p class="details-specification">Weight: 375 g</p>
                      <p class="details-specification">Profile: 38 mm</p>
                      <p class="details-specification">Shape: Drop</p>
                      <p class="details-specification">Balance: Middel</p>
                    </div>  
                </div>
            </div>
            <div class="col-sm-12">
                <div class="details-description">
                    <h6>Description</h6>
                    <p class"details-description__text">${racketDetails.description}</p>
                </div>
            </div>
    `;

let addToCart = document.querySelectorAll('.addToCart-btn');

addToCart.forEach((element) => {
  element.onclick = function () {
    console.log(element);

    let localStorageObject = {
      id: element.dataset.id,
      brand: element.dataset.brand,
      price: element.dataset.price,
      title: element.dataset.title,
      img_url: element.dataset.img_url,
    };
    console.log(localStorageObject);
    let addedToCart = getStorageItem('addedToCart');
    console.log(addedToCart);

    let isInStorage = addedToCart.find(
      (productObject) => productObject.id === localStorageObject.id,
    );

    if (isInStorage === undefined) {
      addedToCart.push(localStorageObject);
      saveToLocalStorage('addedToCart', addedToCart);
      element.innerHTML = 'Added to cart';
      element.style.backgroundColor = 'green';
      setTimeout(() => {
        element.innerHTML = 'Remove from cart';
        element.style.backgroundColor = '#db504a';
      }, 2000);
    } else {
      let removedElementArray = addedToCart.filter(
        (productObject) => productObject.id !== localStorageObject.id,
      );
      element.innerHTML = 'Removed from cart';
      element.style.backgroundColor = '#db504a';

      saveToLocalStorage('addedToCart', removedElementArray);
    }
  };
});
