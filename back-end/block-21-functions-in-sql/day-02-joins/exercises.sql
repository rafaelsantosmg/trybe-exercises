USE Pixar;
SELECT m.title, b.domestic_sales, b.international_sales FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id;

SELECT m.title, (b.domestic_sales + b.international_sales) AS 'Vendas' FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

SELECT m.title, b.rating FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
ORDER BY b.rating DESC;

USE Pixar;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
LEFT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;