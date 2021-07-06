const express = require('express');
const app= express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const jwt = require('jsonwebtoken');

app.use(express.json());

const form = [
    {
        username: "Mahesh"
    },
    {
        password: "password"
    }
]

app.get('/', (req, res) => {
res.json(form);

})
app.post('/login' , (req, res) =>{
    const token =
    {
        username: req.body.username,
        password: req.body.password
    }
   

    const token2 = jwt.sign(token, process.env.ACCESS_TOKEN_SECRET);

    jwt.verify(token2, process.env.ACCESS_TOKEN_SECRET, (err, user) =>
    {
        const uid= user.username;
        const pid= user.password;

        console.log(uid);
        console.log(pid);
    }
    );
    res.json(token2);
})


app.listen(PORT, ()=> console.log(`Server is starting/running @ http://localhost:${PORT}`));