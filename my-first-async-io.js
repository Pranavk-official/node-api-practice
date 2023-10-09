const { log } = require('console');
const http = require('http');

http.get('http://api.open-notify.org/astros.json', resp => {
    let data = ''
    resp.on('data',chuck => {
        data += chuck
    });

    resp.on('end', ()=>{
        let jsonData = JSON.parse(data)
        console.log(jsonData);
    });
})
