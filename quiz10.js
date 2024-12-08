const getObjectFromArray = ([first, second, third, ...rest]) => ({
    first,
    second,
    third,
    rest
  });
  

  const ArrayOfNames = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];
  const result = getObjectFromArray(ArrayOfNames);
  
  console.log(result);
 
  