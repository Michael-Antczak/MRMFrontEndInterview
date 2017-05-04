export default function getPrimes(max){

    var result = [];

    // if (!max) return result;

    if (max >= 3) {

        // we can put 2 into the array as prime
        result.push(2);

        // we dont have to test for even numbers
        for (var k = 3; k < max; k = k + 2) {
            if(isPrime(k)) result.push(k);
        }

    };

    return result; 

    // **************************************
    // is Prime helper func that tests if the given number is a prime
    // **************************************
    function isPrime(number) {

        // we could add a validation here 
        // to check if the number is a positive number
        if (number < 0) return -1;

        // setting a flag to false
        var prime = false;

        // the switch section will handle the simple cases when 
        // number is < 10
        switch (number) {

            case 2:
            case 3:
            case 5:
            case 7:
                prime = true;  
                return prime;
                break; 
            
            case 1:
            case 4: 
            case 6:
            case 8:
            case 9:
                return prime;
                break;
        }

        // we have to test for dividors only up to the sqrt(number)
        // it tests number >= 10
        var upperBound = Math.floor(Math.sqrt(number))

        for (var i = 3; i <= upperBound; i++) {

            if (number % i == 0) return prime; 
            
        }

        // if we ever get here than the number is a prime
        prime = true;
        return prime;
    }
}
