from models import db, Shop, Product, Shopproduct
from app import app

def seed_data():
    with app.app_context():

        # Create shops
        shop1 = Shop(username='shop_owner1', shopname='Shop 1', address='123 Main St', contact='1234567890')
        shop2 = Shop(username='shop_owner2', shopname='Shop 2', address='456 Elm St', contact='0987654321')
        
        # Create products
        product1 = Product(name='Product 1', description='Description of Product 1', quantity='10', image='product1.jpg')
        product2 = Product(name='Product 2', description='Description of Product 2', quantity='20', image='product2.jpg')
        
        # Add shops and products to database
        db.session.add_all([shop1, shop2, product1, product2])
        db.session.commit()

        # Create relationships between shops and products
        shop_product1 = Shopproduct(shop_id=shop1.id, product_id=product1.id, price=100)
        shop_product2 = Shopproduct(shop_id=shop2.id, product_id=product2.id, price=200)

        # Add shop products to database
        db.session.add_all([shop_product1, shop_product2])
        db.session.commit()

if __name__ == '__main__':
    seed_data()
