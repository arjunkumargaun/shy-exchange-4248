let localStrage_data = JSON.parse(localStorage.getItem("veiwproduct")); // getting data
let image = document.querySelector("#image");
let details = document.querySelector("#details");
console.log(localStrage_data)



window.addEventListener("load", () => {
  excute(localStrage_data);
});

// for deisplay data
function excute(data) {
  image.innerHTML = "";
  details.innerHTML = "";

  let imag = document.createElement("img");
  imag.setAttribute("src", data.src);
  imag.className = "product-image";
  image.append(imag);

  let div = document.createElement("div");
  div.id = "my-div";
  let badge = document.createElement("p");
  badge.id = "badge";
  let product_name = document.createElement("h2");
  product_name.id = "name";
  let product_Code = document.createElement("p");
  product_Code.id = "code";
  let star = document.createElement("div");
  let price = document.createElement("h4");
  price.id = "price";
  let availity = document.createElement("p");
  availity.className = "avail";
  let condition = document.createElement("p");
  condition.id = "condition";
  let brand = document.createElement("p");
  brand.id = "brand";
  let addToCart = document.createElement("div");
  addToCart.id = "addToCart";
  let quantity = document.createElement("p");
  quantity.id = "quantity";
  let addToCardButton = document.createElement("button");
  let buy_now = document.createElement("button");
  buy_now.id = "buy";
  badge.textContent = data.badge ?? "New !";
  product_name.textContent = data.name;
  product_Code.textContent = "Product Code:ISRC2018";
  star.innerHTML = `
    <i class="fa-solid fa-star">
    </i><i class="fa-solid fa-star">
    </i><i class="fa-solid fa-star">
    </i><i class="fa-regular fa-star">
    </i><i class="fa-regular fa-star"></i>`;

  price.textContent = data.price;
  availity.innerHTML = "in stock";
  condition.textContent = `${data.badge ?? New}`;
  brand.textContent = data.brand ?? "burberry";
  quantity.textContent = "1";
  addToCardButton.textContent = "Add to cart";
  buy_now.textContent = "Buy Now";
  addToCart.append(addToCardButton, buy_now);
  div.append(
    badge,
    product_name,
    product_Code,
    star,
    price,
    availity,
    condition,
    brand,
    quantity,
    addToCart
  );
  details.append(div);
}
