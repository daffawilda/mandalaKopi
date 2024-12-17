// Menyimulasikan data produk (dapat diganti dengan data dinamis dari server)
const products = [
  {
    id: 1,
    name: "Espresso",
    description: "A strong and bold coffee for the perfect start.",
    imageUrl: "../asset/img/menu/espresso.jpg",
    price: "Rp25.000",
    category: "drink",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "A creamy blend of espresso, steamed milk, and foam.",
    imageUrl: "../asset/img/menu/cappucino.jpg",
    price: "Rp40.000",
    category: "drink",
  },
  {
    id: 3,
    name: "Latte",
    description: "A smooth and milky coffee with a touch of espresso.",
    imageUrl: "../asset/img/menu/latte.jpg",
    price: "Rp30.000",
    category: "drink",
  },
  {
    id: 4,
    name: "Mocha",
    description: "A chocolatey twist on your regular coffee.",
    imageUrl: "../asset/img/menu/mocha.jpg",
    price: "Rp15.000",
    category: "drink",
  },
  {
    id: 5,
    name: "Green Tea",
    description: "A refreshing and healthy green tea.",
    imageUrl: "../asset/img/menu/greentea.jpg",
    price: "Rp15.000",
    category: "drink",
  },
  {
    id: 6,
    name: "Black Tea",
    description: "A rich and full-bodied black tea.",
    imageUrl: "../asset/img/menu/blacktea.jpg",
    price: "Rp20.000",
    category: "drink",
  },
  {
    id: 7,
    name: "Berry Smoothie",
    description: "A fruity and delicious smoothie.",
    imageUrl: "../asset/img/menu/berrysmoothie.jpg",
    price: "Rp25.000",
    category: "drink",
  },
  {
    id: 8,
    name: "Ice Taro Milk",
    description:
      "Creamy and sweet taro blend with milk and ice, a refreshing purple treat.",
    imageUrl: "../asset/img/menu/Icetaromilk.jpg",
    price: "Rp45.000",
    category: "drink",
  },
  {
    id: 9,
    name: "Coffe Milk",
    description: "Bold coffee meets creamy milk.",
    imageUrl: "../asset/img/menu/coffemilk.jpg",
    price: "Rp20.000",
    category: "drink",
  },
  {
    id: 10,
    name: "Vietnam Drip",
    description: "Smooth and bold drip coffee served over sweetened milk.",
    imageUrl: "../asset/img/menu/Vietnam.jpg",
    price: "Rp15.000",
    category: "drink",
  },
  {
    id: 11,
    name: "Roti Bakar",
    description: "Grilled toast with your choice of sweet or savory toppings.",
    imageUrl: "../asset/img/menu/RotiBakar.jpg",
    price: "Rp20.000",
    category: "food",
  },
  {
    id: 12,
    name: "Nasi Goreng",
    description:
      "Flavorful fried rice with spices and your choice of toppings.",
    imageUrl: "../asset/img/menu/Nasgor.jpg",
    price: "Rp25.000",
    category: "food",
  },
  {
    id: 13,
    name: "Mie Goreng",
    description: "Stir-fried noodles with a savory and rich taste.",
    imageUrl: "../asset/img/menu/miegoreng.jpg",
    price: "Rp12.000",
    category: "food",
  },
  {
    id: 14,
    name: "Chiken Steak",
    description: "Juicy grilled chicken served with sauce, fries, and veggies.",
    imageUrl: "../asset/img/menu/chikensteak.jpg",
    price: "Rp20.000",
    category: "food",
  },
  {
    id: 15,
    name: "Sate Ayam",
    description: "Grilled chicken skewers served with peanut sauce.",
    imageUrl: "../asset/img/menu/Sateayam.jpg",
    price: "Rp30.000",
    category: "food",
  },
  {
    id: 16,
    name: "Nachos",
    description: "Crispy tortilla chips topped with melted cheese and salsa.",
    imageUrl: "../asset/img/menu/Nachos.jpg",
    price: "Rp15.000",
    category: "food",
  },
  {
    id: 17,
    name: "Beef Burger",
    description:
      "Soft bun with a juicy beef patty, lettuce, cheese, and sauce.",
    imageUrl: "../asset/img/menu/burger.jpg",
    price: "Rp25.000",
    category: "food",
  },
  {
    id: 18,
    name: "Pasta Carbonara",
    description: "Creamy pasta with smoked beef and parmesan cheese.",
    imageUrl: "../asset/img/menu/carbonara.jpg",
    price: "Rp25.000",
    category: "food",
  },
  {
    id: 19,
    name: "French Fries",
    description: "Crispy golden fries served with ketchup or mayo.",
    imageUrl: "../asset/img/menu/frenchfries.jpg",
    price: "Rp15.000",
    category: "snack",
  },
  {
    id: 20,
    name: "Onion Rings",
    description: "Crunchy battered onion rings, perfect for snacking.",
    imageUrl: "../asset/img/menu/onionrings.jpg",
    price: "Rp20.000",
    category: "snack",
  },
  {
    id: 21,
    name: "Spring Rolls",
    description: "Crispy rolls filled with savory veggies and chicken.",
    imageUrl: "../asset/img/menu/springrolls.jpg",
    price: "Rp15.000",
    category: "snack",
  },
  {
    id: 22,
    name: "Cheese Sticks",
    description: "Mozzarella sticks fried to golden perfection.",
    imageUrl: "../asset/img/menu/cheese.jpg",
    price: "Rp25.000",
    category: "snack",
  },
  {
    id: 23,
    name: "Potato Wedges",
    description: "Seasoned potato wedges, crispy on the outside, soft inside.",
    imageUrl: "../asset/img/menu/potatowedges.jpg",
    price: "Rp15.000",
    category: "snack",
  },
  {
    id: 24,
    name: "Garlic Bread",
    description: "Toasted bread with a buttery garlic spread.",
    imageUrl: "../asset/img/menu/GarlicBread.jpg",
    price: "Rp20.000",
    category: "snack",
  },
  {
    id: 25,
    name: "Mozzarella Sticks",
    description:
      "Golden fried mozzarella with a gooey cheesy center, served with marinara sauce",
    imageUrl: "../asset/img/menu/mozzarella.jpg",
    price: "Rp20.000",
    category: "snack",
  },
  {
    id: 26,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries served with a sweet dipping sauce.",
    imageUrl: "../asset/img/menu/sweetpotato.jpg",
    price: "Rp15.000",
    category: "snack",
  },
];

