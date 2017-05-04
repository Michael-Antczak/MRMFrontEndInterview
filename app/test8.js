export default function test8(){


    // Sum all the numbers from 0 to 100
    // without using +, ++, +=

    var theSum = convertToBinary(100);

    for (var kk = 99; kk > 0; kk--) {

        theSum = addNumbersInBinary(theSum, convertToBinary(kk));

    }

    return convertToDecimal(theSum);

    //************************************************/
    // Helper functions
    //************************************************/

    // Convert a number in decimal to binary
    // INPUT: number in decimal
    // OUTPUT: array of bits
    function convertToBinary(number) {

        var result = [];

        number.toString(2).split('').map(function(elem, index) {
            result.push(parseInt(elem));
        });

        return result;
    }

    // Convert a number in binary to decimal
    // INPUT: array - binary number
    // OUTPUT: coresponding number in decimal
    function convertToDecimal(number) {

        var binary = number.join('');
        
        return parseInt(binary, 2);
    }

    // Pad number in binary with leading zeros
    // Input: array of bits representing a number in binary, number of zeros to be added
    // Output: array of bits representing a number in binary
    function padWithZeros (number, howManyMoreZeros) {
        for (var i = 1; i <= howManyMoreZeros; i++) {
            number.unshift(0);
        }
        return number;
    }

    // Make the two numbers equal in length
    // Input: 2 arrays of numbers
    // Output: Array with two arrays
    function equaliseLength(num1, num2) {

        var _1, _2;

        // Check the length of input, pad with leading zeros if needed
        if (num1.length > num2.length) {
            _1 = num1;
            _2 = padWithZeros(num2, num1.length - num2.length);
        } else if (num1.length < num2.length) {
            _1 = padWithZeros(num1, num2.length - num1.length);;
            _2 = num2;
        } else {
            _1 = num1;
            _2 = num2;
        }

        return [_1, _2];

    }

    // Add two numbers in binary 
    // Input: 2 arrays with bits
    // Output: sum of the two numbers in binary
    function addNumbersInBinary(num1, num2) {

        var sum = [];
        var temp = equaliseLength(num1, num2);
        var _1 = temp[0];
        var _2 = temp[1];
        var len = _1.length;
        var carry = 0;

        for (var i = len - 1; i >= 0; i--) {

            // both digits are 1s
            if (_1[i] == 1 && _2[i] == 1) {
                sum.unshift(0);
                carry = 1;

            // both digits are 0s
            } else if (_1[i] == 0 && _2[i] == 0) {

                if (carry == 0) {
                    sum.unshift(0);
                } else if (carry == 1) {
                    sum.unshift(1);
                    // reset carry flag
                    carry = 0;
                }
            
            // the case when one digit is 1 and the other one is 0
            } else {
            
                if (carry == 0) {
                    sum.unshift(1);
                } else if (carry == 1) {
                    sum.unshift(0);
         
                }
                
            }

        }

        // at the end we still need to check if there is still carry present
        // if yes then we need to add to the number
        if (carry == 1) sum.unshift(1);

        return sum;
    }

}
