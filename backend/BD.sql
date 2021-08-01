create database api_restaurant;

create table if not exists categoria
(
	id serial unique primary key not null,
	nome varchar(30) not null
);
create table if not exists usuario
(
	id serial unique primary key not null,
	nome varchar(100) not null,
	email varchar(100) not null,
	senha text not null
);
create table if not exists restaurante
(
	id serial unique primary key not null,
	usuario_id integer not null,
  	nome varchar(50) not null,
  	descricao varchar(100),
 	categoria_id integer not null,
 	taxa_entrega integer not null default 0,
 	tempo_entrega_minutos integer not null default 30,
 	valor_minimo_pedido integer not null default 0,
  
  	foreign key (usuario_id) references usuario (id),
  	foreign key (categoria_id) references categoria (id)
);
create table if not exists produto
(
	id serial unique primary key not null,
  	restaurante_id integer not null,
  	nome varchar(50) not null,
  	descricao varchar(100),
 	preco integer not null,
	ativo boolean not null default true,
	permite_observacoes boolean not null default false,
  
    foreign key (restaurante_id) references restaurante (id)
);

insert into "categoria" (nome) values ('Diversos'),('Lanches'), ('Carnes'), ('Massas'), ('Pizzas'), ('Japonesa'), 
('Chinesa'), ('Mexicano'), ('Brasileira'), ('Italiana'), ('Árabe');