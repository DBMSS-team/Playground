# sahil-poc

## MongoDB connection

Follow following steps to connect to the mongo DB:

- Copy `.env` file under db folder in your service's db folder.
- Update the <password> and <db_name> in that file.
- Use `mongoose` to make the connection to the DB:

```js
const mongoose = require('mongoose');

// Get the environment variables from .env file
require('dotenv').config();
const uri = process.env.ATLAS_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		createIndexes: true,
	})
	.catch(function () {
		console.log('DB connection error');
	});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`MongoDB database connection established successfully`);
});
```
