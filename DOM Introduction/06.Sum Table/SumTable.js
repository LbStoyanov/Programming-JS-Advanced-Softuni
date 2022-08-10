function sumTable() {
    let costs = document.querySelectorAll('tr td:nth-of-type(2)');

    let costsArr = Array.from(costs).reduce((a,x) =>{
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue;
    }, 0);

    let result = document.getElementById('sum')
    result.textContent = costsArr;
    
}