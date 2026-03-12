require("dotenv").config();
const express = require("express");
const sdk = require("@api/render-api");

const app = express();
const port = process.env.PORT || 3000;

// הזדהות מול ה-API של Render
sdk.auth(process.env.RENDER_API_KEY);

app.get("/services", async (req, res) => {
  try {
    // קריאה ל-API של רנדר לקבלת רשימת השירותים
    const { data } = await sdk.listServices({ limit: "20" });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
