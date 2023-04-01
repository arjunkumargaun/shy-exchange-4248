let mainbody = document.querySelector("#product-container")
let api = 'https://63c9170d320a0c4c9540575f.mockapi.io/products'



window.addEventListener("load",()=>{
    mensdata()
})

async function mensdata(){
    try {
        let res = await fetch(api)
        let data = await res.json()


        let filtered = data.filter((item)=>{
                if(item.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
              mainbody.innerHTML = renderingdata(filtered)
       


    } catch (error) {
        console.log(error)
    }
}


function renderingdata(data){
    return `
      ${data.map((item)=>{
    return getcard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)
  }).join("")}
  
    `
  }
  function getcard(id,image, title, brand,product_badge , category, price, totalquantity){
    return `
    <div class="card" id="${id}">
    <div class="img_div" id="${id}">
        <a href="#">
          <img src="${image}">
      </a>
      </div>
      <div class="desc">
        <h4>${title}</h4>
        <p>${category}</p>
        <h5>
        ${brand}
        </h5>
        <p id="pricedisplay">${price}</p>
        <p ">${product_badge}</p>
        <div class="button-div">
          <a href="#" class="addtocart" id="${id}">Add to Cart</a>
          <a href="paymentpage.html">Buy Now</a>
        </div>
      </div>
    </div>
                      
      `
  }