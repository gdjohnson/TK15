# Markdown-It Wiki Custom Links


Renders Wiki-like links in [markdown-it](https://github.com/markdown-it/markdown-it). This is useful for making Markdown-based wikis.

## Usage

Install this into your project:

```bash
npm --save install markdown-it-wikicustom
```

...and *use* it:

```js
const wikilinks = require('markdown-it-wikicustom')(options)
const md = require('markdown-it')()
    .use(wikilinks)
    .render('Click [[Wiki Links|here]] to learn about [[/Wiki]] links.')
```

**Output:**

```html
<p>Click <a href="Wiki-Links">here</a> to learn about <a href="Wiki">Wiki</a> links.</p>
```


## Options

### `baseURL`

**Default:** ``

The base URL for absolute wiki links.

```js
const html = require('markdown-it')()
  .use(require('markdown-it-wikicustom')({ baseURL: '/wiki/' }))
  .render('[[Main Page]]')
  // <p><a href="/wiki/Main-Page.html">Main Page</a></p>
```

### `relativeBaseURL`

**Default:** ``

The base URL for relative wiki links.

```js
const html = require('markdown-it')()
  .use(require('markdown-it-wikicustom')({ relativeBaseURL: '#', suffix: '' }))
  .render('[[Main Page]]')
  // <p><a href="#Main-Page">Main Page</a></p>
```

### `makeAllLinksAbsolute`

**Default:** `false`

Render all wiki links as absolute links.

### `uriSuffix`

**Default:** ``

Append this suffix to every URL.

```js
const html = require('markdown-it')()
  .use(require('markdown-it-wikicustom')({ uriSuffix: '.php', relativeBaseURL: './' }))
  .render('[[Main Page]]')
  // <p><a href="./Main-Page.php">Main Page</a></p>
```

### `htmlAttributes`

**Default:** `{}`

An object containing HTML attributes to be applied to every link.

```js
const attrs = {
  'class': 'wikilink',
  'rel': 'nofollow'
}
const html = require('markdown-it')()
  .use(require('markdown-it-wikicustom')({ htmlAttributes: attrs }))
  .render('[[Main Page]]')
  // <p><a href="Main-Page" class="wikilink" rel="nofollow">Main Page</a></p>
```
  
