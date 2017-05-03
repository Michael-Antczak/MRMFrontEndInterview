export function capitalise(names){
  
    var NAMES = [];
    
    names.map(function(elem, index, array) {
        NAMES[index] = elem.toUpperCase();
    });

    return NAMES;

}

export function extractValue(objects, key) {
  
    var result = [];

    objects.map(function(elem, index, array) {

        result[index] = elem[key];

    });

    // return array of values for the key
    return result;

}

export function extractCompoundValue(objects, keysString) {
  
    // I am going to leave this code as it is 
    // This is how I worked on this, 
    // before tidying up

    // objects is an array of objects

    var keys = keysString.split('.');
    console.log('KEYS : ', keys);

    console.log('OBJ : ', objects);
    console.log('KEY : ', keysString);

    var result = [];

    objects.filter(function(elem, index, arr) {

        // I assume here, based on log that 
        // keys holds only two values
        // more robust code needed to be more flexible in terms of 
        // the number of elements in var keys
        console.log(elem[keys[0]][keys[1]]);
        result.push(elem[keys[0]][keys[1]]);

    })

    console.log(result);
    return result;

}
