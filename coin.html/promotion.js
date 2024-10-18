const promotion = document.querySelector('.advanced-table1')
fetch('./promotionp.html')
.then(res=>res.text())
.then(data=>{
    promotion.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})