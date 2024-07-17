// const express = require('express');

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.use(cors())

// home page
app.get('/courses', (req , res) => {
    const courses = [
        {
            id : 1,
            courseName : "MERN"
        },
        {
            id : 2,
            courseName : "MEAN"
        },
        {
            id : 3,
            courseName : "MERP"
        },
        {
            id : 4,
            courseName : "UI/UX"
        },
        {
            id : 5,
            courseName : "DS"
        }
    ]
    res.send(courses);
})

//services page
app.get('/services', (req , res) => {

    res.send('Hello from services page');
})

app.listen(port, () => {
    console.log(`server is running on http://${hostname}:${port}`)
})

