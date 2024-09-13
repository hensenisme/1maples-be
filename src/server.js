const express = require('express');
const mongoose = require('mongoose');
// const toolRoutes = require('./routres/toolRoutes');
const toolRoutes = require('./routers/toolRoutes');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/maples', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.use('/api/tools', toolRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
