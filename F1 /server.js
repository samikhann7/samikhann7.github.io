const Express = require('express');
const app = new Express();
const path=require('path')

app.use(Express.static(__dirname+'/public'));
// app.use(Express.static(path.join(__dirname, "/public")));

const http=require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=3000;
const F1=fs.readFileSync('F1.html')
const F2=fs.readFileSync('F2.html')
const F3=fs.readFileSync('F3.html')
const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    req.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url=='/'){
        res.end(F1);
    }
    else if(url=='/F2'){
        res.end(F2);
    }
    else if(url=='/F3'){
        res.end(F3);
    }
    else{
        req.statusCode=404;
        res.end('<h1>404 Not Found</h1>');
    }
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})
