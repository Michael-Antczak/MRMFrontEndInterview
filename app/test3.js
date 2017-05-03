export default function test3(numMax){

    // COMMENT 1 : more tests are needed to validate 
    // for negative values

    // COMMENT 2 : once the tests pass I would look at the
    // refactoring, i.e. use switch statement

    // array for the output data
    var result = []

    // helper variables to store intermiedate data
    // update after every pass of the for loop
    // and then shifted
    var lower = 0;
    var higher = 1;

    // test for an empty argument
    if (!numMax) return result;

    // test for numMax = 0
    if (numMax == 0) return result;

    // test for numMax = 1
    if (numMax == 1) {

        result = [0];
        return result;
    }

    // test for numMax = 2
    if (numMax == 2) {

        result = [0, 1];
        return result;

    } else {

        result = [lower, higher]; 

        // this is the case when numMax > 2
        // it will go crazy if numMax is negative
        for ( var i = 3; i <= numMax; i++) {

            var currentValue = lower + higher;
            result.push(currentValue);

            // shift values
            lower = higher;
            higher = currentValue;

        }
    }

    return result; 
}
