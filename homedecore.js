let mainbody = document.querySelector("#product-container")
let api = 'https://63c9170d320a0c4c9540575f.mockapi.io/products'
let searchform = document.querySelector("#form")
let nikefilter = document.querySelector("#nike")
let Adidasfilter = document.querySelector("#Adidas")
let Louisfilter = document.querySelector("#Louis")
let Cartierfilter = document.querySelector("#Cartier")
let Zarafilter = document.querySelector("#Zara")



let viewcart = JSON.parse(localStorage.getItem("veiwproduct")) || []

let addtocartarr = JSON.parse(localStorage.getItem("addtocart")) || []



window.addEventListener("load",()=>{
    mensdata()
})

async function mensdata(){
    try {
        let res = await fetch(api)
        let data = await res.json()

        renderingdata(data)

        searchform.addEventListener("submit",(e)=>{
          e.preventDefault()
          let searchpara = searchform.search.value
      console.log(searchpara)
          let filtered1 = data.filter((element)=>{
              if(element.name.toUpperCase().includes(searchpara.toUpperCase())===true){
                  return true
              }else{
                  return false
              }
          })
          renderingdata(filtered1)
        })

        let filtered = data.filter((item)=>{
                if(item.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
             renderingdata(filtered)

             nikefilter.addEventListener("click",()=>{
              let filtered = data.filter((ele)=>{
                if(ele.brand=="nike" && ele.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
              renderingdata(filtered)
            })
            Adidasfilter.addEventListener("click",()=>{
              let filtered = data.filter((ele)=>{
                if(ele.brand=="adidas" && ele.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
            renderingdata(filtered)
            })
            Louisfilter.addEventListener("click",()=>{
              let filtered = data.filter((ele)=>{
                if(ele.brand=="louis vuitton" && ele.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
              renderingdata(filtered)
            })
            Cartierfilter.addEventListener("click",()=>{
              let filtered = data.filter((ele)=>{
                if(ele.brand=="cartier" && ele.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
            renderingdata(filtered)
            })
            Zarafilter.addEventListener("click",()=>{
              let filtered = data.filter((ele)=>{
                if(ele.brand=="zara" && ele.category=="homedecore"){
                  return true
                }else{
                  return false
                }
              })
            renderingdata(filtered)
            })
       


    } catch (error) {
        console.log(error)
    }
}


function renderingdata(data){
  mainbody.innerHTML = ""
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
      mainbody.append(div)
      })
  }
