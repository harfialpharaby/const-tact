'use strict'

const http = require('http');

// POST PROCESS
function addContact() {
    const data = JSON.stringify({
        fullName: 'ilham',
        phone: '1234567890'
    });
    
    const postOpt = {
        host: 'localhost',
        port: 3000,
        path: '/contact/add',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    
    const req = http.request(postOpt, (res) => {
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', (d) => {
            process.stdout.write(d)
        })
    })
      
    req.on('error', (error) => {
        console.error(error)
    })
      
    req.write(data);
    req.end();
}

// GET PROCESS
function getAllContacts() {
    const reqOpt = {
        host: 'localhost',
        port: 3000,
        path: '/contact',
        method: 'GET'
    };
    
    http.request(reqOpt, (res) => {
        res.on('data', (chunk) => {
            document.getElementById('app').innerHTML = `hello`;
        });
    }).end();
}

getAllContacts();