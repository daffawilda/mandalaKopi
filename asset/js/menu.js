// Fungsi untuk menampilkan semua produk dalam grid
function displayMenu(products) {
  const menuGrid = document.getElementById("menu-grid");
  menuGrid.innerHTML = ""; // Clear the grid before rendering new items

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-3", "mb-4");
    productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body menu">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <a href="order.html?id=${product.id}" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
    menuGrid.appendChild(productCard);
  });
}

// Fungsi untuk memfilter menu berdasarkan kategori
function filterMenu() {
  const categoryFilter = document.getElementById("categoryFilter").value;

  let filteredProducts = featuredProducts;
  if (categoryFilter) {
    filteredProducts = featuredProducts.filter(
      (product) => product.category === categoryFilter
    );
  }

  displayMenu(filteredProducts);
}

// Memanggil fungsi untuk menampilkan produk saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  displayMenu(featuredProducts);

  // Menambahkan event listener untuk filter kategori
  document
    .getElementById("categoryFilter")
    .addEventListener("change", filterMenu);
});
