const spinner = function() {
  let spinCycle = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
  let timer = -100;
  
  for (let char of spinCycle) {
    timer += 200
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, timer);
  };
};

spinner();