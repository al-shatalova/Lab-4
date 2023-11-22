CREATE TABLE Products124
(
    Id INT PRIMARY KEY,
    ProductName CHAR(30) NOT NULL,
    Manufacturer CHAR(20) NOT NULL,
    ProductCount INT DEFAULT 0,
    Price MONEY NOT NULL
);
