
import os
from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Shop, Product


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

@app.route("/shops", methods=["GET"])
def get_shops():
    shops = Shop.query.all()
    shoplist=[]
    for shop in shops:
        shop_dict={
            "id": shop.id,
            "username": shop.username,
            "shopname": shop.shopname,
            "address": shop.address,
            "contact": shop.contact,

        }
        shoplist.append(shop_dict)
    response = make_response(jsonify(shoplist), 200)

    return response

@app.route("/shop/<int:id>", methods=["GET"])
def get_shop(id):
    shop = Shop.query.all(id)
    if shop:
        shop_dict={
            "id": shop.id,
            "username": shop.username,
            "shopname": shop.shopname,
            "address": shop.address,
            "contact": shop.contact,

        }
        response = make_response(jsonify(shop_dict), 200)

        return response
    else:
        response = {"error": "id not found"}
        return jsonify(response), 404
    

@app.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    productlist = []
    for product in products:
        product_dict={
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "quantity": product.quantity,
            "image": product.image,

        }

        productlist.append(product_dict)
    response = make_response(jsonify(productlist), 200)

    return response
    



@app.route("/product/<int:id>", methods=["GET"])
def get_product(id):
    product = Product.query.get(id)
    if product:
        product_dict={
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "quantity": product.quantity,
            "image": product.image,

        }
        response = make_response(jsonify(product_dict), 200)

        return response
    else:
        response = {"error": "id not found"}
        return jsonify(response), 404

@app.route("/addshop", methods=["POST"])
def post_shop():
    data = request.json
    username = data.get("username")
    shopname = data.get("shopname")
    address = data. get("address")
    contact = data.get("contact")

    if not all([username, shopname, address, contact]):
        return jsonify({"error": "missing parameter"}),400
    new_shop = Shop(
        username = username,
        shopname = shopname,
        address = address,
        contact = contact

    )

    db.session.add(new_shop)
    db.session.commit()

    shop_data = {
        "id": new_shop.id,
        "username": new_shop.username,
        "shopname": new_shop.shopname,
        "address": new_shop.address,
        "contact":new_shop.contact,
    }

    response = make_response(jsonify(shop_data),200) 
    return response





if __name__ == "__main__":
    app.run(debug=True,port=5555)
