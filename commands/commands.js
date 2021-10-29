const columns = [
  { field: 'command', headerName: 'Command', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 1 }
]
const rows = [
  { id: 1, command: 'create database [databasename];', description: 'Create a database on the SQL server' },
  { id: 2, command: 'show databases;', description: 'List all databases on the SQL server' },
  { id: 3, command: 'use [db name];', description: 'Switch to a database' },
  { id: 4, command: 'show tables;', description: 'To see all the tables in the DB' },
  { id: 5, command: 'describe [table name];', description: 'Show the information in detail' },
  { id: 6, command: 'drop database [database name];', description: 'To delete a database' },
  { id: 7, command: 'drop table [table name];', description: 'To delete a table' },
  { id: 8, command: 'SELECT * FROM [table name];', description: 'To show all data in table' },
  { id: 9, command: 'show columns from [table name];', description: 'Displays information about the columns in a given table' },
  { id: 10, command: 'SELECT * FROM [table name] WHERE [field name] = \'condition\';', description: 'Display selected rows with the value \'condition\'' },
  { id: 11, command: "INSERT INTO [table name] (Column1,Column2,Column3) VALUES(value1,value2,value3);", description: 'Insert new  into DB' },
  { id: 12, command: 'alter table [table name] modify [column name] VARCHAR(3);', description: 'Modify column type' },
  { id: 13, command: 'alter table [table name] drop column [column name];', description: 'Delete a column' },
  { id: 14, command: 'alter table [table name] add column [new column name] varchar (20);', description: 'Add a new column to DB' },
  { id: 15, command: 'alter table [table name] change [old column name] [new column name] varchar (50);', description: 'Change a column name' },
  { id: 16, command: 'alter table [table name] drop index [colmn name];', description: 'Delete unique from table' },
  { id: 17, command: 'CREATE TABLE [table name] (column1 datatype, column2 datatype, column3 datatype);', description: 'Create a new table in DB' },
  { id: 18, command: 'CREATE TABLE user (firstName VARCHAR(20),lasName VARCHAR(20), age INT);', description: 'Example create a new table in DB' },
];



export { rows, columns }