let checkValue = "start";
    let userToDoList = [];
    
    while (checkValue !== "close") {
      checkValue = prompt("Please enter a To-Do task, or type 'close' to finish:");
    // I can catch other value than string...
      if (checkValue === null || checkValue.trim() === "") {
        console.log("Please enter a valid task (non-empty).");
      } else if (checkValue !== "close") {
        userToDoList.push(checkValue.trim()); // Trim whitespace before adding
      }
    }
    
    console.log("Your To-Do List:", userToDoList);