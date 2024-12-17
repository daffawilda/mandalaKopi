// Data produk di keranjang belanja
const cart = [
  {
    id: 1,
    name: "Green Tea",
    price: 15.0,
    quantity: 2,
    imageUrl: "../asset/img/menu/espresso.jpg",
  },
  {
    id: 2,
    name: "Nasi Goreng",
    price: 20.0,
    quantity: 1,
    imageUrl: "../asset/img/menu/nasgor.jpg",
  },
  {
    id: 3,
    name: "Chiken Steak",
    price: 25.0,
    quantity: 1,
    imageUrl: "../asset/img/menu/chikensteak.jpg",
  },
];

// Fungsi untuk menampilkan produk di keranjang
function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear existing items

  let totalPrice = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${item.imageUrl}" alt="${item.name}">
                ${item.name}
            </td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${
                  item.id
                }, -1)">-</button>
                ${item.quantity}
                <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${
                  item.id
                }, 1)">+</button>
            </td>
            <td>${item.price.toFixed(3)}</td>
            <td>${itemTotal.toFixed(3)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeItem(${
                  item.id
                })">Remove</button>
            </td>
        `;
    cartItemsContainer.appendChild(row);
  });

  // Update total price
  document.getElementById("total-price").textContent = `${totalPrice.toFixed(
    3
  )}`;
}

// Fungsi untuk mengupdate jumlah produk
function updateQuantity(id, change) {
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItem(id);
    } else {
      displayCart();
    }
  }
}

// Fungsi untuk menghapus item dari keranjang
function removeItem(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    displayCart();
  }
}

// Fungsi untuk checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before checking out.");
  } else {
    window.location.href = "checkout.html"; // Arahkan ke halaman checkout (buat halaman ini sesuai kebutuhan)
  }
});

// Menampilkan produk di keranjang saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayCart);
