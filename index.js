let bagsdec=document.getElementById("bags_div");
let homedec=document.getElementById("homedecore_div");
let mendec=document.getElementById("men_div");
let womendec=document.getElementById("women_div");
let kidsdec=document.getElementById("kids_div");
let giftsdec=document.getElementById("gift_div");
let URL=`https://63c9170d320a0c4c9540575f.mockapi.io/products`;
let giftArray=[];
let giftdec=document.getElementById("gift_div");
let array1=[];
let menArray=[];
let womenArray=[];
let kidsArray=[];
let bagsArray=[];
window.addEventListener("load",(e)=>{
    e.preventDefault();
    async function getdata(){
        try{
            let res = await fetch(URL);
            let data= await res.json();
            console.log(data);
            womendata(data);
            mendata(data);
            mydata(data);
            kidsdata(data);
            bagsdata(data);
            giftdata(data);
        }catch(err){
            console.log(err);
        }
    }
    getdata()
})

// *************************************** women******************

function womendata(data){
    let filteredData=data.filter((element) => {
        if(element.category=="women"){
            return true;
        }
        return false;
    });
    console.log(filteredData)
    for(let i=0; i<4; i++){
        womenArray.push(filteredData[i]);
    }
    let finalData=womenArray.map((item)=>{
        return `${womencard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)}`;
        
    })
    womendec.innerHTML=finalData;
}
console.log(finalData);
console.log(womenArray)
function womencard(id,image, title, brand,product_badge , category, price, totalquantity){

    let vari=

  `<div class="card" id="${id}">
  <div class="img_div" id="${id}">
      <a href="">
        <img src="${image}">
    </a>
    </div>
    <div class="desc">
      <h2>${title}</h2>
      <p>${category}</p>
      <h4>
      ${brand}
      </h4>
      <p id="pricedisplay">${price}</p>
      <p ">${product_badge}</p>
      <div class="button-div">
        <a href="#" class="addtocart" id="${id}">Add to Cart</a>
        <a href="#">Buy Now</a>
      </div>
    </div>
  </div>`;
    return vari;
}

// *************************************** men******************

function mendata(data){
    let filteredData=data.filter((element) => {
        if(element.category=="mens"){
            return true;
        }
        return false;
    });
    console.log(filteredData)
    for(let i=0; i<4; i++){
        menArray.push(filteredData[i]);
      }
      // console.log(menArray)
    let finalData=menArray.map((item)=>{
      
        return `${mencard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)}`;
        
    })
    mendec.innerHTML=finalData;
}
console.log(finalData);
console.log(menArray)
function mencard(id,image, title, brand,product_badge , category, price, totalquantity){

    let vari=`<div class="card" id="${id}">
    <div class="img_div" id="${id}">
        <a href="">
          <img src="${image}">
      </a>
      </div>
      <div class="desc">
        <h2>${title}</h2>
        <p>${category}</p>
        <h4>
        ${brand}
        </h4>
        <p id="pricedisplay">${price}</p>
        <p ">${product_badge}</p>
        <div class="button-div">
          <a href="#" class="addtocart" id="${id}">Add to Cart</a>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>`;
    return vari;
}

// *************************************** women******************

function bagsdata(data){
    let filteredData=data.filter((element) => {
        if(element.category=="bags"){
            return true;
        }
        return false;
     
    });

    for(let i=0; i<4; i++){
        
        bagsArray.push(filteredData[i]);
      console.log(bagsArray)
    }
    let finalData=bagsArray.map((item)=>{
        return `${bagscard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)}`;
        
    })
    bagsdec.innerHTML=finalData;
}

