const url = "https://www.course-api.com/javascript-store-products";
const productsContainer = document.querySelector(".products-container");
const loading = document.querySelector(".loading");

const fetchProducts = async () => {
  try {
    //loading
    productsContainer.innerHTML = `<div class="loading"></div>`;
    const resp = await fetch(url);
    const products = await resp.json();
    displayProducts(products);
  } catch (error) {
    productsContainer.innerHTML = `<p class="error">there was an error...</p>`;
  }
};

fetchProducts();
const displayProducts = (products) => {
  return (productsContainer.innerHTML = products
    .map(({ fields, id }) => {
      const { image, name, price } = fields;
      const formattedPrice = price / 100;
      return `<a href="product.html?id=${id}" class="single-product">
            <img src=${image[0].url} alt=${name}
              class="single-product-img img">
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${formattedPrice}</span>
            </footer>
          </a>`;
    })
    .join(""));
};
