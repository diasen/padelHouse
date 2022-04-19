// featured products
export const featuredHtml = (array, domElm) => {
  array.forEach(({ id, brand, title, price, img_url, featured }) => {
    if (featured === true) {
      return (document.querySelector(domElm).innerHTML += `
            
                <div class="card">
                    <div>
                        <img src="${img_url}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2">${brand}</h6>
                        <p class="card-text"> NOK ${price}</p>
                        <a href="productdetails.html?id=${id}" class="btn btn-primary view-product__btn btn-lg">View product</a>
                    </div>
                </div>
            `);
    }
  });
};
