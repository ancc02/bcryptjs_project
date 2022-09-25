const express = require('express');
const bcrypjs = require('bcryptjs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', async (req, res) => {
    const user = req.body.user;
    const password = req.body.pass;

    if (user == 'admin' && password == '12345') {
        let passwordHash = await bcrypjs.hash(password, 8);
        res.send({
            message: 'AUTENTICACION EXITOSA',
            passwordHash: passwordHash
        });
    } else {
        res.send({
            message: 'INGRESE CORRECTAMENTE SUS CREDENCIALES'
        });
    }
});

app.listen(3000, () => {
    console.log('SERVER UP')
});