from flask import jsonify, make_response, request, session

from models import Shop, Product,Shopproduct

from config import app, db



@app.route("/")
def home():
    response = "<h1>Hello world starting a market</h1>"
    return response
    pass

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")

    if not username:
        return jsonify({"error": "missing username"}), 400

    # Assuming there's a function to authenticate the user based on username
    user = Shop.query.filter_by(username=username).first()

    if not user:
        return jsonify({"error": "user not found"}), 404

    # Set the user's ID in the session
    session['user_id'] = user.id

    # Return a success response
    return jsonify({"message": f"User {username} logged in"}), 200

@app.route("/logout", methods=["POST"])
def logout():
    # Clear the session to log out the user
    session.clear()
    return jsonify({"message": "Logged out successfully"}), 200

@app.route("/user", methods=["GET"])
def get_current_user():
    # Check if user is logged in
    if 'user_id' in session:
        user_id = session['user_id']
        # Retrieve user information from database
        user = Shop.query.get(user_id)
        if user:
            user_data = {
                "id": user.id,
                "username": user.username,
                "shopname": user.shopname,
                "address": user.address,
                "contact": user.contact
            }
            return jsonify(user_data), 200
        else:
            return jsonify({"error": "user not found"}), 404
    else:
        return jsonify({"error": "user not logged in"}), 401

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
    shop_id = request.args.get("shopId")
    if not shop_id:
        return jsonify({"error": "Missing shopId parameter"}), 400

    products = Shopproduct.query.filter_by(shop_id=shop_id).all()
    productlist = []
    for shop_product in products:
        product = Product.query.get(shop_product.product_id)
        if product:
            product_dict = {
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "quantity": product.quantity,
                "image": product.image,
                "price": shop_product.price,
            }
            productlist.append(product_dict)
    return jsonify(productlist), 200

    



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
