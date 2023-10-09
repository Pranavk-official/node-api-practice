const express = require('express');

const app = express()

app.set('view engine', 'ejs')

const router = require('./routes/main')

app.use('/', router)
app.use('/products', router)

app.listen(4000, () => {
    console.log(`listening on port : http://localhost:4000`);
})