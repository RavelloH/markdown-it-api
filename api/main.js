var md = require('markdown-it')({
  html: true
});
const request = require('request');

module.exports = (req, res) => {
    if (!req.url.includes("?url=")) {
        var target = 'https://raw.githubusercontent.com/RavelloH/markdown-it-api/main/README.md'
    } else {
        const {
            url
        } = req.query;
        var target = url;
    }
    console.log(target);
    var options = {
        'method': 'GET',
        'url': target
    }

    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.writeHead(200, {
            "Content-Type": "application/html"
        });
        res.write(md.render(response.body));
        res.end();
    });
}