import os
import json
from flask import request, jsonify
import torch
from torchvision import transforms, models as md
from PIL import Image

from app import app


@app.route("/", methods=["POST"])
def predict():
    if request.method == "POST":
        file = request.files["image"]
        saveLocation = file.filename
        file.save(saveLocation)
        prediction = classify(saveLocation)
        os.remove(saveLocation)
        print("Prediction Generated")
        return jsonify({"prediction": prediction})


def transform(img):
    image_preprocess = transforms.Compose(
        [
            transforms.Resize(224),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize([0.4548, 0.4758, 0.3215], [
                                 0.4548, 0.4758, 0.3215]),
        ]
    )
    image_tensor = image_preprocess(img).unsqueeze(0)
    return image_tensor


def load_class_names():
    path = os.path.join(os.getcwd(), "models")
    saved_classes_file = "classes.json"
    classes_file_path = os.path.join(path, saved_classes_file)
    classes = []
    with open(classes_file_path, "r") as f:
        classes_dict = json.load(f)
        for _, value in classes_dict.items():
            classes.append(value)
    return classes


def load_model():
    path = os.path.join(os.getcwd(), "models")
    model_path = os.path.join(path, "model_transfer.pt")
    device = torch.device("cpu")
    model = md.resnet152(pretrained=True)
    classes = load_class_names()
    final_layer = torch.nn.Linear(2048, len(classes))
    model.fc = final_layer
    model.load_state_dict(torch.load(model_path, map_location=device))
    return model


def classify(saveLocation):
    img = Image.open(saveLocation).convert("RGB")
    img_tensor = transform(img)
    prediction_model = load_model()
    prediction_model.eval()
    with torch.no_grad():
        output = prediction_model(img_tensor)
        pred = torch.argmax(output).item()
        target = torch.max(output).numpy()
        # print(pred)
        # print(target)
    if target > 1.0:
        classes = load_class_names()
        prediction = classes[pred]
        print(prediction)
    else:
        prediction = "Unknown"
    return prediction
