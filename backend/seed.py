from models import db, Shop, Product, Shopproduct
from app import app

def seed_data():
    with app.app_context():

        # Create shops
        shop1 = Shop(username='shop_owner1', shopname='Shop 1', address='123 Main St', contact='1234567890')
        shop2 = Shop(username='shop_owner2', shopname='Shop 2', address='456 Elm St', contact='0987654321')
        shop3 = Shop(username='shop_owner3', shopname='Shop 3', address='789 Oak St', contact='9876543210')
        shop4 = Shop(username='shop_owner4', shopname='Shop 4', address='101 Maple St', contact='5551234567')
        shop5 = Shop(username='shop_owner5', shopname='Shop 5', address='678 Pine St', contact='3334445678')
        shop6 = Shop(username='shop_owner6', shopname='Shop 6', address='246 Cedar St', contact='4445556789')
        shop7 = Shop(username='shop_owner7', shopname='Shop 7', address='135 Walnut St', contact='7778889999')
        shop8 = Shop(username='shop_owner8', shopname='Shop 8', address='864 Birch St', contact='6669998888')
        shop9 = Shop(username='shop_owner9', shopname='Shop 9', address='753 Oak St', contact='1112223333')
        shop10 = Shop(username='shop_owner10', shopname='Shop 10', address='369 Elm St', contact='4445556666')
        
        # Create products
        product1 = Product(name='Product 1', description='Description of Product 1', quantity='10', image='product1.jpg')
        product2 = Product(name='Product 2', description='Description of Product 2', quantity='20', image='product2.jpg')
        product3 = Product(name='Product 3', description='Description of Product 3', quantity='15', image='product3.jpg')
        product4 = Product(name='Product 4', description='Description of Product 4', quantity='25', image='product4.jpg')
        product5 = Product(name='Product 5', description='Description of Product 5', quantity='8', image='product5.jpg')
        product6 = Product(name='Product 6', description='Description of Product 6', quantity='30', image='product6.jpg')
        product7 = Product(name='Product 7', description='Description of Product 7', quantity='12', image='product7.jpg')
        product8 = Product(name='Product 8', description='Description of Product 8', quantity='18', image='product8.jpg')
        product9 = Product(name='Product 9', description='Description of Product 9', quantity='22', image='product9.jpg')
        product10 = Product(name='Product 10', description='Description of Product 10', quantity='17', image='product10.jpg')
        product11 = Product(name='Product 11', description='Description of Product 11', quantity='20', image='product11.jpg')
        product12 = Product(name='Product 12', description='Description of Product 12', quantity='15', image='product12.jpg')
        product13 = Product(name='Product 13', description='Description of Product 13', quantity='23', image='product13.jpg')
        product14 = Product(name='Product 14', description='Description of Product 14', quantity='16', image='product14.jpg')
        
        # Add shops and products to database
        db.session.add_all([shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10,
                            product1, product2, product3, product4, product5, product6, product7, product8, 
                            product9, product10, product11, product12, product13, product14])
        db.session.commit()

        # Create relationships between shops and products
        shop_product1 = Shopproduct(shop_id=shop1.id, product_id=product1.id, price=100)
        shop_product2 = Shopproduct(shop_id=shop2.id, product_id=product2.id, price=200)
        shop_product3 = Shopproduct(shop_id=shop3.id, product_id=product3.id, price=150)
        shop_product4 = Shopproduct(shop_id=shop3.id, product_id=product4.id, price=250)
        shop_product5 = Shopproduct(shop_id=shop4.id, product_id=product5.id, price=180)
        shop_product6 = Shopproduct(shop_id=shop4.id, product_id=product6.id, price=300)
        shop_product7 = Shopproduct(shop_id=shop5.id, product_id=product7.id, price=120)
        shop_product8 = Shopproduct(shop_id=shop5.id, product_id=product8.id, price=220)
        shop_product9 = Shopproduct(shop_id=shop6.id, product_id=product9.id, price=190)
        shop_product10 = Shopproduct(shop_id=shop6.id, product_id=product10.id, price=270)
        shop_product11 = Shopproduct(shop_id=shop7.id, product_id=product11.id, price=210)
        shop_product12 = Shopproduct(shop_id=shop8.id, product_id=product12.id, price=240)
        shop_product13 = Shopproduct(shop_id=shop9.id, product_id=product13.id, price=260)
        shop_product14 = Shopproduct(shop_id=shop10.id, product_id=product14.id, price=280)

        # Add shop products to database
        db.session.add_all([shop_product1, shop_product2, shop_product3, shop_product4, shop_product5, shop_product6, 
                            shop_product7, shop_product8, shop_product9, shop_product10, shop_product11, shop_product12,
                            shop_product13, shop_product14])
        db.session.commit()

if __name__ == '__main__':
    seed_data()
