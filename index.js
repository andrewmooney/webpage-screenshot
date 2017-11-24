'use strict'

// Packages
const express = require('express');
const app = express();
const exec = require('child_process').exec;
const config = require('./config.js');
const validUrl = require('valid-url');

const port = 3000;

app.get('/', (req, res) => {
    const uri = req.query.uri,
        output = req.query.output;

    if (!validUrl.isUri(uri)) return res.json({ message: 'The uri supplied is invalid'});

    const cmd = ['phantomjs', 'phantomjs-scripts.js', uri, output].join(' ');
    exec(cmd, (error) => {
        if (error) return res.status(400).json({ message: `Something went wrong ${error}` });
        return res.json({ message: 'It worked!!' });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`))


