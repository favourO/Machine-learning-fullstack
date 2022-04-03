// Import Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// set up our app and middleware
const app = express();
app.use(cors());
app.use(express.json());

// Import router
const wmlRoutes = require('./routes/api/wml');
app.use('/api/wml', wmlRoutes);

// Start server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`)
})