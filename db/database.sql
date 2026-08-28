CREATE DATABASE IF NOT EXISTS collegedb;

USE collegedb;

CREATE TABLE students (
    id INT(7) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    note INT(3) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE students;

INSERT INTO students VALUES
(1, 'Jose', 67),
(2, 'Carim', 84),
(3, 'Martha', 85),
(4, 'Julian', 50);

SELECT * FROM students;