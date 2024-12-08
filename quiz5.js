let gamers_data = [
    {
      gamer_id: 1001,
      gamer_name: 'Jason',
    },
    {
      gamer_id: 1002,
      gamer_name: 'Ali',
    },
    {
      gamer_id: 1003,
      gamer_name: 'Mathew',
    },
  ];
  
  for (const gamer of gamers_data) {
    if (gamer.gamer_id === 1002) {
      gamer.gamer_name = 'Alexander';
    }
  }
  
  console.log(gamers_data);  

  