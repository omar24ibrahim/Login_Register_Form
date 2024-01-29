CREATE Database registration;
USE registration;
CREATE Table user (
    user_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);
INSERT INTO user (email, name, password) VALUES ('test@test.com', 'test', 'testpassword');