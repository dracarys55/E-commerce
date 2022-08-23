import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
//如果要引用ES module  file 引用要變成 .js
import colors from 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use('/api/products', productRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  /* *代表 routing for all */
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running..');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Sever running in ${process.env.NODE_ENV}mode on port ${PORT}`.yellow.bold
  )
);
