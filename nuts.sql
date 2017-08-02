CREATE TABLE Products (
  item_id INT(11) AUTO_INCREMENT NOT NULL,
  product_name varchar(30) not null,
  department_name varchar(30) not null,
  price INT(10) default null,
  stock_quantity INT(10) default null,
PRIMARY KEY (item_id)

);



INSERT INTO Products(item_id)
VALUES ("peanuts");

INSERT INTO Products(item_id)
Values ("almonds");

INSERT INTO Products(item_id)
Values ("peanuts");

INSERT INTO Products(item_id)
Values ("cashews");

INSERT INTO Products(item_id)
Values ("protein");

INSERT INTO Products(item_id)
Values ("walnuts");

INSERT INTO Products(item_id)
Values ("pecans");

INSERT INTO Products(item_id)
Values ("mac");
