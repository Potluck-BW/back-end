const express = require("express")
const helmet = require("helmet")
// const cookieParser = require('cookie-parser');
const server = express()
const cors = require("cors")
const session = require("express-session")
const usersRouter = require("./user/users-router")




server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use(cookieParser());



server.use(usersRouter);
// for the web token restricts session
// server.use('/',);




server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
