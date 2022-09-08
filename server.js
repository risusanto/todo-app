const app = require('./app')

const host = 'localhost';
const port = 3000;

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})