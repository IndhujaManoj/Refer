create database indhuja;
show database;
use indhuja;
create table users(id int not null auto_increment ,name varchar(15),age int not null,primary key(id));
);
show tables;
describe users;
alter table users add gender varchar(10) not null after age;
alter table users add city varchar(15) not null , add contact varchar(15) not null;
describe users;
alter table users modify contact varchar(25) not null;
alter table users rename to students;
select * from students;
insert into students values(null,'ram',25,'male','salem','84074747984');
insert into students(name,age,gender,city,contact)values('sam', 23,'male','nagercoil','756067980')
select *from 

