CREATE DATABASE ucode_web;

CREATE USER 'overwolf'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL ON ucode_web.* TO 'overwolf'@'localhost';