const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config({
    path: './.env'
});

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);    
});
