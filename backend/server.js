const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Import the sequelize instance
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Sync database
  sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(error => console.error('Error syncing database:', error));
});

module.exports = app;
