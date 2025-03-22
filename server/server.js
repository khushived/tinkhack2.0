// server/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../crowdroute-frontend/build')));

// Example API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from Express!" });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../crowdroute-frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
