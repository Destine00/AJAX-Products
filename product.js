const productDOM = document.querySelector(".product");

const url = "https://www.course-api.com/javascript-store-single-product";
const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class='product-loading'>Loading...</h4>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const resp = await fetch(`${url}?id=${id}`);
    const product = await resp.json();
    displayProduct(product);
  } catch (error) {
    productDOM.innerHTML = `<p class="error">there was an error...</p>`;
  }
};
fetchProduct();

const displayProduct = ({ fields }) => {
  const { colors, company, name: title, price, image, description } = fields;
  document.title = title.toUpperCase();
  const formattedPrice = price / 100;
  const colorList = colors
    .map((color) => {
      console.log(color);

      return `<span class="product-color style="background: ${color}"></span>`;
    })
    .join("");

  return (productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${image[0].url}" class="img" alt=${title} />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${formattedPrice}</span>
          <div class="colors">
          ${colorList}
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`);
};
