export function filterNames(names, startsWith){
  
    // add a test for the startsWith to be a string

    // array to hold the result of filtering
    var result = [];

    // check every element of array for the condition
    // if met => add to result
    names.filter(function(elem, index, arr) {
	
	    if (elem.startsWith(startsWith)) result.push(elem);

    });

    return result;
}

export function objectFilter(objects, key, searchString) {
  
    // objects is an array of objects

    var result = [];

    objects.filter(function(elem, index, arr) {

        if (elem[key] === searchString) result.push(elem);

    })

    return result;
}

export function compoundObjectFilter(objects, keysString, searchString) {
  
  // objects is an array of objects

    var keys = keysString.split('.');

    var result = [];

    objects.filter(function(elem, index, arr) {

        if (elem[keys[0]][keys[1]] === searchString) result.push(elem);

    })

    return result;

}
