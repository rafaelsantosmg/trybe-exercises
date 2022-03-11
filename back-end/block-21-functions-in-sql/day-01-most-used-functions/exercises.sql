select city.city, city.country_id, country.country
from sakila.city as city
inner join sakila.country as country
on city.country_id = country.country_id;

select film.title, film.language_id, lang.name 
from sakila.film as film
inner join sakila.language as lang
on film.language_id = lang.language_id;
