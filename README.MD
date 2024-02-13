# Online Market
Welcome to the Online Market application where users own shops, post their products and can view other shops. February 5/02/2024

By Simon Ng'ang'a and Maurine Wambui

## Description

This is a simple online market application that allows users to create shops, view their own shops, and explore shops created by other users. The application consists of both a frontend and a Python Flask backend.

## Features

- **User Authentication:** Users can create accounts and log in securely to access the market.
- **Shop Creation:** Users can create their own shops where they can list products for sale.
- **Shop Exploration:** Users can browse and view shops created by other users.
- **Product Listing:** Shop owners can list products with details such as name, description, and price.
- **Responsive Design:** The frontend is designed to be accessible and usable across various devices and screen sizes.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Python
  - Flask
  - SQLAlchemy (for database interaction)

## Setup Instructions

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. run:  
    - pipenv  install to install all dependencies
    - then pipenv  shell  to set up the  virtual environment
    - Afterwards  move to the backend folder  run:
           - flask db upgrade
           - python seed.py
           - python app.py

4. Navigate  to the  client  folder  and run  
    - npm install
    - npm start

## Usage

1. Open your web browser and navigate to `http://localhost:4000`.
2. Sign up for a new account or log in if you already have one.
3. Create your own shop or explore shops created by others.
4. create  a new  shop  and add products  for others to view  product  in it
5. Enjoy  the Online Market!

## Contributors

- [maurine](https://github.com/maurineA)
- [simon](https://github.com/33-66)

## License

MIT License

Copyright © 2024 Simon, Maurine

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
