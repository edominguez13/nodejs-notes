// http built-in module

const http = require('http')

const server = http.createServer( // receives a callback function as a parameter
    (
        req, // request
        res //  response
     ) => 
        //{
    //     // res.write('Welcome to our home page') // we can place this text inside the res.end()
    //     // res.end()

    //     // console.log(req) // the request object is massive

    //     if (req.url === '/'){
    //         res.end('Welcome to our home page')
    //     }
    //     if (req.url === '/about'){
    //         res.end('About page')
    //     }

    //     // In the case of writing an unespecified Url
    //     res.end(`
    //         <h1>Opps!</h1>
    //         <p>We can't seem to find the page you are looking for</p>
    //         <a href="/">back home</a>
    //     `)
    // })

    {
        if (req.url === '/') { // better code, in the previous one we called res.end() twice and it threw an error because the respones was already ended, cant close twice
            res.end('Welcome to our home page');
        } else if (req.url === '/about') {
            res.end('About page');
        } else {
            res.end(`
                <h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href="/">back home</a>
            `);
        }
    });




server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
 // receives the port number
// when running this code, go to the browser and check
// localhost:5000

// to exit just prest Ctrl+C

// this is our first website with node