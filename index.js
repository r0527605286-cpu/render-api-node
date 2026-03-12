require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.get("/services", async (req, res) => {
  try {
    // קריאה ישירה ל-API של Render בעזרת axios
    const response = await axios.get("https://api.render.com/v1/services", {
      headers: {
        // כאן אנחנו שולחים את המפתח הסודי שלך
        Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
        Accept: "application/json",
      },
    });

    // החזרת הנתונים שקיבלנו מרנדר למשתמש
    res.json(response.data);
  } catch (err) {
    console.error(
      "Error fetching services:",
      err.response ? err.response.data : err.message,
    );
    res.status(500).json({ error: "Failed to fetch services from Render" });
  }
});

// דף הבית - מונע שגיאת 404 בכניסה לאתר
app.get("/", (req, res) => {
  res.send(`
        <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1>🚀 My Render API Manager is Live!</h1>
            <p>The server is running successfully.</p>
            <p>To see the list of services, go to: 
                <a href="/services" style="color: #6366f1; font-weight: bold;">/services</a>
            </p>
        </div>
    `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
