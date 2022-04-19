import alert from './components/alert.js';
import { BASE_URL, headers } from './configs/configs.js';

let addProductForm = document.querySelector('.form');

addProductForm.onsubmit = async function (event) {
  event.preventDefault();
  const brand = document.querySelector('#brand');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const img_url = document.querySelector('#imageOne');
  const img_url2 = document.querySelector('#imageTwo');

  try {
    let newProduct = {
      brand: brand.value,
      title: title.value,
      price: price.value,
      description: description.value,
      img_url: img_url.value,
      img_url2: img_url2.value,
    };

    let response = await axios.post(`${BASE_URL}/rackets`, newProduct, headers);
    console.log(response);

    alert('alert-success', 'Product has been created successfully');
    brand.value = '';
    title.value = '';
    price.value = '';
    description.value = '';
    img_url.value = '';
    img_url2.value = '';
  } catch (error) {
    alert('alert-danger', 'There was an error creating new product');
  }
};
