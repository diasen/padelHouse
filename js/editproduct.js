import alert from './components/alert.js';
import { BASE_URL, headers } from './configs/configs.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

let brand = document.querySelector('#brand');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let price = document.querySelector('#price');
let imageOne = document.querySelector('#imageOne');
let imageTwo = document.querySelector('#imageTwo');
let checkBox = document.querySelector('#featuredCheck');
const form = document.querySelector('.form');

async function getSpecificRacket() {
  // Extract URL to a variable
  const response = await axios.get(`${BASE_URL}/rackets/${id}`);

  // Bug fix destructoring not working
  let rackets = response.data;

  brand.value = rackets.brand;
  title.value = rackets.title;
  description.value = rackets.description;
  price.value = rackets.price;
  imageOne.value = rackets.img_url;
  imageTwo.value = rackets.img_url2;
  checkBox.checked = rackets.featured;
}

getSpecificRacket();

form.onsubmit = async function (event) {
  event.preventDefault();
  let updatedRacket = {
    brand: brand.value,
    title: title.value,
    description: description.value,
    price: price.value,
    img_url: imageOne.value,
    img_url2: imageTwo.value,
    featured: checkBox.checked,
  };

  const response = await axios.put(
    `${BASE_URL}/rackets/${id}`,
    updatedRacket,
    headers,
  );

  alert('alert-success', 'Product has been updated successfully');

  console.log(response);
};
