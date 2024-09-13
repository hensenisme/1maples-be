const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const toolRoutes = require('./routers/toolRoutes');
require('./db/mongoose');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', toolRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
