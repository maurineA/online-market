from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class  shop(db.Model):
    id=  db.Column(db.Integer, primary_key=True)
    shop_name = db.Column(db.string(30))
    