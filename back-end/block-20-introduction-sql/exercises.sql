use PecasFornecedores;
select * from Pecas
where name like 'GR%';

select * from Fornecimentos
where peca = 2;

select peca as 'Peças', Preco as 'Preços', Fornecedor from Fornecimentos
where Fornecedor like '%N%';

select * from Fornecedores
where name like '%LTDA%';

select count(*) from Fornecedores
where name like '%F%';

select * from Fornecimentos
where Preco > 15
and Preco < 40
order by Preco;

select * from Vendas
where date(order_date) between '2018-04-12' and '2019-07-30';