const express = require('express');
const app = express();
const PORT = 9192;

app.use(express.static('public'));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));