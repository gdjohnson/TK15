function customWikiLinks(label) {
  console.log(label);
  return label.replace(/ /g, '%20');
}

const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    })  
    .use(require('markdown-it-wikilinks')({
      linkpattern: '/\[\[([\w\s/]+)(\|([\w\s/]+))?\]\]/',
      relativeBaseURL: './texts/',
      generatePageNameFromLabel: customWikiLinks
    }))
    .use(require('markdown-it-wiki-toc'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'));

const div = document.querySelector('.markdown');
const texts = require('./texts');
const currFile = texts[div.id];
div.innerHTML = md.render(currFile.text);
