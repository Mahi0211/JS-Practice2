
let ampm = document.getElementById('ampm')
function time(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes())
    let sec = padZero(dateTime.getSeconds())
    if(hr == 0o0){
        hr = 12;
    }
    if(hr>12){
        hr = hr-12
        ampm.innerHTML= 'PM'
    }
    document.getElementById("hours").innerHTML= padZero(hr)
    document.getElementById("mins").innerHTML= min
    document.getElementById('seconds').innerHTML= sec
}

function padZero(num){
    return num<10 ? '0' + num : num
}


setInterval(time,500)



// fetch api

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))