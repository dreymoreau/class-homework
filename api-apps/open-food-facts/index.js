
let facts = document.querySelector('p')

document.querySelector('button').addEventListener('click', getFacts)
function getFacts() {
fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
.then(res => res.json())
.then(data => {
    console.log(data.product)
    facts.p= data.message
    document.querySelector('h1').innerText = data.product.brands
    document.querySelector('img').src = data.product.image_front_url
    document.querySelector('p').innerText = data.product.categories
})
}