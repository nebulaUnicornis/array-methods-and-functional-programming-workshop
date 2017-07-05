function forEach(callback, theArray) {
  
  //This is a little hint to get you started ;)
  for (var i = 0; i < theArray.length; i++) {
    callback(theArray[i]);
  }
  
}


function map(mappingFunction, theArray) {
  var newArray = [];
  
  theArray.forEach(function(e){
    newArray.push(mappingFunction(e));
  })
  
  return newArray;
  
}


function filter(predicate, theArray) {
  var newArray = [];
  
  theArray.forEach(function(e){
    if(predicate(e)) {
      newArray.push(e);
    }
  })
  
  return newArray;
}


function every(predicate, theArray) {
  
  if (theArray.length === 0){
    return true;
  } else {
    for (var i = 0; i < theArray.length; i++) {
  	  if (!predicate(theArray[i])) {
  		  return false;
  	  }
    }
  return true;
  }
}


function some(predicate, theArray) {
  if (theArray.length === 0){
    return false;
  } else {
    for (var i = 0; i < theArray.length; i++) {
  	  if (predicate(theArray[i])) {
  		  return true;
  	  }
    }
  return false;
  }
}


function indexOf(item, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (item === theArray[i]) {
      return i;
    }
  }
  return -1;
}


function findIndex(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) {
      return i;
  	}
  }
  return -1;
}


function first(n, theArray) {
  if (arguments.length === 1) {
    return n[0];
  } else if (n < 0) {
    return [];
  } else if (n >= theArray.length) {
    return theArray;
  } else {
    var newArray = [];
    for (var i = 0; i < n; i++) {
      newArray.push(theArray[i]);
    }
    return newArray;
  }
}


function last(n, theArray) {
  if (arguments.length === 1) {
    return n[n.length-1];
  } else if (n < 0) {
    return [];
  } else if (n >= theArray.length) {
    return theArray;
  } else {
    var newArray = [];
    for (var i = theArray.length-n; i <= theArray.length-1; i++) {
      newArray.push(theArray[i]);
    }
    return newArray;
  }

}


function pluck(property, arrayOfObjects) {
  var newArray = [];
  
  //for loop over our array
  for(var i=0; i < arrayOfObjects.length; i++){
    //access the key for each element
    newArray.push(arrayOfObjects[i][property]);
  }

  return newArray;
}


function flatten(theArray) {
 var ret=[];
 for (var i= 0; i < theArray.length; i++){
   if (Array.isArray(theArray[i])) {
     ret = ret.concat(flatten(theArray[i]));
   }
   else{
     ret.push(theArray[i]);
   }
 }
 return ret;
}

function negate1(predicate) {
  

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
