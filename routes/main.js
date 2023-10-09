const express = require('express');
const router = express.Router()
const axios = require('axios');


router.get('', async (req,res) => {
    try {
        const user = await axios.get(`https://reqres.in/api/users`)
        console.log(user.data);
        res.render('index', {users: user.data.data})

    } catch (error) {
        console.log(error);
    }
})

router.get('/products', async (req,res) => {
    try {
        const photos = await axios.get(`https://dummyjson.com/products`)
        // console.log(photos.data.products);
        res.render('products', {photos: photos.data.products})

    } catch (error) {
        console.log(error);
    }
})

module.exports = router