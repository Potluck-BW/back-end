const express = require("express")
const helmet = require("helmet")
// const cookieParser = require('cookie-parser');
const cors = require("cors")
const session = require("express-session")
const usersRouter = require("./users/users-router")




server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use(cookieParser());



server.use(userRouter);
// for the web token restricts session 
server.use('//',);




server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})
