const mongoose = require('mongoose');

// Schema untuk komponen
const componentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: String,
});

// Schema untuk alat (tools)
const toolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  sku: { type: String, unique: true }, // SKU ditambahkan dan harus unik
  components: [componentSchema], // Array komponen yang terkait dengan alat
});

// Middleware untuk otomatis mengisi SKU jika tidak ada
toolSchema.pre('save', function (next) {
  if (!this.sku) {
    this.sku = `SKU-${new Date().getTime()}`; // Generate SKU otomatis jika tidak ada
  }
  next();
});

// Ekspor model Tool
module.exports = mongoose.model('Tool', toolSchema);
