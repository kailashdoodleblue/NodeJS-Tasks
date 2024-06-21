const express = require('express');
const axios = require('axios');

const app = express();

// Define a route to handle multiple API calls
app.get('/multiple-apis', async (req, res) => {
    try {
        // Make multiple API calls
        const [response1, response2] = await Promise.all([
            axios.get('http://localhost:1001/first'), // Example public API endpoint
            axios.get('http://localhost:1002/second')  // Another example public API endpoint
        ]);

        // Extract data from responses
        const data1 = response1.data;
        const data2 = response2.data;

        // Combine or process the data if needed
        const combinedData = { data1, data2 };

        // Send combined data as the response
        res.json(combinedData);
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
