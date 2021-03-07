exports.min = function min (array) {     
  if(array === undefined){
    return 0;
  }
  if(!array.length){
    return 0;
  }
  let min = array[0];
  array.forEach(element => { 
    if(element < min){
      min = element;
    }
  });
  return min;
}

exports.max = function max (array) {
  if(array === undefined){
    return 0;
  }
  if(!array.length){
    return 0;
  }
  let max = array[0];
  array.forEach(element => {
    if(element > max){
      max = element;
    }
  });
  return max;
}

exports.avg = function avg (array) {
  if (array.length < 1 || !array)
    return 0;
  if(array === undefined){
    return 0;
  }
  // if(!array.length){
  //   return 0;
  // }
  let sum = 0;
  for(let i = 0; i < array.length; ++i){
    sum += array[i];
  } 
  return sum / array.length;
}
