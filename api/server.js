const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('../users/users-router');
const logger = require('../middleware/logger')


const server = express();

server.use(cors())
server.use(express.json());
server.use(cookieParser())
server.use(logger())

server.use(userRouter);

server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;