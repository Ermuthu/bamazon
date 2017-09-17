DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(75) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES 
("influenza", "health", 5, 7756), 
("goblet of fire", "mythical objects", 320310, 1), 
("king arthurs round table", "mythical objects", 1345999, 1),
("dragon", "mythical beasts", 9235998, 2),
("cure for cancer", "health", 7455360, 1),
("jackson pollock drip painting", "art", 5000000, 7),
("Queen Elizabeth I bobblehead", "odds and ends", 3, 4600),
("sql injection", "computing", 950, 46),
("the hiccups", "health", 4, 26),
("great white shark", "entertainment", 1100, 4);