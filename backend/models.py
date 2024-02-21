
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from .config import bcrypt,db

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    shops =db.relationship("Shop" ,backref="user")
    @validates('username', 'email')
    def validate_fields(self, key, value):
        if not value:
            raise ValueError(f"{key.capitalize()} cannot be empty")
        return value

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)



class Shop(db.Model):
    __tablename__ = "shops"
    id =  db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    shopname = db.Column(db.String)
    address = db.Column(db.String)
    contact = db.Column(db.Integer)
    _password_hash = db.Column(db.String)
    Shopproduct = db.relationship("Shopproduct", backref="Shopproduct")
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    @validates('username', 'shopname', 'address','contact')
    def validate_username(self, key, value):
        if not value:
            raise ValueError("Value cannot be empty")
        return value
    


class Shopproduct(db.Model):
    __tablename__ ="shopproducts"
    id =  db.Column(db.Integer, primary_key=True)
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    price = db.Column(db.Integer)

    @validates('price')
    def validate_price(self, key, price):
        if price is None or int(price) <= 0:
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
        


    # @validates('image') #validate url
    # def validate_image(self, key, image):
    #     if not image.startswith("http://") and not image.startswith("https://"):
    #         raise ValueError("Invalid image URL")
    #     return image




    