-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.Id, product.ProductName, category.CategoryName
FROM product
    LEFT JOIN category
    ON product.CategoryId = category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, shipper.companyName
FROM [order] as o
    JOIN shipper
    ON o.shipVia = shipper.id
WHERE o.orderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT product.productName, orderDetail.quantity
FROM orderDetail
    JOIN product
    ON orderDetail.productId = product.id
WHERE orderDetail.orderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id as OrderId, customer.CompanyName as CustomerName, employee.LastName as EmployeeLastName
FROM [order] as o
    JOIN customer ON o.CustomerId = customer.Id
    JOIN employee ON o.EmployeeId = employee.Id;

-- Stretch from https://www.w3schools.com/Sql/trysql.asp?filename=trysql_select_all

-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.
SELECT c.CategoryName, COUNT(*) as Count
FROM products as p
    JOIN categories as c ON p.categoryID = c.categoryID
GROUP BY c.CategoryName;

-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
SELECT OrderID, Count(*) as ItemCount
FROM orderDetails
GROUP BY OrderID;