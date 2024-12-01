const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()

const cors = require('cors');

app.get("/users", (req, res) => {
    res.json({ "users": ["sana", "alex", "Sam"] });
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});