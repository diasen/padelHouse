import { BASE_URL, headers } from './configs/configs.js';

async function getProductsAndDelete() {
  let response = await axios.get(`${BASE_URL}/rackets`);
  console.log(response);

  let products = response.data;

  let table = document.querySelector('.tableBody');
  table.innerHTML = '';

  products.forEach(({ id, title, brand, featured }, iteration) => {
    table.innerHTML += `<tr>
				<th scope="row">${iteration + 1}</th>
				<td>${brand}</td>
				<td>${title}</td>
				<td id="featuredOverview">${featured}</td>
				<td>
					<a href="editproduct.html?id=${id}"><i class="fas fa-edit"></i></a>
				</td>
				<td>
					<i class="fas fa-trash-alt" data-id=${id}></i>
				</td>
			</tr>`;
  });

  let deleteButtons = document.querySelectorAll('.fa-trash-alt');
  console.log(deleteButtons);

  deleteButtons.forEach(function (deleteButton) {
    deleteButton.onclick = async function () {
      if (
        confirm(
          'Are you sure you want to delete this product from the database?',
        )
      ) {
        let response = await axios.delete(
          `${BASE_URL}/rackets/${deleteButton.dataset.id}`,
          headers,
        );
        console.log(
          'A button was clicked the id is: ',
          deleteButton.dataset.id,
        );
      } else {
        console.log('Product was not deleted from the database.');
      }

      getProductsAndDelete();
    };
  });
}

getProductsAndDelete();