function bagscard(id,image, title, brand,product_badge , category, price, totalquantity){
   
    let vari=`<div class="card" id="${id}">
    <div class="img_div" id="${id}">
        <a href="">
          <img src="${image}">
      </a>
      </div>
      <div class="desc">
        <h2>${title}</h2>
        <p>${category}</p>
        <h4>
        ${brand}
        </h4>
        <p id="pricedisplay">${price}</p>
        <p ">${product_badge}</p>
        <div class="button-div">
          <a href="#" class="addtocart" id="${id}">Add to Cart</a>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>`;
    return vari;
}
// *************************************** home decore ******************
function mydata(data){
    let filteredData=data.filter((element) => {
        if(element.category=="homedecore"){
            return true;
        }
        return false;
       
    });

    for(let i=0; i<4; i++){
      
        array1.push(filteredData[i]);

    }
    let finalData=array1.map((item)=>{
        return `${card(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)}`;
        
    })
    homedec.innerHTML=finalData;
}

function card(id,image, title, brand,product_badge , category, price, totalquantity){
 
    let vari=`<div class="card" id="${id}">
    <div class="img_div" id="${id}">
        <a href="">
          <img src="${image}">
      </a>
      </div>
      <div class="desc">
        <h2>${title}</h2>
        <p>${category}</p>
        <h4>
        ${brand}
        </h4>
        <p id="pricedisplay">${price}</p>
        <p ">${product_badge}</p>
        <div class="button-div">
          <a href="#" class="addtocart" id="${id}">Add to Cart</a>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>`;
    return vari;
}




function  kidsdata(data){
    let filteredData=data.filter((element) => {
        if(element.category=="kids"){
            return true;
        }
        return false;
      
    });

    for(let i=0; i<4; i++){
  
        kidsArray.push(filteredData[i]);
      console.log(kidsArray)
    }
    let finalData=kidsArray.map((item)=>{
        return `${kidscard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)}`;
        
    })
    kidsdec.innerHTML=finalData;
}

function kidscard(id,image, title, brand,product_badge , category, price, totalquantity){
  
    let vari=`<div class="card" id="${id}">
    <div class="img_div" id="${id}">
        <a href="">
          <img src="${image}">
      </a>
      </div>
      <div class="desc">
        <h2>${title}</h2>
        <p>${category}</p>
        <h4>
        ${brand}
        </h4>
        <p id="pricedisplay">${price}</p>
        <p ">${product_badge}</p>
        <div class="button-div">
          <a href="#" class="addtocart" id="${id}">Add to Cart</a>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>`;
    return vari;
}






function  giftdata(data){
  let filteredData=data.filter((element) => {
      if(element.category=="gifts"){
          return true;
      }
      return false;
    
  });

  for(let i=0; i<4; i++){

      giftArray.push(filteredData[i]);
    console.log(giftArray)
  }
  let finalData=giftArray.map((item)=>{
      return `${giftcard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)}`;
      
  })
  giftsdec.innerHTML=finalData;
}

function giftcard(id,image, title, brand,product_badge , category, price, totalquantity){

  let vari=`<div class="card" id="${id}">
  <div class="img_div" id="${id}">
      <a href="">
        <img src="${image}">
    </a>
    </div>
    <div class="desc">
      <h2>${title}</h2>
      <p>${category}</p>
      <h4>
      ${brand}
      </h4>
      <p id="pricedisplay">${price}</p>
      <p ">${product_badge}</p>
      <div class="button-div">
        <a href="#" class="addtocart" id="${id}">Add to Cart</a>
        <a href="#">Buy Now</a>
      </div>
    </div>
  </div>`;
  return vari;
}


// <div class="card" id="${id}">
//   <div class="img_div" id="${id}">
//       <a href="#">
//         <img src="${image}">
//     </a>
//     </div>
//     <div class="desc">
//       <h2>${title}</h2>
//       <p>${category}</p>
//       <h4>
//       ${brand}
//       </h4>
//       <p id="pricedisplay">${price}</p>
//       <p ">${product_badge}</p>
//       <div class="button-div">
//         <a href="#" class="addtocart" id="${id}">Add to Cart</a>
//         <a href="paymentpage.html">Buy Now</a>
//       </div>
//     </div>
//   </div>