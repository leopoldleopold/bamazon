DROP DATABASE IF EXISTS bamazon_DB;

CREATE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(60) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

-- initial mock items
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Hygiene", 3.25, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Halo", "Video Games", 25, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 10, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Michael Jackson's 'Thriller'", "Music", 8, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone 5", "Electronics", 50, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheetos", "Food & Grocery", 3.99, 68);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1997 Honda Civic LX", "Motors", 2995, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Appliances", 29.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Imitation Van Gogh", "Decoration", 65.95, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bicycle", "Sports", 199.99, 5);













