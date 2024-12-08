function goToSecondClass({ secondHour }) {
    return `Time to go to ${secondHour} class!`;
  }
  

  const myClasses = {
    firstHour: 'Ethics',
    secondHour: 'Programming',
    thirdHour: 'Biology',
  };
  
  console.log(goToSecondClass(myClasses));

  