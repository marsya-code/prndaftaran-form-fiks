// Fungsi untuk menghitung faktorial
function factorial(n) {
  // Jika n adalah 0, faktorialnya adalah 1
  if (n === 0) {
    return 1;
  } else {
    // Rekursif: panggil fungsi factorial dengan n-1 dan kalikan hasilnya dengan n
    return n * factorial(n - 1);
  }
}

// Contoh penggunaan
console.log(factorial(5)); // Output: 120