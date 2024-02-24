from .models import db, Shop, Product, Shopproduct
from .config import app

def seed_data():
    with app.app_context():

        Shop.query.delete()
        Product.query.delete()
        Shopproduct.query.delete()
        # Create shops
        shop1 = Shop(username='John Dai', shopname='Ever Green', address='123 Main St, Nairobi, Kenya', contact=123456789)
        shop2 = Shop(username='Alice Kamau', shopname='Afro Chic Boutique', address='456 Moi Avenue, Mombasa, Kenya', contact=798765432)
        shop3 = Shop(username='Peter Maina', shopname='Safari Crafts', address='789 Kenyatta Avenue, Nakuru, Kenya', contact=876543210)
        shop4 = Shop(username='Grace Wanjiku', shopname='Kilimanjaro Fashion House', address='101 Tom Mboya Street, Kisumu, Kenya', contact=55123456)
        shop5 = Shop(username='James Mwangi', shopname='Serengeti Jewelry', address='678 Biashara Street, Eldoret, Kenya', contact=334445678)
        shop6 = Shop(username='Fatma Ahmed', shopname='Zanzibar Treasures', address='246 Lamu Road, Malindi, Kenya', contact=445556789)
        shop7 = Shop(username='Charles Omondi', shopname='Maasai Mara Crafts', address='135 Naivasha Road, Naivasha, Kenya', contact=777888999)
        shop8 = Shop(username='Esther Njeri', shopname='Kiswahili Delights', address='864 Diani Beach Road, Diani, Kenya', contact=669998888)
        shop9 = Shop(username='Stephen Kariuki', shopname='Nairobi Gems', address='753 Langata Road, Nairobi, Kenya', contact=112223333)
        shop10 = Shop(username='Lucy Wangari', shopname='Kikoy Paradise', address='369 Lamu Street, Lamu, Kenya', contact=445556666)

        
        # Create products
        product1 = Product(name='Fresh Grade A Large Eggs', description='Farm-fresh large eggs, perfect for breakfast or baking.', quantity='12', image='https://images.pexels.com/photos/2985167/pexels-photo-2985167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        product2 = Product(name='Organic Avocado', description='Creamy and nutrient-rich Hass avocados, locally sourced from Kenyan farms.', quantity='20', image='https://www.pexels.com/photo/halves-of-unpeeled-avocado-in-studio-6157033/')
        product3 = Product(name='Handwoven Kiondo Bag', description='Traditional handwoven Kiondo bag made from sisal and recycled plastic, durable and eco-friendly.', quantity='15', image='https://media.istockphoto.com/id/1810018646/photo/hand-woven-shopping-bags-at-a-moroccan-market.jpg?s=1024x1024&w=is&k=20&c=jm-6SLFes2w6EIUirg2D-x2u1_ZLQDHOuPT2Gjdi-Zc=')
        product4 = Product(name='Maasai Beaded Necklace', description='Beautifully crafted Maasai beaded necklace, featuring intricate patterns and vibrant colors.', quantity='25', image='https://media.istockphoto.com/id/1088342176/photo/masais-bracelets.jpg?s=1024x1024&w=is&k=20&c=WFzpC2KHiyqgdUV64DibOTlFf7buDOY7NjUv58C35SQ=')
        product5 = Product(name='Kenyan Black Tea', description='Premium black tea leaves, carefully selected and packed for a rich and aromatic cup of tea.', quantity='8', image='https://media.istockphoto.com/id/1156623111/photo/two-cups-of-hot-tea-bags-cookies-and-honey-the-process-of-brewing-tea-selective-focus.jpg?s=1024x1024&w=is&k=20&c=TSijWNiX3PEwWj6DFtrNo193RF-KhsnBo49k5XTLivI=')
        product6 = Product(name='Kikoy Beach Towel', description='Colorful and lightweight Kikoy beach towel, perfect for lounging by the beach or poolside.', quantity='30', image='https://media.istockphoto.com/id/518284570/photo/beach-towel-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=cbXMQMlVy8WgxhHEkA2e5NtA7vOCUJF_A-dxT7m29_o=')
        product7 = Product(name='Mango Fruit', description='Fresh and Juicy, straight from farm.', quantity='12', image='https://media.istockphoto.com/id/478090801/photo/mango.jpg?s=1024x1024&w=is&k=20&c=Xm9Ex1-orCXzteXzgBcJvaycnfE3oORH5Zgj4RhsE5s=')
        product8 = Product(name='Ripe Bananas', description='Freash and ready to eat.', quantity='18', image='https://www.pexels.com/photo/ripe-bananas-2316466/')
        product9 = Product(name='Artistic wooden Chair', description='Artistic wooden chair so strong and durable', quantity='22', image='https://www.pexels.com/photo/brown-wooden-chair-116910/')
        product10 = Product(name='Kitenge Fabric Dress', description='Stylish Kitenge fabric dress, handmade by local artisans, featuring unique African prints and designs.', quantity='17', image='https://media.istockphoto.com/id/164297978/photo/african-american-fashion-model.jpg?s=1024x1024&w=is&k=20&c=u8INSleKiBvYsBooRNkwfh1l6U5W6hVlBegpr_Pocs4=')
        product11 = Product(name='Sports shoes', description=' comfortable and stylish for everyday wear.', quantity='20', image='https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        product12 = Product(name='Kenyan Maize Flour', description='High-quality maize flour, stone-ground and sifted for making delicious ugali, a staple food in Kenyan cuisine.', quantity='15', image='https://media.istockphoto.com/id/1333161790/photo/corn-flour-and-fresh-sweetcorn-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=kuQgzqcpjk3QFlrmJWjvxxaRy5HXfuDj_c0WAEuZvrg=')
        product13 = Product(name='African Shea Butter', description='Pure and natural African shea butter, rich in vitamins and antioxidants, perfect for moisturizing skin and hair.', quantity='23', image='https://images.pexels.com/photos/94443/pexels-photo-94443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        product14 = Product(name='Apple', description='Fresh and ready to eat', quantity='16', image='https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

        # Add shops and products to database
        db.session.add_all([shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10,
                            product1, product2, product3, product4, product5, product6, product7, product8, 
                            product9, product10, product11, product12, product13, product14])
        db.session.commit()

        # Create relationships between shops and products
        shop_product1 = Shopproduct(shop_id=shop1.id, product_id=product1.id, price=200)
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