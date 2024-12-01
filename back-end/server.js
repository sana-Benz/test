const API_URL ="https://test-1-qj8j.onrender.com/api"
const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()

const cors = require('cors');

app.get(`${API_URL}/users`,(req,res)=>{
    res.json({"users":["sana","alex","Sam"]})
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});