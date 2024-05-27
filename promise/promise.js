function tatkal(){
        return new Promise((resolve, reject) => {
        let bookingSuccess = false
        if(bookingSuccess)
            setTimeout(resolve,1000,450)
        else
            reject("Failed to Book")
    })
} 

tatkal().then((amount) => console.log(`Booked Succesfully. The total amount is ${amount}`))
.catch((amount) => console.log(amount))

// function success(){
//     console.log("Booked Succesfully")
// }

// function failure(){
//     console.log("Failed to Book")
// }


// ---async---

async function fn(){
    try{
        console.log('hi')
        wait = await tatkal()
        console.log(wait)
        console.log('bye')
    }
    catch(err){
        console.log(err)
    }
    
}

// console.log(fn())

fn()


console.log(fetch('https://api-rv.herokuapp.com/rv/v2/meta/'))

