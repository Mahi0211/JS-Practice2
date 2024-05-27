fetch('https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD')
.then( res => res.json())
.then( res => dropDown(res))

function dropDown(res){
    let curr = Object.entries(res)
    for(let i=0; i<curr.length; i++)
    console.log(curr[i][0])
}