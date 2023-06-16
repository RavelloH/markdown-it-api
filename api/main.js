const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const request = require('request');



export default function handler(req, res) {
    const {
        url
    } = req.query;
    
    let target = url;
    if (typeof url == 'undefined') {
        let target = 'https://raw.githubusercontent.com/RavelloH/markdown-it-api/main/README.md'
    };
    console.log(target);
    var options = {
        'method': 'GET',
        'url': target
    }

    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(md.render(response.body));
        res.end();
    });
}