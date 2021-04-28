var words = {
    'DUP':  (a) => [a, a],
    'POP':  (a) => [],  // aka DROP
    '+':    (a, b) => [a + b],
    '-':    (a, b) => [a - b],
  }
  
 
  
  const process = (input) => 
    input.reduce (
      (stack, word) => word in words ? [
        ...(stack.slice(0, -(words[word].length))), 
        ...words[word](...stack.slice (-words[word].length))
      ] : [...stack, word], 
      []
    )
    
  // const peek = (array) =>
  //   array[array.length - 1]
  
  const solution = (str) =>
    process (
      str.split (' ').map (w => isFinite (w) ? Number (w) : w)
    ).pop();
  
  console.log (
    solution ('13 7 20 DUP - +')
  )