// Fungsi untuk mengambil parameter id produk dari URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"), 10);
}

// Fungsi untuk menampilkan detail produk
function displayProductDetails(productId) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `${    product.price}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = product.imageUrl;
  } else {
    alert("Product not found");
  }
}

// Fungsi untuk mendapatkan keranjang dari localStorage atau membuat keranjang baru
function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Fungsi untuk menyimpan keranjang ke localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(product) {
  let cart = getCart();
  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    // Jika produk sudah ada di keranjang, tambahkan jumlahnya
    productInCart.quantity += 1;
  } else {
    // Jika produk belum ada, tambahkan produk baru
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateAddToCartButton();
}

// Fungsi untuk memperbarui tombol "Add to Cart"
function updateAddToCartButton() {
  const productId = getProductIdFromUrl();
  const product = products.find((p) => p.id === productId);
  const cart = getCart();

  if (product && cart.some((item) => item.id === product.id)) {
    document.getElementById("add-to-cart-btn").textContent = "Added to Cart";
    document.getElementById("add-to-cart-btn").disabled = true;
  } else {
    document.getElementById("add-to-cart-btn").textContent = "Add to Cart";
    document.getElementById("add-to-cart-btn").disabled = false;
  }
}

// Menambahkan produk ke keranjang ketika tombol diklik
document.getElementById("add-to-cart-btn").addEventListener("click", () => {
  const productId = getProductIdFromUrl();
  const product = products.find((p) => p.id === productId);
  if (product) {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  }
});

// Memuat detail produk saat halaman dimuat dan memperbarui tombol Add to Cart
document.addEventListener("DOMContentLoaded", () => {
  const productId = getProductIdFromUrl();
  displayProductDetails(productId);
  updateAddToCartButton(); // Memperbarui status tombol saat halaman dimuat
});
