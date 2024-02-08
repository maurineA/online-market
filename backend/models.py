from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Shop(db.Model):
    __tablename__ = "shops"
    id =  db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    shopname = db.Column(db.String)
    address = db.Column(db.String)
    contact = db.Column(db.Integer)
    
    Shopproduct = db.relationship("Shopproduct", backref="Shopproduct")

    @validates('username')
    def validate_username(self, key, username):
        if not username:
            raise ValueError("Username cannot be empty")
        return username

    @validates('shopname')
    def validate_shopname(self, key, shopname):
        if not shopname:
            raise ValueError("Shopname cannot be empty")
        return shopname

    @validates('address')
    def validate_address(self, key, address):
        if not address:
            raise ValueError("Address cannot be empty")
        return address

    @validates('contact')
    def validate_contact(self, key, contact):
        if not contact:
            raise ValueError("Contact cannot be empty")
        return contact

class Shopproduct(db.Model):
    __tablename__ ="shopproducts"
    id =  db.Column(db.Integer, primary_key=True)
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    price = db.Column(db.Integer)

    @validates('price')
    def validate_price(self, key, price):
        if price is None or price <= 0:
            raise ValueError("Price must be a positive number")
        return price



class Product(db.Model):
    __tablename__ ="products"
    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.Text)
    quantity = db.Column(db.String)
    image = db.Column(db.String)
    

    Shopproduct = db.relationship("Shopproduct", backref="product")

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError("Name cannot be empty")
        return name

    @validates('description')
    def validate_description(self, key, description):
        if not description:
            raise ValueError("Description cannot be empty")
        return description
        
    @validates('quantity')
    def validate_quantity(self, key, quantity):
        if quantity is None or quantity < 0:
            raise ValueError("Quantity must be a non-negative integer")
        return quantity

    # @validates('image') #validate url
    # def validate_image(self, key, image):
    #     if not image.startswith("http://") and not image.startswith("https://"):
    #         raise ValueError("Invalid image URL")
    #     return image




    