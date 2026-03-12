require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/services', async (req, res) => {
    try {
        // קריאה ישירה ל-API של Render בעזרת axios
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                // כאן אנחנו שולחים את המפתח הסודי שלך
                'Authorization': `Bearer ${process.env.RENDER_API_KEY}`,
                'Accept': 'application/json'
            }
        });

        // החזרת הנתונים שקיבלנו מרנדר למשתמש
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching services:', err.response ? err.response.data : err.message);
        res.status(500).json({ error: 'Failed to fetch services from Render' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});