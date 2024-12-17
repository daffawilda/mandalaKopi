// Seleksi elemen
const buttonA = document.getElementById("vbtn-radio1");
const buttonB = document.getElementById("buttonB");
const promoCountSpan = document.getElementById("promoCount");

// Inisialisasi variabel promoCount
let promoCount = 0;

// Event listener untuk button A
buttonA.addEventListener("click", () => {
  // Aktifkan button B
  buttonB.disabled = false;

  // Tambahkan promo +1
  promoCount++;
  promoCountSpan.textContent = promoCount;

  // Disable button A setelah klik agar tidak bisa diklik lagi
  buttonA.disabled = true;
});

