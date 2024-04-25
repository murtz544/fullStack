import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id : 1,
            title : 'joke1',
            content : 'first joke'
        },
        {
            id : 2,
            title : 'joke2',
            content : 'second joke'
        }
    ]
    res.send(jokes);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);    
});