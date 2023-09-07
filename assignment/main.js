/**
 * Take number as input.
 * Check if number is even and prime
 * Or Odd and prime
 */
let number = prompt("Enter a number. ")

if (number < 2) {
    document.write("Number is not prime.")
}

else {
    // ya bata prime vaisakyo
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            document.write("Number is not prime.")
        }
    }

    if (number % 2 == 0) {
        document.write("Number is even + prime")
    } else {
        document.write("Number is odd + prime.")
    }
}