const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();


app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(routes);



const port = process.env.PORT || 3000;


app.listen(port, () => console.log('Your app is listening on port ' + port));
