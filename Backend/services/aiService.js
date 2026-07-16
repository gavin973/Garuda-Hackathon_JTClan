const axios = require("axios");

const AI_URL = "http://127.0.0.1:8000";

async function predictCrop(data) {
    const response = await axios.post(
        `${AI_URL}/predict`,
        data
    );

    console.log("AI Response:");
    console.log(response.data);

    return response.data;
}

module.exports = {
    predictCrop
};