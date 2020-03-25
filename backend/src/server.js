const express = require('express');
const cors = require('cors');
const Routes = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(Routes);

server.listen(3333);