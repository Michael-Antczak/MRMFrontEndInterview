export function groupBy(people, key) {

}

export function groupBySex(people) {

    var result = {
        male: [],
        female: []
    };

    people.map(function(elem, item) {

        if (elem.sex == 'male') {
            result.male.push(elem);
        } else if (elem.sex == 'female') {
            result.female.push(elem);
        }
    });

    return result;

}

export function groupByYearThenSex(people) {

    // get all the values of year
    var bornYear = [];
    people.map(function(elem, index) {
        if(bornYear.includes(elem.born) == false) {
            bornYear.push(elem.born);
        }
    });

    // initialise the result object
    var result = {};
    bornYear.map(function(elem, item) {
        result[elem] = {
            male: [],
            female: []
        };
    });

    // iterate over people add push them to the appropriate 
    // place in the result object
    people.map(function(elem, index) {
        result[elem.born][elem.sex].push(elem);
    });

    return result;

}
