const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/predict", require("./routes/predictRoute"));

const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`Server Running ${PORT}`);

});

app.get("/", (req, res) => {
    res.json({
        message: "Backend Running"
    });
});