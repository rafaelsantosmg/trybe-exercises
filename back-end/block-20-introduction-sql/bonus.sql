use Scientists;

select * from Scientists where name like '%e%';

select * from Projects where Name like 'a%' order by Name;

select Code, Name from Projects where code like '%3%' order by Name;

select Scientist from AssignedTo where Project in('AeH3', 'Ast3', 'Che1');

select * from Projects where Hours > 500;

select * from Projects where Hours > 250 and Hours < 800;

select Code, Name from Projects where Name not like 'A%';

select Name from Projects where Code like '%H%';