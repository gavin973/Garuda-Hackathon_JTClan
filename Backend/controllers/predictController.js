const { predictCrop } = require("../services/aiService");

exports.predict = async (req, res) => {

    try{

        const result = await predictCrop(req.body);

        res.json(result);

    }

    catch(err){

        console.log(err);

        res.status(500).json({
            message:"Prediction Failed"
        });

    }

}