const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((value) => {
		console.log('Database connected successfully!');
		app.listen(port, host, () =>
			console.log(`Server is running on: http://${host}:${port}`)
		);
	})
	.catch((error) => console.log(`ERROR_CONNECTING_DATABASE:${error}`));