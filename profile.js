

render()
async function render(){
    let res =await fetch("https://64228af2001cb9fc20290cae.mockapi.io/user")
    let data = await res.json()
    console.log(data)
}