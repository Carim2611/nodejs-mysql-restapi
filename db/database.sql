CREATE DATABASE IF NOT EXISTS viajesdb;

USE viajesdb;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    email VARCHAR(40) DEFAULT NULL UNIQUE,
    fecha_nac DATE NOT NULL,
    pais VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE viajes (
    id INT NOT NULL AUTO_INCREMENT,
    origen VARCHAR(30) NOT NULL,
    destino VARCHAR(30) NOT NULL,
    fecha DATE NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cupos INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reservas (
    id INT NOT NULL AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    viaje_id INT NOT NULL,
    fecha_reserva DATE NOT NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    PRIMARY KEY (id),

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (viaje_id) REFERENCES viajes(id)
);

INSERT INTO usuarios (id, nombre, apellido, email, fecha_nac, pais) VALUES
(1, 'Jose', 'Ramirez', 'jose12e@gmail.com', '2000-05-12', 'Colombia'),
(2, 'Carim', 'Estrada', 'carime@gmail.com', '2003-11-26', 'Peru'),
(3, 'Martha', 'Martinez', 'mxrthx@gmail.com', '2001-07-23', 'Mexico'),
(4, 'Julian', 'Garcia', 'julianzz@gmail.com', '1995-11-30', 'Argentina');

INSERT INTO viajes (id, origen, destino, fecha, precio, cupos) VALUES
(1, 'Colombia', 'Ecuador', '2026-10-31', 180.00, 20),
(2, 'Peru', 'Mexico', '2028-01-28', 350.00, 15),
(3, 'Mexico', 'Peru', '2028-11-26', 280.00, 30),
(4, 'Argentina', 'Uruguay', '2027-02-14', 180.00, 18);

INSERT INTO reservas (id, usuario_id, viaje_id, fecha_reserva, estado) VALUES
(1, 1, 1, '2026-10-01', 'confirmada'),
(2, 2, 2, '2028-01-21', 'pendiente'),
(3, 3, 3, '2028-08-30', 'pendiente'),
(4, 4, 4, '2027-01-14', 'cancelada');

SELECT * FROM usuarios;
SELECT * FROM viajes;
SELECT * FROM reservas;