# markdown-it-api
markdown转html，基于markdown-it的的二次开发api版本，severless，可部署在vercel

## 使用  
直接GET相应链接。格式如下：
```
https://markdown.api.ravelloh.top/?url=xxx
```
例如：
```
https://markdown.api.ravelloh.top/?url=https://raw.githubusercontent.com/RavelloH/virgule.js/main/README.md
```
这将把https://raw.githubusercontent.com/RavelloH/virgule.js/main/README.md 中的markdown转换为html  

另外提供一个异步请求函数，以供调用此API
```
async function getMarkdownToHTML(url) {
    let data = await (await fetch('https://markdown.api.ravelloh.top/?url='+url)).text()
    console.log(data)
}

// use
getMarkdownToHTML('https://raw.githubusercontent.com/RavelloH/markdown-it-api/main/README.md')
```
## 效果 
生成效果:
```
<h1>virgule.js</h1>
<p>Use virgule to transform characters. / 使用斜杠转换字符。</p>
<h2>usage method</h2>
<pre><code class="language-js">virgule(target,context,speed)
</code></pre>
<p>example:</p>
<pre><code class="language-js">virgule(document.getElementById('jumping'), 'Place the text you want as the result here',100)
</code></pre>
```

## 部署  
可直接部署在vercel。  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRavelloH%2Fmarkdown-it-api%2F&project-name=markdownitapi&repository-name=markdown-it-api)

## 本地运行
```
git clone https://github.com/RavelloH/markdown-it-api/
cd markdown-it-api
npm install
vercel dev
```
