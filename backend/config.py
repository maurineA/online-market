import os 
from flask import Flask
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
# from flask_cors import  CORS

app = Flask(__name__)
app.secret_key = b"%e\x90$M\xff\xc1S\xc6\x8d\xad@\x8a=@\xc5"
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URI")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False


db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)

bcrypt = Bcrypt(app)
# CORS(app, resources={r"/*": {"origins": "https://inclusive-online-market.netlify.app", "methods": ["GET", "POST", "DELETE"], "allow_headers": ["Content-Type"]}})
# =======
# bcrypt = Bcrypt(app) 

# >>>>>>> main


