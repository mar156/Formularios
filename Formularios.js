const express= require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/FormularioNewseller.html');
});

app.listen(3000, () => {console.log('El servidor funciona bien')});
