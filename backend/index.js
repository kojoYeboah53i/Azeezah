const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();
app.use(bodyParser.json())
//allow origin access
app.use(cors({
  origin: '*'
}))

//add public folder to the client 
app.use(express.static(path.join(__dirname, './public')));

app.use('/api', routes)

app.get('/', (req, res) => {
    res.json({ message: 'App API is working successfully' })
});


app.listen(5584, () => {
    console.log('Server started , http://localhost:5584');
})