let bagsdec=document.getElementById("bags_div");
let homedec=document.getElementById("homedecore_div");
let mendec=document.getElementById("men_div");
let womendec=document.getElementById("women_div");
let kidsdec=document.getElementById("kids_div");
let giftsdec=document.getElementById("gift_div");
let product_count=document.getElementById("product_count");
let URL=`https://63c9170d320a0c4c9540575f.mockapi.io/products`;
let giftArray=[];
let giftdec=document.getElementById("gift_div");
let array1=[];
let menArray=[];
let womenArray=[];
let kidsArray=[];
let bagsArray=[];

let viewcart = JSON.parse(localStorage.getItem("veiwproduct")) || []

let addtocartarr = JSON.parse(localStorage.getItem("addtocart")) || []

product_count.innerHTML=addtocartarr.length;
window.addEventListener("load",(e)=>{
    e.preventDefault();
    
    async function getdata(){
        try{
            let res = await fetch(URL);
            let data= await res.json();
            // console.log(data);
            womendata(data);
            mendata(data)
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
    // console.log(filteredData)
    for(let i=0; i<4; i++){
        womenArray.push(filteredData[i]);
    }
    renderingdata1(womenArray)
}
function renderingdata1(data){
  womendec.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
          window.location.assign("product_vei.html")
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
    //   if(){}
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          alert("Product Add to Cart")
          addtocartbtn.innerHTML="Added To Cart";
          product_count.innerHTML=addtocartarr.length;
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      buytbtn.addEventListener("click",(e)=>{
        window.location.assign("paymentpage.html");
      })
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      womendec.append(div)
      })
  }


// *************************************** men******************

function mendata(data){
    let filteredData=data.filter((element) => {
        if(element.category=="mens"){
            return true;
        }
        return false;
    });
    // console.log(filteredData)
    for(let i=0; i<4; i++){
        menArray.push(filteredData[i]);
      }
      console.log(menArray)
      renderingdata(menArray)
    
}

function renderingdata(data){
  mendec.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
          window.location.assign("product_vei.html")
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      mendec.append(div)
      })
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
      // console.log(bagsArray)
    }
    renderingdata2(bagsArray)
}

function renderingdata2(data){
  bagsdec.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
          window.location.assign("product_vei.html")
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      bagsdec.append(div)
      })
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
    renderingdata3(array1)
}

function renderingdata3(data){
  homedec.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
          window.location.assign("product_vei.html")
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      homedec.append(div)
      })
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
    renderingdata4(kidsArray)
}

function renderingdata4(data){
  kidsdec.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
          window.location.assign("product_vei.html")
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      kidsdec.append(div)
      })
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
renderingdata5(giftArray)
}

function renderingdata5(data){
  giftsdec.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
          window.location.assign("product_vei.html")
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      giftsdec.append(div)
      })
  }