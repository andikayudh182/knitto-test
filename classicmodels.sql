SELECT ord.customerNumber, prd.productLine from orders as ord
JOIN orderdetails as ordetails ON ord.orderNumber = ordetails.orderNumber
JOIN products as prd ON prd.productCode = ordetails.productCode
WHERE prd.productLine = 'Classic Cars'
GROUP BY ord.customerNumber 
HAVING COUNT(prd.productLine) > 23;