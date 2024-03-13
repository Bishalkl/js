

--       this is to create database -- 
-- CREATE DATABASE somthing;

--       this is to create a table in database
-- CREATE TABLE something();

--       this is to rename the table name --
-- RENAME TABLE workers TO employees;
-- DROP TABLE employees;

--       this is to add the new table to the column --
-- ALTER TABLE employees
-- ADD phone_number VARCHAR(15);


--       this is to rename column of table --
-- ALTER TABLE employees
-- RENAME COLUMN phone_number to email;

--       this is to modify the datatype of column in table --
-- ALTER TABLE employees
-- MODIFY COLUMN email VARCHAR(100);

--       this is to modify the postion of column in table  --
-- ALTER TABLE employees
-- MODIFY email VARCHAR(100)
-- FIRST;

--       this is to delete the column from table --
-- ALTER TABLE employees
-- DROP COLUMN email;

--       this is to select and check the database 
-- SELECT *
-- FROM employees
