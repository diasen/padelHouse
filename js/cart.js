import {
  getStorageItem,
  saveToLocalStorage,
} from './libs/localStorageFunctions.js';

let addedToCart = getStorageItem('addedToCart');
let favouriteCards = document.querySelector('.favouriteCards');

let totalPrice = 0;
console.log(addedToCart);

if (addedToCart.length === 0) {
  favouriteCards.innerHTML += ` 
                <div class="col-sm-12">
                  <div class="empty-cart__info">
                    <h1 class="empty-cart__header">
                      You have not added any products to your cart yet!
                    </h1>
                    <div class="btn btn-primary empty-cart__btn">
                      <a href="/products.html">Find products</a>
                    </div>
                  </div>
                </div>
  
  `;
} else {
  addedToCart.forEach(({ id, brand, featured, title, price, img_url }) => {
    favouriteCards.innerHTML += `  

                  <div class="col-sm-12 cart-card cart-details mx-auto">
                    <div>
                      <img src="${img_url}" class="cart-img"></img>
                    </div>
                      <div>
                        <h4 class="cart-header_details">${brand}</h4>
                      </div>
                      <div class="cart-link cart-link_spesific">
                        <a href="productdetails.html?id=${id}">${title}</a>
                      </div>
                      <div>
                        <p class="cart-price">NOK ${price}</p>
                      </div>
                  </div>
`;

    totalPrice += parseInt(price);
  });
  document.querySelector('.checkout-btn_container').innerHTML = `
  <button class="details-btn checkout-btn">Checkout</button>
  `;
  document.querySelector('.checkout-prices').innerHTML = `
            <h5 class="cart-price__header">Your total:</h5>
            <p class="total-price"></p>
  `;
  document.querySelector('.total-price').innerHTML = `NOK ${totalPrice}`;
}
