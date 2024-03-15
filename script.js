
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products')
        const jsonData = await response.json()
        console.log('jsonData : ', jsonData);

        displayData(jsonData.products)

    } catch (error) {
        console.log(error);
    }
}

function displayData(products) {
    const productsContainer = document.getElementById('productsContainer')

    products.forEach(product => {

        const phoneBox = document.createElement('div')
        phoneBox.classList.add('phoneBox')

        const img = document.createElement('img')
        img.src = product.thumbnail
        img.alt = product.title

        const title = document.createElement('h2')
        title.classList.add('title')
        title.innerHTML = product.title

        const description = document.createElement('p')
        description.classList.add('description')
        description.innerHTML = product.description

        const rating = document.createElement('p')
        rating.classList.add('rating')
        rating.innerHTML = product.rating

        phoneBox.appendChild(img)
        phoneBox.appendChild(title)
        phoneBox.appendChild(description)
        phoneBox.appendChild(rating)

        productsContainer.appendChild(phoneBox)

    });

}

fetchData()