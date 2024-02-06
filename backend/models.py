from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Shop(db.Model):
    __tablename__ = "shops"
    id =  db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    shopname = db.Column(db.String)
    address = db.Column(db.String)
    contact = db.Column(db.Integer)
    
    Shopproduct = db.relationship("Shopproduct", backref="Shopproduct")

class Shopproduct(db.Model):
    __tablename__ ="shopproducts"
    id =  db.Column(db.Integer, primary_key=True)
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    price = db.Column(db.Integer)



class Product(db.Model):
    __tablename__ ="products"
    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.Text)
    quantity = db.Column(db.String)
    image = db.Column(db.String)
    

    Shopproduct = db.relationship("Shopproduct", backref="product")




    