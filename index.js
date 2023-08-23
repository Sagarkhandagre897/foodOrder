// app.js
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const config = require('./config/config');

const app = express();

app.use(express.static('public'));

// Redirect to registration page when accessing root URL
app.get('/', (req, res) => {
    res.redirect('index.html');
});

app.get('/register', (req, res) => {
    res.redirect('registration.html');
});
app.get('/login', (req, res) => {
    res.redirect('login.html');
});


mongoose.connect(config.mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
