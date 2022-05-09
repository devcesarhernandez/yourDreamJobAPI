require("dotenv").config()

const env = {
	port:process.env.PORT,
    jwtSecret:process.env.JWT_SECRET,
    dbUsername:process.env.DB_USERNAME,
    dbPassword:process.env.DB_PASSWORD,
    dbHost:process.env.DB_HOST,
    dbName:process.env.DB_NAME,
	emailUser:process.env.EMAIL_USER,
	emailPass:process.env.EMAIL_PASS,
}

module.exports = env