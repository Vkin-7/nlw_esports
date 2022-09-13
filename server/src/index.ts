import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    console.log('ads route');

    res.send('acessou ads');
});

app.listen(3333);