const express = require("express");
const bodyParser = require('body-parser');
const Student = require("./connect"); 
const Donation = require("./server");
const app = express();
const encoded = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
    res.sendFile(__dirname + (req.query.page === 'donation' ? '/donation.html' : '/signup.html'));
});

app.get('/donation', (req, res) => {
    res.sendFile(__dirname + '/donation.html');
});

app.post('/donation', encoded, async (req, res) => {
    try {
        let donation = new Donation(req.body); 
        await donation.save();
        res.send(`<center><h2>Donation Successful</h2>
        <p>Thank you for your donation!</p>
        </center>`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/signup', encoded, async (req, res) => {
    try {
        let student = new Student(req.body);
        await student.save();
        res.send(`<h2>User Registration</h2>
        <p>Click <a href="/login">here</a> to login or click <a href="/">to refresh</a>`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/loggedin', encoded, async (req, res) => {
    const { username, password } = req.body;
    try {
        const student = await Student.findOne({ email: username, password: password });
        if (student) {
            res.redirect('/dashboard');
        } else {
            res.status(401).send('Invalid Username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/dashboard', (req, res) => {
    res.redirect('http://127.0.0.1:5500/index.html'); 
});

app.listen(4000, () => {
    console.log("Server is running at port 4000");
});
