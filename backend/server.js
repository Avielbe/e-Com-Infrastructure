require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  ///
//   const express = require('express');
// const router = express.Router();
// const Product = require('./models/Product'); // Assuming you have a Product model

// router.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
