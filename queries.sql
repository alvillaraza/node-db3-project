-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT c.CategoryName as Category, p.* 
FROM Product as p
LEFT JOIN Category as c ON p.Id = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id, OrderDate, s.CompanyName
  FROM [Order]
  JOIN [Shipper] as s ON s.Id = [Order].ShipVia
  WHERE OrderDate < '2012-08-09'
  ORDER by OrderDate;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
--Product.ProductName, Product.UnitsOnOrder with Order.Id = 10251, SORT 
SELECT d.Quantity, p.ProductName
FROM [OrderDetail] as d
JOIN Product as p
ON p.id = d.ProductId
WHERE d.OrderId = '10251'
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
--OrderId, Companyname, Employees LastName
SELECT distinct od.OrderId, c.CompanyName, e.LastName
FROM OrderDetail as od
    JOIN [Order] as o
    on od.OrderId = o.id
JOIN Customer as c
    on o.CustomerId = c.id
JOIN Employee as e
    on o.EmployeeId = e.id;
