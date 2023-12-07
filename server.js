// Mengimpor modul express dan path
const express = require("express");
const path = require("path");

// Membuat aplikasi express
const app = express();

// Menentukan direktori untuk file statis
app.use(express.static(path.join(__dirname, "public")));

// Menangani permintaan GET ke "/"
app.get("/", (req, res) => {
  // Mengirim file index.html
  res.sendFile(path.join(__dirname, "index.html"));
});

// Menangani permintaan GET ke selain "/"
app.get("*", (req, res) => {
  // Mengirim status 404 dan pesan
  res.status(404).send("Halaman yang Anda cari tidak ditemukan");
});

// Menjalankan server di port 8080
app.listen(8080, () => {
  console.log("Server berjalan di http://localhost:8080");
});
