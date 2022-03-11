SELECT act.actor_id, act.first_name, fact.actor_id FROM sakila.actor as act
INNER JOIN sakila.film_actor as fact
ON act.actor_id = fact.actor_id;

SELECT st.first_name, sr.last_name, adr.address FROM sakila.staff as st
INNER JOIN sakila.address as adr
ON st.address_id = adr.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address FROM sakila.customer as c
INNER JOIN sakila.address as a
on c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
