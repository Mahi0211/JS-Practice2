const color = document.getElementById('color')
const btn = document.getElementById('btn')
const wrap = document.getElementById('wrap')

btn.addEventListener('click', function(){
    let hexColor = '#' + randomHexValue()
    // return hexColor;
    wrap.style.backgroundColor = hexColor
    color.innerHTML = hexColor
})

function randomHexValue(){
    let random = Math.floor(Math.random() * 16777215).toString(16);
    return random;
}

// using array and loop

// const btn = document.getElementById("btn")
// const colortext = document.getElementById("color")
// const wrap =  document.getElementById("wrap")
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

// btn.addEventListener('click',function(){
//     let hexColor = '#'
//     for(let i=1;i<=6;i++){
//         hexColor += randHexValue()
//     }
//     wrap.style.backgroundColor = hexColor
//     colortext.innerHTML = hexColor
// })

// function randHexValue(){
//    let randomIndex = Math.floor(Math.random()*16)
//    return hex[randomIndex]
// }

