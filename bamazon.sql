CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	itemID INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR(45) NULL,
    departmentName VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stockQuantity INT NULL,
    PRIMARY KEY (`itemID`)
);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Doritos', 'Food', 4, 50);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('iPhone 11 Pro', 'Mobile', 1300, 10);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Hail Stan', 'Music', 10, 60);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('One plus 8 Pro', 'Mobile', 900, 20);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Sunflower Seeds', 'Food', 2, 50);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('iPhone 11 Pro Max', 'Mobile', 1400, 8);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('When We All Fall Asleep, Where Do We Go?', 'Music', 10, 70);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Belvita', 'Food', 5, 40);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('RTX 1080 8gb', 'PC', 750, 10);
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ('Intel i9 9900k', 'PC', 505, 15);

SELECT * FROM products;