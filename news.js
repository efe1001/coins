const news = document.querySelector('.carlist-wrapper')
fetch('/newscenter.html')
.then(res=>res.text())
.then(data=>{
    news.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})