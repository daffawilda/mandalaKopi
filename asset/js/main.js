// Fungsi untuk menampilkan produk unggulan
function displayFeaturedProducts() {
    const productContainer = document.getElementById('featured-products');
    
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-3', 'mb-4');
        
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Memanggil fungsi untuk menampilkan produk ketika halaman dimuat
document.addEventListener('DOMContentLoaded', displayFeaturedProducts);
