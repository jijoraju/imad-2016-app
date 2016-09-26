var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one | Jijo Raju',
    heading: 'Article one',
    date: ' 5 jan 2016',
    content:`<p>
                    Hi i am jijo and this is my first article.
                </p>
                <p>
                    Hi i am jijo and this is my first article.
                </p>
                <p>
                    Hi i am jijo and this is my first article.
                </p>`
};

function createTemplate(data){
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title> 
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewpoint" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div class="container">
            <div>
                <h1> ${heading} </h1>
                <hr/>
            </div>
            <div>
                <h4>${date}</h4>
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
    
    
    </html>
    `;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
