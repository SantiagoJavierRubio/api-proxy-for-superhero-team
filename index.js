const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to this API proxy. This is meant to solve an http/https issue when consulting an API for a dev challenge')
})

app.post('/api', async (req, res) => {
    const userData = req.body;
    try{
        const apiRes = await axios.post('http://challenge-react.alkemy.org/', { email: userData.email, password: userData.password });
        res.status(200).send(apiRes.data);
    } catch(err){
        res.status(400).json({ message: err.message });
    }

})
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})