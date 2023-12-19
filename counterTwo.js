const takesMessage = (message, seconds) => {
    setTimeout(() => {
      console.log(message);
    }, 1000 * seconds);
  };
  takesMessage("hello world", 5);