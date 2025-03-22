// server/server.js
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 5000;

// Enable JSON body parsing
app.use(express.json());

// In-memory marker store
let markers = [
    { id: 1, lat: 40.7128, lon: -74.0060, popup: "New York City" },
    { id: 2, lat: 40.73061, lon: -73.935242, popup: "Brooklyn" },
    { id: 3, lat: 40.758896, lon: -73.985130, popup: "Times Square" }
];

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../crowdroute-frontend/build')));

// Example API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from Express!" });
});

// API endpoint to get markers
app.get('/api/markers', (req, res) => {
    res.json(markers);
});

// API endpoint to add a new marker (crowdsourced update)
app.post('/api/addMarker', (req, res) => {
    const { lat, lon, popup } = req.body;
    const newMarker = { id: markers.length + 1, lat, lon, popup };
    markers.push(newMarker);

    // Emit the new marker to all connected clients
    io.emit('newMarker', newMarker);

    res.json(newMarker);
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../crowdroute-frontend/build', 'index.html'));
});

// Set up Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Optionally, you can emit the current markers to the new connection:
    socket.emit('markers', markers);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server using our http server with Socket.IO
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
