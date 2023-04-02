let addressarr = JSON.parse(localStorage.getItem("addressdetail")) || []
let span = document.getElementById("span")
let name = document.getElementById("name")
let number = document.getElementById("number")
let month = document.getElementById("month")
let year = document.getElementById("year")
let cvv = document.getElementById("cvv")
let checkout = document.getElementById("checkout")

span.innerHTML = addressarr[0].name


let cardarr = JSON.parse(localStorage.getItem("carddetail"))



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    carddata()
})
function carddata(){
    let name = name.value
    let number = number.value
    let month = month.value
    let year = year.value
    let cvv = cvv.value



    let formdata = [{
        name : name,
        number : number,
        month : month,
        city : city,
        year : year,
        cvv : cvv
    }]
    cardarr = formdata
    localStorage.setItem("carddetail",JSON.stringify(cardarr))
    
}

