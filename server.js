var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':  {
        title: 'Article one | Jijo Raju',
        heading: 'Article one',
        date: ' 5 jan 2016',
        content:`<p>
                        Hi i am jijo and this is my first article.
                </p>`
    },
    'article-two':  {
        title: 'Article two | Jijo Raju',
        heading: 'Article two',
        date: ' 15 jan 2016',
        content:`<p>
                    Hi i am jijo and this is my second article.
                </p>`
    },
    'article-three':  {
        title: 'Article three | Jijo Raju',
        heading: 'Article three',
        date: ' 25 jan 2016',
        content:`<p>
                    Hi i am jijo and this is my third article.
                </p>`
    }
    
};



function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
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
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res){
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
