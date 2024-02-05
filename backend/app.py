import os
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from models import db


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///market.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app,db)
CORS(app)
db.init_app(app)

@app.route("/")
def home():
    response = "<h1>Hello world starting a market</h1>"
    return response
    pass

if __name__ == "__main__":
    app.run(debug=True,port=5555)
