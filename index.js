// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example of using wrapAdjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); // Output: "You are !!!amazing!!!"
  console.log(encouragingPromptFunction()); // Output: "You are !!!special!!!"
  
  