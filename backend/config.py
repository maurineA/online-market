import os 
from flask import Flask
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.secret_key = b"%e\x90$M\xff\xc1S\xc6\x8d\xad@\x8a=@\xc5"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)

bcrypt = Bcrypt(app)
# =======
# bcrypt = Bcrypt(app)

# >>>>>>> main
