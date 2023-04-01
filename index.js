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
    let finalData=womenArray.map((ele)=>{
        return `${womencard(ele.src,ele.name)}`;
        
    })
    womendec.innerHTML=finalData;
}
console.log(finalData);
console.log(womenArray)
function womencard(src,name){

    let vari=

  `<div class="card" >
      <div class="img_div">
       <a href="">
         <img src="${src}">
       </a>
     </div>
     <div class="desc">
         <h2>${name}</h2>
        <div class="star-div">
           <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
       <h4>Love - I have this in three colors.
         Why? Because you can throw it on, and
         the fit is seamless, it's comfy it's breezy.
       </h4>
       <div class="button-div">
         <a href="">Add to Cart</a>
         <a href="">Buy Now</a>
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
    let finalData=menArray.map((ele)=>{
      console.log(ele)
        return `${mencard(ele.src,ele.name)}`;
        
    })
    mendec.innerHTML=finalData;
}
console.log(finalData);
console.log(menArray)
function mencard(src,name){

    let vari=`<div class="card" >
    <div class="img_div">
       <a href="">
         <img src="${src}">
       </a>
     </div>
     <div class="desc">
       <h2>${name}</h2>
       <div class="star-div">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
       </div>
       <h4>Love - I have this in three colors.
         Why? Because you can throw it on, and
         the fit is seamless, it's comfy it's breezy.
       </h4>
       <div class="button-div">
         <a href="">Add to Cart</a>
         <a href="">Buy Now</a>
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
    let finalData=bagsArray.map((ele)=>{
        return `${bagscard(ele.src,ele.name)}`;
        
    })
    bagsdec.innerHTML=finalData;
}

function bagscard(src,name){
   
    let vari=`<div class="card" >
    <div class="img_div">
       <a href="">
         <img src="${src}">
       </a>
     </div>
     <div class="desc">
       <h2>${name}</h2>
       <div class="star-div">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
       </div>
       <h4>Love - I have this in three colors.
         Why? Because you can throw it on, and
         the fit is seamless, it's comfy it's breezy.
       </h4>
       <div class="button-div">
         <a href="">Add to Cart</a>
         <a href="">Buy Now</a>
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
    let finalData=array1.map((ele)=>{
        return `${card(ele.src,ele.name)}`;
        
    })
    homedec.innerHTML=finalData;
}

function card(src,name){
 
    let vari=`<div class="card" >
    <div class="img_div">
       <a href="">
         <img src="${src}">
       </a>
     </div>
     <div class="desc">
       <h2>${name}</h2>
       <div class="star-div">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
       </div>
       <h4>Love - I have this in three colors.
         Why? Because you can throw it on, and
         the fit is seamless, it's comfy it's breezy.
       </h4>
       <div class="button-div">
         <a href="">Add to Cart</a>
         <a href="">Buy Now</a>
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
    let finalData=kidsArray.map((ele)=>{
        return `${kidscard(ele.src,ele.name)}`;
        
    })
    kidsdec.innerHTML=finalData;
}

function kidscard(src,name){
  
    let vari=`<div class="card" >
    <div class="img_div">
       <a href="">
         <img src="${src}">
       </a>
     </div>
     <div class="desc">
       <h2>${name}</h2>
       <div class="star-div">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
       </div>
       <h4>Love - I have this in three colors.
         Why? Because you can throw it on, and
         the fit is seamless, it's comfy it's breezy.
       </h4>
       <div class="button-div">
         <a href="">Add to Cart</a>
         <a href="">Buy Now</a>
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
  let finalData=giftArray.map((ele)=>{
      return `${giftcard(ele.src,ele.name)}`;
      
  })
  giftsdec.innerHTML=finalData;
}

function giftcard(src,name){

  let vari=`<div class="card" >
  <div class="img_div">
     <a href="">
       <img src="${src}">
     </a>
   </div>
   <div class="desc">
     <h2>${name}</h2>
     <div class="star-div">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
     </div>
     <h4>Love - I have this in three colors.
       Why? Because you can throw it on, and
       the fit is seamless, it's comfy it's breezy.
     </h4>
     <div class="button-div">
       <a href="">Add to Cart</a>
       <a href="">Buy Now</a>
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