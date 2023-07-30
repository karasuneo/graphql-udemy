CREATE USER 'udemy_user' @'%' IDENTIFIED BY 'udemy_pass';

GRANT ALL PRIVILEGES ON *.* TO 'udemy_user' @'%';