const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());      
app.use(express.json());


const playerRoutes = require("./routes/playerRoutes");


app.use("/api/players", playerRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});