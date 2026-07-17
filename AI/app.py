from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
import numpy as np

app = FastAPI(title="Crop Recommendation API")

model = joblib.load("model/crop_model.pkl")
encoder = joblib.load("model/label_encoder.pkl")


class CropInput(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float


@app.get("/")
def home():
    return {
        "message": "Crop Recommendation API is Running"
    }


@app.post("/predict")
def predict(data: CropInput):

    sample = pd.DataFrame([{
        "N": data.N,
        "P": data.P,
        "K": data.K,
        "temperature": data.temperature,
        "humidity": data.humidity,
        "ph": data.ph,
        "rainfall": data.rainfall
    }])

    prediction = model.predict(sample)[0]
    probabilities = model.predict_proba(sample)[0]

    recommendation = encoder.inverse_transform([prediction])[0]

    confidence = round(float(np.max(probabilities) * 100), 2)

    top3_idx = np.argsort(probabilities)[::-1][:3]

    top3 = []

    for idx in top3_idx:

        top3.append({
            "crop": encoder.inverse_transform([idx])[0].title(),
            "confidence": round(float(probabilities[idx] * 100), 2)
        })

    return {

        "recommendation": recommendation.title(),

        "confidence": confidence,

        "top3": top3,

        "input": {
            "N": data.N,
            "P": data.P,
            "K": data.K,
            "temperature": data.temperature,
            "humidity": data.humidity,
            "ph": data.ph,
            "rainfall": data.rainfall
        }

    }