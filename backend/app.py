from flask import jsonify, make_response, request, session, url_for
from .models import User, Shop, Product, Shopproduct

from .config import app,db



# db.init_app(app)





@app.route("/")
def home():
    response = "<h1>Hello world starting a market</h1>"
    return response
    pass

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    fullname = data.get("fullname")
    email = data.get("email")
    username = data.get("username")
    password = data.get("password")

    if not fullname or not email or not username or not password:
        return jsonify({"error": "missing required fields"}), 400

    # Check if username or email already exists
    if User.query.filter_by(username=username).first() is not None:
        return jsonify({"error": "username already exists"}), 409

    if User.query.filter_by(email=email).first() is not None:
        return jsonify({"error": "email already exists"}), 409

    # Create a new user
    new_user = User(username=username, email=email )
    new_user.password_hash = password  # Hash the password

    # Add the user to the database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "missing username or password"}), 400

    user = User.query.filter_by(username=username).first()

    if not user or not user.check_password(password):
        return jsonify({"error": "invalid username or password"}), 401

    # Set the user's ID in the session
    session['user_id'] = user.id
    session['username'] = user.username

    # Return a success response
    return jsonify({"message": f"User {username} logged in"}), 200



@app.route("/logout", methods=["GET"])
def logout():
    # Check if user is logged in
    if 'user_id' in session:
        user_id = session.pop('user_id')
        user = User.query.get(user_id)
        if user:
            # Delete the user from the database
            db.session.delete(user)
            db.session.commit()
            # Clear other session data
            session.pop('username', None)
            return jsonify({"message": "User logged out successfully"}), 200
        else:
            return jsonify({"error": "User not found"}), 404
    else:
        return jsonify({"error": "User not logged in"}), 401

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
    shop = Shop.query.get(id)
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
    user_id = data["user_id"]
    username = data["username"]
    shopname = data["shopname"]
    address = data["address"]
    contact = data["contact"]

    
    
    existing_shop = Shop.query.filter_by(username=session['username']).first()                                   
         
    
    if existing_shop:
        return jsonify({"error":"User already has a shop."}),400


    if not all([username, shopname, address, contact]):
        return jsonify({"error": "missing parameter"}),400
    new_shop = Shop(
        user_id = user_id,
        username = username,
        shopname = shopname,
        address = address,
        contact = contact

    )

    db.session.add(new_shop)
    db.session.commit()

    shop_data = {
        "id": new_shop.id,
        "user_id": new_shop.user_id,
        "username": new_shop.username,
        "shopname": new_shop.shopname,
        "address": new_shop.address,
        "contact":new_shop.contact,
    }

    response = make_response(jsonify(shop_data),201) 
    return response

@app.route("/add-product", methods=["POST"])
def addProduct():
    if "user_id" not in session:
        return jsonify ({ "Error" : "Not logged in" }) , 401
    data = request.json
    name = data.get("name")
    description = data.get("description")
    quantity = data.get("quantity")
    image = data.get("image")
    price = data.get("price")
    if not all([name,description,quantity,image,price]):
        return jsonify({"error":"Missing field"}),400
    
    user_shop =Shop.query.filter_by(username = session['username']).first()
    if not user_shop:
        return jsonify ({"error": "User has no shop"}) ,403
    
    new_product= Product(
        name=name,
        description=description,
        quantity=quantity,
        image = image
    )
    db.session.add(new_product)
    db.session.commit()
    Shop_product = Shopproduct(
        shop_id =user_shop.id,
        product_id = new_product.id,
        price = price
    ) 
    
    db.session.add(Shop_product)
    db.session.commit()
    product_data = {
        "id": new_product.id,
        "name": new_product.name,
        "description": new_product.description,
        "quantity": new_product.quantity,
        "image": new_product.image,
        "price": Shop_product.price
        
    }
    
    return jsonify(product_data),201

@app.route("/update-product/<int:product_id>", methods=["PATCH"])
def update_product(product_id):
    product = Product.query.get(product_id)
    if  not product:
        return jsonify ({"error":"Product does not exist"}) ,404
    data = request.json
    if "name" in data:
        product.name = data["name"]
    if "description" in data:
        product.description = data["description"]
    if "quantity" in data:
        product.quantity = data["quantity"]
    if "price" in data:
        product.price = data["price"]
    if "image" in data:
        product.image = data["image"]
    db.session.commit()
    return jsonify({"message":"product  updated well"}),200

@app.route("/delete/<int:product_id>",methods=["DELETE"])
def delete_product(product_id):
    product = Product.query.get(product_id)
    if not Product:
        return jsonify({"error":"product not found"}),404
    db.session.delete(product)
    db.session.commit()
    return jsonify ({"message":"product deleted  well"}),200

if __name__ == "__main__":
    app.run(port= 5001, debug=True)