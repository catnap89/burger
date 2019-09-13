CREATE DATABASE burger_db;
USE burger_db;

-- create burger table with
-- id (an auto incrementing int that serves as the primary key)/ burger_name(string) / devoured (boolean)

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
  devoured BOOLEAN not null default false,
	PRIMARY KEY (id)
);

CREATE TABLE toppings
{
	id int NOT NULL AUTO_INCREMENT,
	topping_name varchar(255) NOT NULL,
	PRIMARY_KEY (id)
}