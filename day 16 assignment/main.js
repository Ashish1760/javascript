function main(number) {

    for(let i = 5; i < number; i += 5) {
        console.log(i)
        processNumber(i);
    }

  

}


function processNumber(newValue) {
    let isOdd = false;
    let isPrime = false;

    if(newValue % 2 == 0) {
        isOdd = false
    } else {
        isOdd = true
    }

    for (let i = 2; i <= newValue; i++) {
        if (newValue % i === 0) {
            isPrime = false
        } else {
            isPrime = true
        }
    }

    if(isOdd) {
        console.log("Number is odd")
    } else {
        console.log("Number is even.")
    }

    if(isPrime && isOdd ) {
        console.log("Number is prime and odd")
    }
    else if(isPrime && !isOdd) {
        console.log("Number is prime and even.")
    } else {
        console.log("Number is not prime.")
    }
}

// driver code
main(50)