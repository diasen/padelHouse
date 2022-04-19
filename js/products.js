import { BASE_URL } from './configs/configs.js';
import { filteringAnArray } from './libs/filterArray.js';

async function getRackets() {
  let response = await axios.get(BASE_URL + '/rackets');
  let racketsData = response.data;
  console.log(racketsData);

  let cards = document.querySelector('.racketsCards');

  document.querySelector('.loading-gif').innerHTML = '';

  racketsData.forEach(({ id, brand, title, price, img_url }) => {
    cards.innerHTML += `

                <div class="card">
                    <div>
                        <img src="${img_url}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body prod-card">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${brand}</h6>
                        <p class="card-price"> NOK ${price}</p>
                        <a href="productdetails.html?id=${id}" class="btn btn-primary view-product__btn btn-lg">View product</a>
                    </div>
                </div>
  `;
  });

  let search = document.querySelector('.search');
  let searchResults = document.querySelector('.racketsCards');

  search.onkeyup = function () {
    searchResults.innerHTML = '';

    let filteredArray = filteringAnArray(racketsData, search.value);

    filteredArray.forEach(({ id, brand, title, price, img_url }) => {
      cards.innerHTML += `
              <div class="card">
                <div>
                    <img src="${img_url}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2">${brand}</h6>
                    <p class="card-price"> NOK ${price}</p>
                    <a href="productdetails.html?id=${id}" class="btn btn-primary view-product__btn btn-lg">View product</a>
                </div>
              </div>
    `;
    });
  };
}
getRackets();
