//examine the document object
//console.dir(document)
console.log(document.URL)
console.log()
document.title=123
console.log(document.fonts)
console.log(document.forms)
console.log(document.links)
console.log(document.images)
var headerTitle= document.getElementById('header-title');
var header=document.getElementById('main-header')

console.log(headerTitle)
// headerTitle.textContent='hello'
// headerTitle.innerText='goodbye'
console.log(headerTitle.innerText)  //innertext pays attention to only text no styling etc
headerTitle.innerHTML='<h3>hello</h3>'
console.log(headerTitle.innerHTML)
header.style.borderBottom='solid 3px #000'


//getelementsbyclassname

var items=document.getElementsByClassName('list-group-item')
console.log(items)



var addItem=document.getElementsByClassName('title')
addItem[0].style.color='green'

