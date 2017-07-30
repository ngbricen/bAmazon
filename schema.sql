DROP DATABASE IF EXISTS bAmazonDB;
CREATE DATABASE bAmazonDB;

USE bAmazonDB;

CREATE TABLE IF NOT EXISTS products(
	item_id INT AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(30),
	price DECIMAL(18,2),
	stock_quantity INT,
	PRIMARY KEY (item_id)
);

INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Samsung S9", "Electronics", 900.00,50);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Sony TV 100 in", "Electronics", 5500.00,10);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Brown Sofa", "Furniture", 2000.00,5);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Glass Table", "Furniture", 500.00,2);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Dining Room", "Furniture", 320.00,10);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Ultra Microwave", "Appliance", 200.00,-4);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Modern Combo Washer Dryer", "Appliance", 2000.00,30);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Learn Coding in 1 day", "Books", 120.00,1000);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Rich Dad, Poor Dad", "Books", 35.00,10);
INSERT INTO Products(product_name,department_name,price,stock_quantity)
VALUES("Astronomy in a nutshell", "Books", 25.00,150);