import os 
from flask import Flask
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_cors import  CORS

app = Flask(__name__)
app.secret_key = b"%e\x90$M\xff\xc1S\xc6\x8d\xad@\x8a=@\xc5"
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False


db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)

bcrypt = Bcrypt(app)
CORS(app, resources={r"/*": {"origins": ["https://inclusive-online-market.netlify.app/"]}},supports_credentials=True)
# postgres://flower_market_user:ZVlMPM4NbKVdnk4n1dbAMRTQoK6IRnDj@dpg-cncuk0ev3ddc73c94420-a.oregon-postgres.render.com/flower_market
# =======
# bcrypt = Bcrypt(app) 

# >>>>>>> main


